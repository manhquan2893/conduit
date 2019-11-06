<template>
    <div>
        <div class="container">
            <div class="_navBar">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">GlobalFeed</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/my-feed" class="nav-link">MyFeed</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>