import {FETCH_ARTICLE,POST_COMMENT,FETCH_COMMENTS} from './action.type'
import {SET_ARTICLE,SET_COMMENTS,ADD_COMMENT} from './mutation.type'
import {ArticleService} from '@/common/api.service'
import { CommentService } from '../common/api.service';
export default {
    state: {
        article: {},
        commentList:[]
    },
    getters: {
        article: state => {
            return state.article;
        },
        commentList: state => {
            return state.commentList;
        }
    },
    mutations: {
        [SET_ARTICLE](state, payload) {
            state.article = payload;
        },
        [SET_COMMENTS](state,payload){
            state.commentList= payload
        },
        [ADD_COMMENT](state,payload){
            state.commentList.push(payload)
        }
    },
    actions: {
        async [FETCH_ARTICLE]({commit},slug) {
            let {data} = await ArticleService.get(slug)
            commit(SET_ARTICLE,data.article)
        },
        async [POST_COMMENT]({commit},payload){
            let {data}= await CommentService.post(payload.commentText,payload.articleSlug)
            console.log(data.comment)
            commit(ADD_COMMENT,data.comment)
        },
        async [FETCH_COMMENTS]({commit},articleSlug){
            let {data} = await CommentService.get(articleSlug)
            commit(SET_COMMENTS,data.comments)
        }
    }
};