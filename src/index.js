import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import Foo from './components/Foo';
import Bar from './components/Bar';
import { Provider } from 'react-redux';
import store from './store';
// import { syncHistoryWithStore  } from 'react-router-redux'
// import { Router, Route ,HashRouter  } from 'react-router';
//
// import { createBrowserHistory } from 'history';
// const history = syncHistoryWithStore(createBrowserHistory(), store);


let element = document.getElementById('app');


// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp/>
        {/*<Router history={history}>
            <Route path="/" component={ToDoApp}>
                <Route path="/foo" component={Foo}/>
                <Route path="/bar" component={Bar}/>
            </Route>
        </Router>*/}
    </Provider>,
    element
);
