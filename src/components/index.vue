<template>
    <div id="index">
        <router-view></router-view>
        <v-foot></v-foot>
    </div>
</template>

<script>
    import foot from './foot.vue'
    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components:{
            'v-foot':foot
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/function.scss';
</style>
