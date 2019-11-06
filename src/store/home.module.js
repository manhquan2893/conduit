import {FETCH_ARTICLES} from './action.type'
import {ArticleService} from '@/common/api.service'
import {SET_ARTICLE_LIST,
        FETCH_START,
        FETCH_END} from './mutation.type'
const state={
    articleList:[],
    articleCount:20,
    isLoading:true
}
export const getters={
    articleList(state){
        return state.articleList
    },
    articleCount(state){
        return state.articleCount
    },
    isLoading(state){
        return state.isLoading
    }
}
const mutations={
    [SET_ARTICLE_LIST](state,payload){
        state.articleList=payload.articles
    },
    [FETCH_START](state){
        state.isLoading=true
    },
    [FETCH_END](state){
        state.isLoading=false
    }
}
const actions={
    [FETCH_ARTICLES]({commit},{type,filter}){
        console.log(type)
        commit(FETCH_START);
        ArticleService.query(type,filter).then(function(res){
           commit(SET_ARTICLE_LIST,res.data)
           commit(FETCH_END)
       })
    }
}
export default{
    state,
    actions,
    mutations,
    getters
}