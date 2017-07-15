<template>
    <div id="app">
        <wall-login></wall-login>
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

</style>
