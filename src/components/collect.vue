<template>
    <div class="background">
        <div class="head">
            <img src="../assets/img/return.png" @click="goBack">
            <span>收藏</span>
        </div>
        <div class="collect" v-for="(val,collect) in getCollectList">
            <img class="peopleImg" :src="val.collectPeopleImg" onerror="this.style.display='none'">
            <span class="nickname">{{val.collectNickname}}</span>
            <p class="title">{{val.collectTitle}}</p>
            <p class="text">{{val.collectText}}</p>
            <p class="time">{{val.collectTime}}</p>
            <img class="contentImg" :src="val.collectContentImg" onerror="this.style.display='none'">
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
        computed:mapGetters(['getCollectList']),
        methods:{
            goBack:function(){
                this.$router.go(-1);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .background{
        width: 100%;
        height: 100%;
    }
    .head{
        width:100%;
        height:px2rem(109.1172px);
        background-color: #F4AD12;
        position: fixed;
        z-index: 1;
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
    }
    .collect{
        width: px2rem(690px);
        height: px2rem(300px);
        margin: auto;
        margin-bottom: px2rem(200px);
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
        background-color: rgba(255,255,255,0.5);
        box-shadow:0 0 px2rem(4px) dimgrey;
        position: relative;
        top: px2rem(150px);
    }
    .collect .peopleImg{
        margin-top: px2rem(25px);
        margin-left: px2rem(25px);
        width: px2rem(68px);
        height: px2rem(68px);
    }
    .collect .nickname{
        font-size: px2rem(25px);
        margin-left: px2rem(15px);
        margin-top: px2rem(45px);
        position: absolute;
    }
    .collect .title{
        font-size: px2rem(26px);
        margin-top: px2rem(0px);
        margin-left: px2rem(25px);
        position: absolute;
    }
    .collect .text{
        width: px2rem(450px);
        margin-top: px2rem(70px);
        margin-left: px2rem(25px);
        position: absolute;
        color: #CDCCCB;
    }
    .collect .time{
        margin-top: px2rem(160px);
        margin-left: px2rem(25px);
        position: absolute;
        color: #CDCCCB;
    }
    .collect .contentImg{
        width: px2rem(200px);
        height: px2rem(300px);
        float: right;
        border-radius: 0 px2rem(10px) px2rem(10px) 0;
    }
</style>