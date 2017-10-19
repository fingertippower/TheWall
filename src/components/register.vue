<template>
    <div class="background">
        <div class="up">
            <img src="../assets/img/logo.png">
            <span>注册</span>
            <p>
                注册，一切美好的开始<br/>
                Register, all good beginnings
            </p>
        </div>
        <div class="down">
            <div class="phone">
                <span class="span1">
                    <img src="../assets/img/phone.png">
                </span>
                <input id="ip1" class="text1" type="text" placeholder="输入手机号">
                <span class="span2">
                    <img class="img2" src="../assets/img/delete.png" @click="clearInput1()">
                </span>
            </div>
            <div class="password">
                <span class="span1">
                    <img class="img1" src="../assets/img/password.png">
                </span>
                <input id="ip2" class="text2" type="password" placeholder="输入密码">
                <span class="span2">
                    <img class="img2" src="../assets/img/delete.png" @click="clearInput2()">
                </span>
            </div>
            <router-link to="/login">
                <button class="btn1">立即登录</button>
            </router-link>
            <button class="btn2">忘记密码</button>
            <button class="btn3" @click="register(register)">注册</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    import axios from 'axios'
    export default{
        data(){
            return{
                phone:"",
                password:""
            }
        },
        methods:{
            ...mapActions(['register']),
            clearInput1:function () {
                document.getElementById('ip1').value='';
            },
            clearInput2:function () {
                document.getElementById('ip2').value='';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    *{
        margin: 0;
        padding: 0;
    }
    .background{
        background: url("../assets/img/background.png");
        width: 100%;
        height: 100%;
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
        background-color: rgba(255,255,255,0.85);
        box-shadow:0 0 px2rem(4px) dimgrey;
    }
    .up img{
        width: px2rem(139px);
        height: px2rem(139px);
        left:0;
        right:0;
        top:px2rem(55px);
        margin:auto;
        position: absolute;
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
        border: 0;
        border-radius:  0 0 px2rem(10px) px2rem(10px);
        position: relative;
        text-align: center;
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
    .down .password .span1{
        margin-left: px2rem(7px);
        margin-top: px2rem(46.333px);
        position: absolute;
        background-color: transparent;
    }
    .down input{
        border: px2rem(1px) solid;
        border-color: #684707;
        background-color: transparent;
    }
    .down input.text1::-webkit-input-placeholder,.down input.text2::-webkit-input-placeholder{
        color: #DA9128;
    }
    .down .phone .span1 img{
        width: px2rem(20.792px);
        height: px2rem(34px);
        background-color: transparent;
    }
    .down .img1{
        width: px2rem(20.792px);
        height: px2rem(28.667px);
        background-color: transparent;
    }
    .down .img2{
        width: px2rem(24px);
        height: px2rem(24px);
        background-color: transparent;
    }
    .down input.text1{
        width: px2rem(514.9722px);
        height: px2rem(45px);
        margin-top: px2rem(95px);
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        color: #DA9128;
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
        color: #DA9128;
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
        border-color: #503202;
    }
    .down .phone .span2{
        margin-left: px2rem(-36.4063px);
        margin-top: px2rem(107px);
        position: absolute;
        background-color: transparent;
    }
    .down .password .span2{
        margin-left: px2rem(-36.4063px);
        margin-top: px2rem(51.8818px);
        position: absolute;
        background-color: transparent;
    }
    .down button.btn1{
        font-size: px2rem(18px);
        height: px2rem(30px);
        margin-top: px2rem(30px);
        background-color: transparent;
        border: none;
        color: #FF006E;
        float: left;
        margin-left: px2rem(66.6616px);
    }
    .down button.btn2{
        font-size: px2rem(18px);
        height: px2rem(30px);
        margin-top: px2rem(30px);
        background-color: transparent;
        border: none;
        color: #727272;
        float: right;
        margin-right: px2rem(66.6616px);
    }
    .down button.btn3{
        border: none;
        font-size: px2rem(60px);
        color: #ffffff;
        width: px2rem(415.3335px);
        height: px2rem(82.124px);
        margin-top: px2rem(151.9541px);
        background-color: #503202;
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
    }
</style>