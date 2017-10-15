<template>
    <div class="bg">
        <div class="head">
            <img class="gotoBack" src="../assets/img/gotoBack.png" @click="goBack">
            <span class="headMsg">详情阅读</span>
        </div>
        <div class="body">
            <p class="title">{{getLetterMsg[0].letterTitle}}</p>
            <p class="word">{{getLetterMsg[0].letterBody}}</p>
            <div class="imgBox">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg1" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg2" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg3" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg4" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg5" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg6" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg7" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg8" onerror="this.style.display='none'">
                <img class="listImg" :src="getLetterMsg[0].confessionLetterImg9" onerror="this.style.display='none'">
            </div>
            <div class="author">{{getLetterMsg[0].letterAuthor}}</div>
            <div class="time">{{getLetterMsg[0].letterDate}}</div>
        </div>

        <div class="foot"></div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default{
        computed:mapGetters(['getLetterMsg']),
        methods:{
            goBack:function(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/function.scss';
    .bg{
        .head{
            z-index: 2;
            position: fixed;
            top: 0;
            width: 100%;
            height: px2rem(149px);
            background-color: rgba(244,173,18,1);
            text-align: center;
            .gotoBack{
                position: fixed;
                width: px2rem(22px);
                height: px2rem(35px);
                left: px2rem(36px);
                top: px2rem(61px);
            }
            .headMsg{
                color: #fff;
                font-size: px2rem(48px);
                position: relative;
                top: px2rem(54px);
            }
        }
        .body{
            position: absolute;
            margin-top: px2rem(149px);
            margin-bottom: px2rem(109px);
            width: 80%;
            background-image: url("../assets/img/letterStyle.png"),url("../assets/img/letterStyle.png");
            background-repeat: repeat-y;
            background-position: left top, right top;
            background-size: px2rem(33px) px2rem(123px);
            padding: px2rem(70px);
            .title{
                font-size: px2rem(36px);
                color: rgba(87,60,13,1);
            }
            .word{
                margin-top: px2rem(30px);
                font-size: px2rem(28px);
                line-height: px2rem(60px);
                color: rgba(87,60,13,1);
            }
            .imgBox{
                margin-top: px2rem(30px);
                width: 100%;
                max-height: px2rem(700px);
                .listImg{
                    margin-left: px2rem(7px);
                    width: px2rem(183px);
                    height: px2rem(183px);
                }
            }
            .author{
                float: right;
                width: px2rem(100px);
                height: px2rem(50px);
                margin-top: px2rem(20px);
                color: rgba(87,60,13,1);
            }
            .time{
                color: rgba(87,60,13,1);
                position: relative;
                float: right;
                left: px2rem(80px);
                width: px2rem(100px);
                height: px2rem(50px);
                margin-top: px2rem(70px);
            }
        }
        .foot{
            position: fixed;
            bottom: 0;
            width: 100%;
            height: px2rem(109px);
            background-color: rgba(244,173,18,1);
        }
    }
</style>