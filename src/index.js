import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import { Provider } from 'react-redux';
import store from './store';



let element = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp/>
    </Provider>,
    element
);
