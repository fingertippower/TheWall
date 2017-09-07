<template>
    <div>
        <div class="head">
            <img src="../assets/img/return.png" @click="goBack">
            <span>关注</span>
        </div>
        <div @click="concernClick">
            <router-link to="/concern/concern-concern">
                <button class="concern">关注7</button>
                <button class="concern-click" v-show="click.concernColor">关注7</button>
            </router-link>
        </div>
        <div @click="fansClick">
            <router-link to="/concern/concern-fans">
                <button class="fans">粉丝3</button>
                <button class="fans-click" v-show="click.fansColor">粉丝3</button>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{}

        },
        computed:mapGetters(['click']),
        methods:{
            ...mapActions(['concernClick','fansClick']),
            goBack:function(){
                this.$router.go(-1);
            }
        }
    }

</script>

<style lang="scss">
    @import '../assets/css/function.scss';
    .head{
        width:100%;
        height:px2rem(109.1172px);
        background-color: #F4AD12;
    }
    .head img{
        width:px2rem(23px);
        height:px2rem(36px);
        margin-left: px2rem(44.5859px);
        margin-top: px2rem(58.1196px);
    }
    .head span{
        font-size: px2rem(42px);
        color: #fff;
        text-align: center;
        margin-top:px2rem(55.4971px);
        margin-left: px2rem(276.0039px);
        position: absolute;
    }
    button{
        width: 50%;
        height: px2rem(67.45px);
        background-color: transparent;
        font-size: px2rem(42px);
        position: absolute;
        border-right: none;
        border-top: none;
        border-left: none;
        border-bottom-color: transparent;
        color: #939292;
    }
    .fans{
        margin-left: 50%;
    }
    .fans-click{
        margin-left: 50%;
        border-bottom-color: #F4AD12;
        color: #000;
    }
    .concern-click{
        border-bottom-color: #F4AD12;
        color: #000;
    }
</style>