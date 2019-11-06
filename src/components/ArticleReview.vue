<template>
    <div class="articleReview">
        <div class="header">
            <div class="image">
                <img :src="article.author.image" alt="">
            </div>
            
            <div class="meta">
                <div class="author-name">
                    {{article.author.username}}
                </div>
                <div class="created-date">
                    {{article.createdAt}}
                </div>
            </div>
        </div>
        <router-link class="text" :to="articleLink">
            <h5 class="title">{{article.title}}</h5>
            <div class="description">
                {{article.description}}
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            article: {
                type: Object,
                required:true 
            }
        },
        computed: {
            articleLink() {
                return {
                    name: "article",
                    params: {
                    slug: this.article.slug
                    }
                }; 
            }
        },
    }
</script>

<style lang="scss" scoped>
    .articleReview{
        padding:18px 0 ;
        border-bottom:1px solid rgba(0,0,0,0.1);
    }
    .header{
        display:flex;
        .image{
            display: flex;
            align-items: center;
            margin-right:1rem;
        }
        img{
            width:30px;
            height: 30px;
        }
        font-size:14px;
    }
</style>