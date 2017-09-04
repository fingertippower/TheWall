<template>
    <div>
        <letter-head></letter-head>
        <router-view></router-view>
    </div>
</template>

<script>
    import letterHead from './letter-head.vue'
    import letterPut from './letter-put.vue'
    export default {
        data () {
            return {

            }
        },
        components:{
            'letter-head':letterHead,
            'letter-put':letterPut
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
</style>