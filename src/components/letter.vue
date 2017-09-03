<template>
    <div>
        <letter-head></letter-head>
        <router-view></router-view>
    </div>
</template>

<script>
    import letterHead from './letter-head.vue'
    export default {
        data () {
            return {

            }
        },
        components:{
            'letter-head':letterHead
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
</style>