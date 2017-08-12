<template>
    <div id="app">
        <v-headnotice></v-headnotice>
        <v-headnavigation></v-headnavigation>
        <router-view></router-view>
        <v-foot></v-foot>
    </div>
</template>

<script>
    import headnotice from './headnotice.vue'
    import headnavigation from './headnavigation.vue'
    import foot from './foot.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            'v-headnotice':headnotice,
            'v-headnavigation':headnavigation,
            'v-foot':foot
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/function.scss';
</style>
