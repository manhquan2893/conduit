<template>
    <div>
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item" 
            v-for="page in numOfPage" 
            :key="page"
            @click="changePage(page,$event)">
                <a class="page-link" href="#">{{page}}</a>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            numOfPage: {
                type: Number
            }
        },
        methods: {
            //update current page on ArticleList
            changePage(gotoPage) {
                // emit currentPage to parent
                this.$emit('update:currentPage',gotoPage);
                // active current page item
                let pageItems=document.getElementsByClassName('page-item')
                for (let i = 0; i < pageItems.length; i++) {
                    pageItems[i].classList.remove('active');
                }
                event.target.parentNode.classList.add('active');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>