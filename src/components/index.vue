<template>
    <div id="app">
        <router-link :to="'/register'" class="linshi">立即注册</router-link>
        <router-link :to="'/login'" class="linshi1">立即登录</router-link>
        <router-view class="rou"></router-view>
    </div>
</template>

<script>
    import login from './login.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            wallLogin:login
        }
    }
</script>

<style lang="scss">
    .rou{
        width: 100%;
        height: auto;
    }
    .linshi{
        position: fixed;
        top: 0px;
        float: left;
    }
    .linshi1{
        position: fixed;
        bottom: 0px;
        float: right;
    }
</style>
