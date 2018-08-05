import {ADD_TODO, DELETE_TODO} from "../actionTypes";

let reducer = (state = {list: []}, action) => {
    if (action === undefined) {
        return state;
    }
    switch (action.type) {
        case ADD_TODO:
            return {list: action.list};
        case DELETE_TODO:
            return {list: action.list};
        default:
            return state;
    }
};

export default reducer;