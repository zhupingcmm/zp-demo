import {Promise} from "es6-promise";

const getTodo=()=>{
    let xhr= new XMLHttpRequest();
    xhr.open('GET','http://localhost:5000/api/todo',true);
    let response;
    xhr.onload = function () {
        response = xhr.response;
    };
    xhr.send();
    return Promise.resolve(response);
};

export default {
    getTodo
}
