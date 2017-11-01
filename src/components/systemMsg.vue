<template>
    <div class="background">
        <div class="head">
            <img src="../assets/img/return.png" @click="goBack">
            <span>系统消息</span>
        </div>
        <div class="msg">
            <ul>
                <li v-for="(val, index) in getSystemMsgList">
                    <p class="title">{{val.systemMsgTitle}}</p>
                    <p class="text">{{val.systemMsgText}}</p>
                    <p class="time">{{val.systemMsgTime}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return{

            }
        },
        computed:mapGetters(['getSystemMsgList']),
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
        margin-left: px2rem(231px);
    }
    .msg{
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
    .msg .title{
        font-size: px2rem(26px);
        margin-top: px2rem(20px);
        margin-left: px2rem(25px);
        position: absolute;
    }
    .msg .text{
        width: px2rem(450px);
        margin-top: px2rem(70px);
        margin-left: px2rem(25px);
        position: absolute;
        color: #CDCCCB;
    }
    .msg .time{
        margin-top: px2rem(160px);
        margin-left: px2rem(25px);
        position: absolute;
        color: #CDCCCB;
    }
</style>