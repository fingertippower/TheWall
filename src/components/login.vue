<template>
    <div class="background">
        <div class="up">
            <img >
            <span>登录</span>
            <p>
                登录，才能给你更好的<br/>
                Login, to give you better
            </p>
        </div>
        <div class="down">
            <div class="phone">
                <span class="span1">
                    <img class="img1" src="../assets/img/phone.png">
                </span>
                <input class="text1" type="text" placeholder="输入手机号">
                <span class="span2">
                    <img class="img2" src="../assets/img/delete.png">
                </span>
            </div>
            <div class="password">
                <span class="span1">
                    <img class="img3" src="../assets/img/password.png">
                </span>
                <input class="text2" type="password" placeholder="输入密码">
                <span class="span2">
                    <img class="img2" src="../assets/img/delete.png">
                </span>
            </div>
            <button class="btn1">立即注册</button>
            <button class="btn2">忘记密码</button>
            <button class="btn3">登录</button>
            <hr>
            <span class="span3">快速登录</span>
            <div class="div1">
                <img src="../../img/QQ.png">
                <img src="../../img/weixin.png">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    *{
        margin: 0;
        padding: 0;
    }
    .background{
        background: url("../assets/img/background.png");
        width: px2rem(750px);
        height: 100%;
        margin: 0;
        padding: 0;
        position: fixed;
    }
    .up{
        width: px2rem(605px);
        height: px2rem(460px);
        margin: px2rem(95px) auto;
        margin-bottom: 0;
        border: 0 ;
        border-radius: px2rem(10px) px2rem(10px) 0 0;
        position: relative;
        text-align: center;
        background-color: transparent;
        background-color: rgba(255,255,255,0.85);
        box-shadow:0 0 px2rem(4px) dimgrey;
    }
    .up img{
        width: px2rem(115px);
        height: px2rem(115px);
        left:0;
        right:0;
        top:px2rem(55px);
        margin:auto;
        border-radius: px2rem(10px);
        position: absolute;
        box-shadow:0 0 px2rem(7px) #000;
    }
    .up span{
        font-size: px2rem(72px);
        color: #DA9128;
        left:0;
        right:0;
        top:px2rem(216.667px);
        position: absolute;
        background-color: transparent;
    }
    .up p{
        font-size: px2rem(24px);
        color: #DA9128;
        left:0;
        right:0;
        top:px2rem(335.7383px);
        position: absolute;
        font-family: 宋体;
        background-color: transparent;
    }
    .down{
        width: px2rem(605px);
        height: px2rem(710px);
        margin: px2rem(16px) auto;
        margin-bottom: px2rem(38.9956px);
        border: 0;
        border-radius: 0 0 px2rem(10px) px2rem(10px);
        position: relative;
        text-align: center;
        background-color: transparent;
        background-color: rgba(255,255,255,0.85);
        box-shadow:0 0 px2rem(4px) dimgrey;
    }
    .down .phone{
        background-color: transparent;
    }
    .down .password{
        background-color: transparent;
    }
    .down .phone .span1{
        margin-left: px2rem(7px);
        margin-top: px2rem(98px);
        position: absolute;
        background-color: transparent;
    }
    .down .phone .span2{
        margin-left: px2rem(-36.4063px);
        margin-top: px2rem(107px);
        position: absolute;
        background-color: transparent;
    }
    .down .password .span1{
        margin-left: px2rem(7px);
        margin-top: px2rem(46.333px);
        position: absolute;
        background-color: transparent;
    }
    .down .password .span2{
        margin-left: px2rem(-36.4063px);
        margin-top: px2rem(52px);
        position: absolute;
        background-color: transparent;
    }
    .down input{
        width: px2rem(514.9722px);
        height: px2rem(45px);
        margin-top: px2rem(40px);
        border: px2rem(1px) solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #684707;
        color: #38B0F9;
        font-size: px2rem(30px);
        padding-left: px2rem(34px);
        background-color: transparent;
    }
    input::-webkit-input-placeholder{
        color: #DA9128;
    }
    .down input.text1{
        margin-top: px2rem(95px);
    }
    .down .img1{
        width: px2rem(20.792px);
        height: px2rem(34px);
        background-color: transparent;
    }
    .down .img3{
        width: px2rem(20.792px);
        height: px2rem(28.667px);
        background-color: transparent;
    }
    .down .img2{
        width: px2rem(22.4063px);
        height: px2rem(22.4063px);
        background-color: transparent;
    }
    .down button{
        font-size: px2rem(18px);
        height: px2rem(30px);
        margin-top: px2rem(20px);
        background-color: transparent;
        border: none;
    }
    .down button.btn1{
        color: #38B0F9;
        float: left;
        margin-left: px2rem(66.6616px);
    }
    .down button.btn2{
        color: #727272;
        float: right;
        margin-right: px2rem(66.6616px);
    }
    .down button.btn3{
        font-size: px2rem(60px);
        color: #ffffff;
        width: px2rem(415.3335px);
        height: px2rem(82.124px);
        margin-top: px2rem(95px);
        background-color: #38B0F9;
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
    }
    .down hr{
        width: px2rem(548.9722px);
        margin: px2rem(132.084px) auto;
        margin-bottom: 0;
        color: #A5A5A5;
        text-align: center;
        position: relative;
    }
    .down .span3{
        width: px2rem(130px);
        background-color: #ffffff;
        font-size: px2rem(24px);
        color: #A5A5A5;
        margin:px2rem(-20px) px2rem(-65px);
        position: absolute;
        text-align:center;
        background-color: transparent;
    }
    .down .div1{
        background-color: transparent;
    }
    .down .div1 img{
        width: px2rem(70px);
        height: px2rem(70px);
        margin:px2rem(32.499px) px2rem(31px);
        margin-bottom: 0;
        background-color: transparent;
    }
</style>