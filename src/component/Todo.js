import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {store} from "../store";
import {ADD_TODO, DELETE_TODO} from "../actionTypes";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: store.getState().todo.list};
    }

    componentWillMount() {
        this.unSubscribe = store.subscribe(() => {
            this.setState({list: store.getState().todo.list});
        });
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    addTodo = (e) => {
        let value = e.target.value.trim();
        if (e.keyCode === 13 && value !== "") {
            let list = [...store.getState().todo.list, value];
            store.dispatch({type: ADD_TODO, list});
            e.target.value = "";
        }
    };

    deleteTodo = (index) => {
        let list = store.getState().todo.list;
        list.splice(index, 1);
        store.dispatch({type: DELETE_TODO, list});
    };

    render() {
        return (
            <div className="row col-md-4 col-md-offset-4" style={{marginTop: 10}}>
                <input onKeyDown={this.addTodo} className="form-control" type="text" autoFocus/>
                <ul className="list-group">
                    {
                        this.state.list.map((todo, index) => (
                            <li key={index} className="list-group-item">
                                {todo}
                                <button onClick={() => this.deleteTodo(index)} className="btn btn-danger pull-right btn-xs">X</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}