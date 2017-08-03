<template>
    <div class="background">
        <div class="up">
            <img>
            <span>注册</span>
            <p>
                注册，一切美好的开始<br/>
                Register, all good beginnings
            </p>
        </div>
        <div class="down">
            <div class="phone">
                <span class="span1">
                    <img src="../../img/phone.png">
                </span>
                <input class="text1" type="text" placeholder="输入手机号">
                <span class="span2">
                    <button>获取验证码</button>
                </span>
            </div>
            <div class="password">
                <span class="span1">
                    <img src="../../img/password.png">
                </span>
                <input class="text2" type="password" placeholder="输入密码">
            </div>
            <button class="btn1">立即注册</button>
            <button class="btn2">忘记密码</button>
            <input class="text3" type="text" placeholder="输入验证码">
            <button class="btn3">注册</button>
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
        background-color: tan;
    }
    .background{
        background-color: tan;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        top: px2rem(40.6611px);
        bottom: px2rem(50.873px);
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
        background-color: rgba(255,255,255,0.5);
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
        color: #26A8F7;
        left:0;
        right:0;
        top:px2rem(216.667px);
        position: absolute;
        background-color: transparent;
    }
    .up p{
        font-size: px2rem(24px);
        color: #26A8F7;
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

        border: 0;
        border-radius:  0 0 px2rem(10px) px2rem(10px);
        position: relative;
        text-align: center;
        background-color: transparent;
        background-color: rgba(255,255,255,0.5);
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
    .down .password .span1{
        margin-left: px2rem(7px);
        margin-top: px2rem(46.333px);
        position: absolute;
        background-color: transparent;
    }
    .down input{
        border: px2rem(1px) solid;
        border-color: #26A8F7;
        background-color: transparent;
    }
    .down input.text1::-webkit-input-placeholder,.down input.text2::-webkit-input-placeholder{
        color: #38B0F9;
    }
    .down .phone img{
        width: px2rem(20.792px);
        height: px2rem(34px);
        background-color: transparent;
    }
    .down .password img{
        width: px2rem(20.792px);
        height: px2rem(28.667px);
        background-color: transparent;
    }
    .down input.text1{
        width: px2rem(514.9722px);
        height: px2rem(45px);
        margin-top: px2rem(95px);
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        color: #38B0F9;
        font-size: px2rem(30px);
        padding-left: px2rem(34px);
    }
    .down input.text2{
        width: px2rem(514.9722px);
        height: px2rem(45px);
        margin-top: px2rem(40px);
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        color: #38B0F9;
        font-size: px2rem(30px);
        padding-left: px2rem(34px);
    }
    .down input.text3{
        width: px2rem(181px);
        height: px2rem(56.917px);
        margin-top: px2rem(47.9561px);
        text-align: center;
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
        color: #848484;
        border-color: #30AFEF;
    }
    .down .phone .span2{
        margin-left: px2rem(-116.667px);
        margin-top: px2rem(46.333px);
        position: absolute;
        background-color: transparent;
    }
    .down .phone button{
        width: px2rem(102.667px);
        height: px2rem(20px);
        font-size: px2rem(10px);
        font-family: 宋体;
        background-color: transparent;
        border: none;
        background-color: #38B0F9;
        color: #ffffff;
        border-radius: px2rem(4px) px2rem(4px) px2rem(4px) px2rem(4px);
        margin-top: px2rem(62.5px);
    }
    .down button.btn1{
        font-size: px2rem(18px);
        height: px2rem(30px);
        margin-top: px2rem(20px);
        background-color: transparent;
        border: none;
        color: #38B0F9;
        float: left;
        margin-left: px2rem(66.6616px);
    }
    .down button.btn2{
        font-size: px2rem(18px);
        height: px2rem(30px);
        margin-top: px2rem(20px);
        background-color: transparent;
        border: none;
        color: #727272;
        float: right;
        margin-right: px2rem(66.6616px);
    }
    .down button.btn3{
        background-color: transparent;
        border: none;
        font-size: px2rem(60px);
        color: #ffffff;
        width: px2rem(415.3335px);
        height: px2rem(82.124px);
        margin-top: px2rem(51.9541px);
        background-color: #38B0F9;
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
    }
    .down hr{
        width: px2rem(548.9722px);
        margin: px2rem(120.4504px) auto;
        margin-bottom: 0;
        color: #A5A5A5;
        text-align: center;
        position: relative;
    }
    .down .span3{
        width: px2rem(130px);
        /*background-color: rgba(255, 255, 255, 1);*/
        background-color: #fff;
        font-size: px2rem(24px);
        color: #A5A5A5;
        margin:px2rem(-20px) px2rem(-65px);
        position: absolute;
        text-align:center;
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