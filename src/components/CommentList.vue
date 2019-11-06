<template>
    <div>
        <div class="list-comments" v-if="commentList.length>0">
            <div v-for="(comment,index) in commentList" :key="index">
                <div class="header">
                    <div class="image">
                        <img :src="comment.author.image" alt="">
                    </div>
                    
                    <div class="meta">
                        <div class="author-name">
                            {{comment.author.username}}
                        </div>
                        <div class="created-date">
                            {{comment.createdAt}}
                        </div>
                    </div>
                </div>
                <div class="content">
                    {{comment.body}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['commentList'],
        created () {
            console.log(this.commentList);
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