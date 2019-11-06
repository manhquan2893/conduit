import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:()=>import("@/views/Home"),
            children:[
                {
                    name:'home',
                    path:'',
                    component:()=>import("@/views/HomeGlobal")
                },
                {
                    path:'/my-feed',
                    component:()=>import("@/views/HomeMyFeed")
                }
            ]
        },
        {
            name:'register',
            path:'/register',
            component:()=>import("@/views/Register")
            
        },
        {
            path:'/login',
            component:()=>import("@/views/Login")
        },
        {
            name:'article',
            path:'/article/:slug',
            component:()=>import("@/views/ArticleDetail")
        }
    ]
})