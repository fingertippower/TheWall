<template>
    <div id="app">
        <v-headnotice></v-headnotice>
        <v-headnavigation></v-headnavigation>
    </div>
</template>

<script>
    import headnotice from './headnotice.vue'
    import headnavigation from './headnavigation.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            'v-headnotice':headnotice,
            'v-headnavigation':headnavigation,
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/function.scss';
</style>
