<template>
    <div>
        <div class="container">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="username" class="form-control" id="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password">
                </div>
                <button class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {REGISTER} from '@/store/action.type'
    export default {
        data() {
            return {
                email: '',
                username:'',
                password:''
            }
        },
        methods: {
            register() {
                this.$store
                .dispatch(REGISTER, {
                email: this.email,
                password: this.password,
                username: this.username
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