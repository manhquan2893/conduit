<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="logo">
                <router-link to="/" class="nav-link"><h3>Conduit</h3></router-link>
                </div>
                <div class="_navBar">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item" v-if="!authenticated">
                    <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!authenticated">
                    <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="authenticated">
                        <a class="nav-link">{{user.username}}</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.getters.user 
            },
            authenticated(){
                return this.$store.getters.authenticated
            }
        },
    }
</script>

<style lang="scss" scoped>
.header{
  padding:5px 0;
}
.header .container{
  display:flex;
  justify-content: space-between;
}
.logo{
  display:flex;
  align-items: center;
  h3{
    margin:0;
  }
}
ul{
  border-bottom:none;
}
</style>