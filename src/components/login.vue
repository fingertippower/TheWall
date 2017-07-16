<template>
    <div>
        <div class="up">
            <img>
            <span>登录</span>
            <p>
                登录，才能给你更好的<br/>
                Login, to give you better
            </p>
        </div>
        <div class="down">
            <input class="text1" type="text" placeholder="输入手机号">
            <input class="text2" type="password" placeholder="输入密码">
            <button class="btn1">立即注册</button>
            <button class="btn2">忘记密码</button>
            <button class="btn3">登录</button>
            <hr>
            <span>快速登录</span>
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
    .up{
        width: px2rem(605px);
        height: px2rem(460px);
        background-color: #fff;
        margin: px2rem(95px) auto;
        margin-bottom: 0;
        border: px2rem(1px) solid;
        border-radius: px2rem(10px) px2rem(10px) 0 0;
        position: relative;
        text-align: center;
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
        box-shadow:0 px2rem(1px) 0 #000;
    }
    .up span{
        font-size: px2rem(72px);
        color: #26A8F7;
        left:0;
        right:0;
        top:px2rem(216.667px);
        margin:auto;
        position: absolute;
    }
    .up p{
        font-size: px2rem(24px);
        color: #26A8F7;
        left:0;
        right:0;
        top:px2rem(335.7383px);
        margin:auto;
        position: absolute;
        font-family: 宋体;
    }
    .down{
        width: px2rem(605px);
        height: px2rem(710px);
        background-color: #fff;
        margin: px2rem(16px) auto;
        border: px2rem(1px) solid;
        border-radius:  0 0 px2rem(10px) px2rem(10px);
        position: relative;
        text-align: center;
    }
    .down input{
        width: px2rem(548.9722px);
        height: px2rem(45px);
        margin-top: px2rem(40px);
        border: px2rem(1px) solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #26A8F7;
        color: #26A8F7;
    }
    input::-webkit-input-placeholder{
        color: #26A8F7;
    }
    .down input.text1{
        margin-top: px2rem(95px);
    }
    .down button{
        font-size: px2rem(18px);
        height: px2rem(30px);
        margin-top: px2rem(20px);
        background-color: transparent;
        border: none;
    }
    .down button.btn1{
        color: #26A8F7;
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
        margin-top: px2rem(95.792px);
        background-color: #26A8F7;
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
    }
    .down hr{
        width: px2rem(548.9722px);
        margin: px2rem(146.9922px) auto;
        margin-bottom: 0;
        color: #A5A5A5;
        text-align: center;
        position: relative;
    }
    .down span{
        width: px2rem(130px);
        background-color: #ffffff;
        font-size: px2rem(24px);
        color: #A5A5A5;
        margin:px2rem(-20px) px2rem(-65px);
        position: absolute;
        text-align:center;
    }
</style>