<template>
    <div class="background">
        <div class="head">
            <img src="../assets/img/return.png" @click="goBack">
            <span>个人信息</span>
        </div>
        <div class="message">
            <span>姓名</span>
            <input type="text" id="name" value="">
            <br/>
            <span class="sex">性别</span>
            <select class="drop-down" id="gender">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
            <br/>
            <span>生日</span>
            <input type="text" id="birthday" value="">
            <br/>
            <span>家乡</span>
            <input type="text" id="hometown" value="">
            <br/>
            <span>邮箱</span>
            <input type="text" id="email" value="">
        </div>
        <div class="save">
            <button @click="save()">保存</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default{
        methods:{
            ...mapActions(['save']),
            goBack:function () {
                this.$router.go(-1);
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
    .head{
        width:100%;
        height:px2rem(110px);
        background-color: #F4AD12;
        position: relative;
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
        margin-left: px2rem(231px);
        margin-top:px2rem(55.4971px);
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
        height: px2rem(90px);
        border: px2rem(1px) solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #B8B8B8;
        color: #B8B8B8;
        font-size: px2rem(35px);
        padding-left: px2rem(130px);
        padding-top: px2rem(30px);
    }
    .message span{
        font-size: px2rem(35px);
        margin-left: px2rem(31px);
        margin-top: px2rem(53px);
        position: absolute;
    }
    .sex{
        margin-left: px2rem(-131px);
    }
    .drop-down{
        width: px2rem(680px);
        height: px2rem(120px);
        border: px2rem(1px) solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #B8B8B8;
        color: #B8B8B8;
        font-size: px2rem(35px);
        padding-left: px2rem(120px);
        padding-top: px2rem(30px);
    }
    .save{
        text-align: center;
    }
    button{
        width: px2rem(310px);
        height: px2rem(70px);
        margin-top: px2rem(380px);
        background-color: #F4AD12;
        color: #fff;
        border: none;
        border-radius: px2rem(6px);
        font-size: px2rem(52px);
    }
</style>