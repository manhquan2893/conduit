import {REGISTER,CHECK_AUTH,LOGIN} from './action.type'
import {ApiService} from '@/common/api.service'
import {SET_AUTH,SET_ERROR} from './mutation.type'
import JwtService from '@/common/jwt.service'
export default {
    state: {
        user: '',
        authenticated:'',
        error:[]
    },
    getters: {
        user: state => {
            return state.user;
        },
        authenticated:state=>{
            return state.authenticated
        }
    },
    mutations: {
        [SET_AUTH](state, payload) {
            state.user = payload;
            state.authenticated=true;
            JwtService.setToken(payload.token)
        },
        removeAuth(state){
            state.authenticated=false
        },
        [SET_ERROR](state,payload){
            state.error=payload
        }
    },
    actions: {
        [REGISTER]({commit},credential) {
            return new Promise(function(resolve,reject){
                ApiService.post("users",{user:credential})
                //get only prop data of the object returned
                .then(({data})=>{
                    commit(SET_AUTH,data.user)
                    resolve()
                    reject()
                })
            });
        },
        [CHECK_AUTH](){
            return new Promise(function(resolve){
                if(JwtService.getToken()){
                    JwtService.setToken(JwtService.getToken())
                    ApiService.get("user").then(({data})=>{
                        console.log(data)
                    })
                }
                else{
                    resolve()
                }
            })
        },
        [LOGIN]({commit},credential){
            console.log(commit)
            return new Promise(function(resolve){
                ApiService.post("users/login",{user:credential})
                .then(({data})=>{
                    commit(SET_AUTH,data.user)
                    resolve()
                })
                .catch((error)=>{
                    console.log(error)
                })
            })
        }
    }
};