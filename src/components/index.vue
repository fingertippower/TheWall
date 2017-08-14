<template>
    <div id="app">
        <v-headnotice></v-headnotice>
        <v-headnavigation></v-headnavigation>
        <v-list></v-list>
        <v-foot></v-foot>
    </div>
</template>

<script>
    import headnotice from './headnotice.vue'
    import headnavigation from './headnavigation.vue'
    import foot from './foot.vue'
    import indexList from './index-list.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            'v-headnotice':headnotice,
            'v-headnavigation':headnavigation,
            'v-foot':foot,
            'v-list':indexList
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/function.scss';
    #app{
        width: 100%;
        height: px2rem(1334px);
        background: url("../assets/img/indexBackground.png");
        background-size: 100% px2rem(1334px);
    }
</style>
