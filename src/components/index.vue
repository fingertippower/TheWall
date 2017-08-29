<template>
    <div id="index">
        <v-headnotice></v-headnotice>
        <v-headnavigation></v-headnavigation>
        <v-list></v-list>
        <router-view></router-view>
        <v-pen></v-pen>
        <v-foot></v-foot>
    </div>
</template>

<script>
    import headnotice from './headnotice.vue'
    import headnavigation from './headnavigation.vue'
    import foot from './foot.vue'
    import indexList from './index-list.vue'
    import indexPen from './index-pen.vue'
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
            'v-list':indexList,
            'v-pen':indexPen
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/function.scss';
    #index{
        position: absolute;
        top: 0;
        width: 100%;
        background-image: url("../assets/img/indexBackground2.png");
        background-size: 100% 100%;
        background-attachment:fixed;
    }
</style>
