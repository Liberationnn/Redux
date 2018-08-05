// 创建仓库
export const createStore = (reducer)=> {
    //状态
    let state;
    // 监听函数数组
    let listeners = [];

    // 用来获取最新的状态
    let getState = () => state;
    // 向仓库发送action
    let dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };
    // 订阅仓库内的状态变化事件，当状态发生改变后会调用对应的监听函数
    let subscribe = (listener) => {
        listeners.push(listener);
        // 返回一个取消订阅的函数，调用它可以取消订阅
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };
    dispatch();
    return {
        getState,
        subscribe,
        dispatch
    };
};