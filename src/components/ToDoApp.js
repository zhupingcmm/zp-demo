import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoAction from '../actions/todoAction'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { MemoryRouter} from 'react-router';

function Index(){
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>;
}

const Topic = ({ match }) => (
    <h1>Topic {match.params.id}</h1>
);

class ToDoApp extends Component{
    constructor(props){
        super(props);
        this.todo = this.todo.bind(this);
    }
    todo(){
      this.props.actions.todo('zo');
      this.props.actions.getTodo();
    };





    render() {
        const {
            name
        }=this.props;
        return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/topic/1">Top 1</Link>
                    </li>
                    <li>
                        <Link to="/topic/2">Top 2</Link>
                    </li>
                    <li>
                        <Link to="/topic/3">Top 3</Link>
                    </li>
                </ul>

                <div id="page-container">
                    <Route path="/topic/:id" component={Topic} />
                </div>
            </div>
        </Router>

        );
    }
}
function mapStateToProps(state) {
    return{
        name: state.getIn(['getTodo'])
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(todoAction,dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp);
