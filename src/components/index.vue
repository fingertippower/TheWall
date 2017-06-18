<template>
    <div id="app">
        <index-head></index-head>
        <indexContent></indexContent>
        <index-foot></index-foot>
    </div>
</template>

<script>
    import foot from './foot.vue'
    import head from './head.vue'
    import content from './content.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            indexFoot:foot,
            indexHead:head,
            indexContent : content
        }
    }
</script>

<style lang="scss">

</style>
