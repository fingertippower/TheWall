<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import headnotice from './components/headnotice.vue'
  import headnavigation from './components/headnavigation.vue'
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
  @import './assets/css/function.scss';
</style>
