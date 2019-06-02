import * as ActionTypes from './actionTypes';
import todoService from "../service/todoService";
import fetch from 'node-fetch'
export function todo(value) {
    return{
        type:ActionTypes.TODO,
        value
    }
}

// export function getTodo() {
//     return (dispatch)=>{
//         todoService.getTodo().then((response)=>{
//             console.log(response);
//             dispatch({
//                 type: ActionTypes.GET_TODO,
//                 response:response
//             })
//         }).catch(error => {
//             console.log(error)
//         })
//     }
// }

 export function getTodo(){
    return (dispatch)=>{
        return fetch('http://localhost:5000/api/todo',{
            method:'get',
        }).then((res)=>{
            return res.json();
        }).then((json)=>{
            dispatch({
                type: ActionTypes.GET_TODO,
                response:json
            })
        })
    }
}
