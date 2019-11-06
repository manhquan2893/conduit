<template>
    <div>
        <div class="container">
            <h5>{{article.title}}</h5>
            <p>{{article.description}}</p>
            <CommentList :commentList="commentList"></CommentList>
            <CommentEdit :articleSlug="article.slug"></CommentEdit>         
        </div>
        
        
        
    </div>
</template>

<script>
    import store from '@/store'
    import CommentList from '@/components/CommentList.vue';
    import CommentEdit from '@/components/CommentEdit.vue';
    export default {
        components: {
            CommentEdit,
            CommentList
        },
        computed: {
            article() {
                return store.getters.article 
            },
            commentList(){
                return store.getters.commentList
            }
        },
        beforeRouteEnter(to,from,next){
           Promise.all([
               store.dispatch('fetchArticle',to.params.slug),
               store.dispatch('fetchComments',to.params.slug)
           ]).then(()=>{next()})
        },
        mounted () {
            console.log(this.commentList);
        },
    }
</script>

<style lang="scss" scoped>
    
</style>