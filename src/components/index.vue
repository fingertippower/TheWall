<template>
    <div id="app">
        <index-head></index-head>
        <index-foot></index-foot>
    </div>
</template>

<script>
    import foot from './foot.vue'
    import head from './head.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            indexFoot:foot,
            indexHead:head
        }
    }
</script>

<style lang="scss">

</style>
