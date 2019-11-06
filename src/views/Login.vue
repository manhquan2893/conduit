<template>
    <div>
        <div class="container">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password">
                </div>
                <button class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {LOGIN} from '@/store/action.type'
    export default {
         data() {
            return {
                email: '',
                password:''
            }
        },
        methods: {
            // async login() {
            //     let data= await this.$store
            //     .dispatch(LOGIN, {
            //     email: this.email,
            //     password: this.password
            //     })
            //     console.log(data)
            // }
            login(){
                this.$store
                 .dispatch(LOGIN, {
                 email: this.email,
                 password: this.password
                 })
                 .then(()=>{
                     this.$router.push({name:'home'})
                 })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        max-width:500px;
        border:1px solid rgba(0,0,0,0.1);
        padding: 1rem;
        border-radius: 8px;
    }
</style>