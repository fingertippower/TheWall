<template>
    <div>
        <div class="head">
            <img src="../assets/img/return.png" @click="goBack">
            <span>校友</span>
        </div>
        <div class="people" v-for="(val,schoolfellow) in getSchoolfellowList">
            <img :src="val.schoolfellowImg" onerror="this.style.display='none'">
            <span>{{val.schoolfellowName}}</span>
            <hr/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import axios from 'axios'
    export default{
        data(){
            return{

            }
        },
        computed:mapGetters(['getSchoolfellowList']),
        methods:{
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
        position: fixed;
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
    .people{
        position: relative;
        top:px2rem(110px);
        z-index: -1;
    }
    .people img{
        width: px2rem(68px);
        height: px2rem(68px);
        margin-top: px2rem(20px);
        margin-left: px2rem(32px);
    }
    .people span{
        font-size: px2rem(28px);
        margin-left: px2rem(22px);
        margin-top: px2rem(30px);
    }
    .people hr{
        margin-top: px2rem(20px);
    }
</style>