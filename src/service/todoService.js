import API from '../api';
import {Promise} from 'es6-promise';

export default class todoService {

    static getTodo(){
        return new Promise((resolve,reject)=>{
            API.getTodo()
                .then((response)=>{
                    resolve(response)
                })
                .catch((error)=>reject(error))
        })
    }
}
