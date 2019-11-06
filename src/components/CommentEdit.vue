<template>
    <div>
        <textarea id="" cols="30" rows="10" v-model="commentText"></textarea>
        <button class="btn btn-primary float-right" @click="postComment">Comment</button>
    </div>
</template>

<script>
    import {POST_COMMENT} from '@/store/action.type'
    export default {
        props: {
            articleSlug: {
                type: String
            },
        },
        data() {
            return {
                commentText: ''
            }
        },
        methods: {
            postComment() {
                this.$store.dispatch(POST_COMMENT,{
                    articleSlug:this.articleSlug,
                    commentText:this.commentText
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    textarea{
        width:100%;
    }
</style>