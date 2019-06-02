import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoAction from '../actions/todoAction'



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
            <form>
                <button type="button" onClick={this.todo}>click me</button>
                <div>{name !== undefined ? name['name']: undefined}</div>
            </form>

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
