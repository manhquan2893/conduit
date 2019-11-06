<template>
    <div>
        <ArticleList type="feed"></ArticleList>
    </div>
</template>

<script>
    import ArticleList from '@/components/ArticleList.vue';
    export default {
        components: {
            ArticleList,
        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>