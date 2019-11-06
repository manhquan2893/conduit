import axios from 'axios'
axios.defaults.baseURL = 'https://conduit.productionready.io/api';
export const ApiService={
    setHeader(token){
        return axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    },
    query(resource,params){
        return axios.get(resource,params)
        .catch(error=>console.log(error))
    },
    get(resource,slug=""){
        return axios.get(`${resource}/${slug}`)
        .catch(error=>console.log(error))
    },
    post(resource,params){
        return axios.post(resource,params)
        .catch(error=>console.log(error))
    }
}
export const ArticleService= {
    query(type,filter){
        return ApiService.query("articles"+(type==="feed"? "/feed":""),{params:filter})
    },
    get(slug){
        return ApiService.get("articles",slug)
    }
}
export const CommentService={
    post(commentText,articleSlug){
        return ApiService.post(`articles/${articleSlug}/comments`,{
            comment:{
                body:commentText
            }
        })
    },
    get(articleSlug){
        return ApiService.get(`articles/${articleSlug}/comments`)
        .catch(error=>console.log(error))
    }
}
