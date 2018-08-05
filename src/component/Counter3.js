import React from 'react';
import {INCREASE, DECREASE} from "../actionTypes";
import {connect} from 'react-redux';

class Counter2 extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.onIncrease}>+</button>
                <button onClick={this.props.onDecrease}>-</button>
            </div>
        );
    }
}

// 把store里的状态对象映射成属性
let mapStateToProps = (state) => ({
    value: state.number
});

// 把dispatch方法映射成UI组件的属性
let mapDispatchToProps = (dispatch) => ({
    onIncrease: () => dispatch({type: INCREASE, amount: 2}),
    onDecrease: () => dispatch({type: DECREASE, amount: 2})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);