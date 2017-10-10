<template>
    <div>
        <div class="head">
            <img class="gotoBack" src="../assets/img/gotoBack.png" @click="goBack">
            <span class="headMsg">新建信件</span>
        </div>
        <div class="body">
            <input type="text" placeholder="请输入标题" class="title">
            <textarea name="" id="" cols="30" rows="16" class="letter"></textarea>
            <div class="imgBox">
                <div>
                    <img src="" alt="" class="listImg">
                    <input type="file" id="file" name="" class="file">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
            goBack:function(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/function.scss';
    ::-webkit-scrollbar{
        background-color: #fff;
        width: px2rem(0px);
    }
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
        width: 82%;
        background-image: url("../assets/img/letterStyle.png"),url("../assets/img/letterStyle.png");
        background-repeat: repeat-y;
        background-position: left top, right top;
        background-size: px2rem(33px) px2rem(123px);
        padding: px2rem(70px);
        text-align: center;
        .title{
            width: 100%;
            height: px2rem(60px);
            border: px2rem(0.1px) solid #F5F5DC;
            border-radius: px2rem(20px);
            font-size: px2rem(35px);
            padding-left: px2rem(10px);
        }
        .letter{
            margin-top: px2rem(30px);
            width: 100%;
            min-height: px2rem(600px);
            border: px2rem(0.1px) solid #F5F5DC;
            border-radius: px2rem(20px);
            font-size: px2rem(35px);
            padding: px2rem(10px);
            resize:none;
        }
        .imgBox{
            width: 100%;
            max-height: px2rem(700px);
            margin-top: px2rem(20px);
            .listImg{
                margin-left: px2rem(10px);
                width: px2rem(183px);
                height: px2rem(183px);
            }
            .file{

            }
        }
    }
</style>