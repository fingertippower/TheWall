<template>
    <div class="background">
        <div class="head">
            <img src="../assets/img/return.png">
            <p>学校信息</p>
        </div>
        <div class="message">
            <span>学校</span>
            <input type="text">
            <br/>
            <span>学院</span>
            <input type="text">
            <br/>
            <span>专业</span>
            <input type="text">
            <br/>
            <span>年级</span>
            <input type="text">
            <br/>
            <span>班级</span>
            <input type="text">
        </div>
        <div class="save">
            <button>保存</button>
        </div>
        <div class="shave">
            <hr class="hr1">
            <hr class="hr2">
            <span>分享<br/>邀请校友</span>
        </div>
        <div class="chat">
            <img class="QQ" src="../assets/img/QQ.png">
            <img class="WeChat" src="../assets/img/WeChat.png">
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
    .head{
        width:100%;
        height:px2rem(109.1172px);
        background-color: #F4AD12;
        position: relative;
    }
    .head img{
        width:px2rem(23px);
        height:px2rem(36px);
        margin-left: px2rem(44.5859px);
        margin-top: px2rem(58.1196px);
    }
    .head p{
        font-size: px2rem(42px);
        color: #fff;
        text-align: center;
        left:0;
        right:0;
        top:px2rem(55.4971px);
        position: absolute;
    }
    .message{
        width: 100%;
        height: px2rem(450px);
        text-align: center;
        position: relative;
    }
    .message input{
        width: px2rem(550px);
        height: px2rem(89px);
        border: px2rem(1px) solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #B8B8B8;
        color: #B8B8B8;
        font-size: px2rem(34px);
        padding-left: px2rem(120px);
        padding-top: px2rem(30px);
    }
    .message span{
        font-size: px2rem(34px);
        margin-left: px2rem(31px);
        margin-top: px2rem(52px);
        position: absolute;
    }
    .save{
        text-align: center;
    }
    button{
        width: px2rem(306px);
        height: px2rem(67.45px);
        margin-top: px2rem(280.9131px);
        background-color: #F4AD12;
        color: #fff;
        border: none;
        border-radius: px2rem(6px);
        font-size: px2rem(52px);
    }
    hr{
        width: px2rem(296px);
        margin: px2rem(260px) auto;
        margin-bottom: 0;
        color: #A5A5A5;
        position: relative;
    }
    .hr1{
        float: left;
        left: px2rem(29.1577px);
    }
    .hr2{
        float: right;
        right: px2rem(29.1577px);
    }
    .shave{
        text-align: center;
    }
    .shave span{
        width: px2rem(109px);
        background-color: #ffffff;
        font-size: px2rem(18px);
        color: #8C8C8B;
        margin:px2rem(238px) px2rem(-54.5px);
        margin-bottom: 0;
        position: absolute;
        text-align:center;
        background-color: transparent;
    }
    .chat img{
        width: px2rem(70px);
        height: px2rem(71px);
        margin-top:px2rem(330px);
        position: absolute;
    }
    .QQ{
        margin-left: px2rem(-31px);
    }
    .WeChat{
        margin-left: px2rem(101px);
    }
</style>