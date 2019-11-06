<template>
    <div>
        <div class="isLoading" v-if="isLoading">
            Loading...
        </div>
        <div class="articleList" v-else>
            <ArticleReview v-for="(article,index) in articleList" 
                :key="index" 
                :article="article">
            </ArticleReview>
        </div>
        <Pagination :numOfPage="numOfPage" 
        :currentPage.sync="currentPage"
        v-if="articleCount>itemsPerPage"></Pagination>
    </div>
</template>

<script>
    import {FETCH_ARTICLES} from "@/store/action.type"
    import ArticleReview from "@/components/ArticleReview"
    import {mapGetters} from "vuex"
    import Pagination from '@/components/Pagination.vue';
    export default {
        components:{
            ArticleReview,
            Pagination
        },
        data() {
            return {
                currentPage: 1,
                itemsPerPage:3
            }
        },
        props: {
            type: {
                type: String,
                default: ''
            },
        },
        computed: {
            filter(){
                let filter={}
                filter.offset=(this.currentPage-1)*this.itemsPerPage
                filter.limit=this.itemsPerPage
                return filter
            },
            ...mapGetters(["articleList","isLoading","articleCount"]),
            numOfPage(){
                return Math.ceil(this.articleCount/this.itemsPerPage)
            }
        },
        methods: {
            fetchArticle() {
                this.$store.dispatch(FETCH_ARTICLES,{type:this.type,filter:this.filter})
            }
        },
        watch: {
            currentPage() {
                this.fetchArticle()
            }
        },
        created () {
            this.fetchArticle();
        },
    }
</script>

<style lang="scss" scoped>
    .isLoading{
        min-height: 405px;
    }
</style>