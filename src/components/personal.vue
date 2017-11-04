<template>
    <div class="personal">
        <div class="background">
            <!--<img class="people" src="../assets/img/people.png">
            <p class="name">
                回忆专用小马甲
                <img class="woman" src="../assets/img/woman.png">
            </p>-->
            <router-link to="/login">
                <button class="toLogin">登录/注册</button>
            </router-link>
            <hr class="long-hr">
            <img class="public" id="collection" src="../assets/img/collection.png">
            <router-link to="/collect">
                <span>我的收藏</span>
            </router-link>
            <hr class="short-hr">
            <img class="public" id="school" src="../assets/img/school.png">
            <router-link to="/school">
                <span>学校信息</span>
            </router-link>
            <hr class="short-hr">
            <span id="hideIt" @click="goBack">
                <img class="hide" src="../assets/img/hide.png">
            </span>
            <img class="public" id="name" src="../assets/img/name.png">
            <router-link to="/personalInformation">
                <span>个人信息</span>
            </router-link>
            <hr class="short-hr">
            <img class="public" id="news" src="../assets/img/news.png">
            <router-link to="/systemMsg">
                <span>系统消息</span>
            </router-link>
            <hr class="short-hr">
            <img class="public" id="follow" src="../assets/img/follow.png">
            <router-link to="/schoolfellow">
                <span>我的校友</span>
            </router-link>
            <div class="foot">
                <button class="border">检查更新</button>
                <button>系统设置</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
            goBack(){
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
    .personal{
        z-index: 6;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
    }
    .background{
        z-index: 20;
        width: px2rem(568px);
        height: px2rem(1334px);
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        animation: slip 2s ;
    }
    @keyframes slip {
        from{left:px2rem(-568px)}
        to{left:0}
    }
    /*.people{
        width: px2rem(152.344px);
        height: px2rem(152.344px);
        margin-top: px2rem(123px);
        margin-left: px2rem(162px);
    }
    .name{
        font-size: px2rem(23px);
        color: #8E8D8D;
        margin-left: px2rem(140px);
        margin-top: px2rem(32px);
    }
    .woman{
        width: px2rem(21px);
        height: px2rem(24.237px);
    }*/
    .toLogin{
        font-size: px2rem(50px);
        color: #60D1FF;
        width: px2rem(270px);
        margin-top: px2rem(150px);
        margin-left: px2rem(105px);
        background:transparent;
    }
    .long-hr{
        margin-top: px2rem(150px);
        width: px2rem(533px);
    }
    .public{
        width: px2rem(32px);
        height: px2rem(24px);
        margin-left: px2rem(105px);
        margin-top: px2rem(29.2397px);
    }
    #collection{
        margin-top: px2rem(173px);
    }
    #name{
        width: px2rem(21px);
        height: px2rem(32px);
        margin-left: px2rem(58.01px);
    }
    #birthday{
        width: px2rem(32px);
        height: px2rem(32px);
    }
    #news{
        width: px2rem(30px);
        height: px2rem(32px);
    }
    #follow{
        width: px2rem(30px);
        height: px2rem(32px);
    }
    span{
        color: #8E8D8D;
        font-size: px2rem(30px);
        margin-left: px2rem(56.0869px);
    }
    .short-hr{
        width: px2rem(314.9844px);
        margin-left: px2rem(100px);
        margin-top: px2rem(29.2397px);
    }
    .hide{
        width: px2rem(61.99px);
        height: px2rem(61.99px);
        float: right;
        margin-right: px2rem(36px);
        margin-top: px2rem(11.2495px);
    }
    button{
        width: px2rem(140px);
        font-size: px2rem(24px);
        background-color: transparent;
        color: #8E8D8D;
        border: none;
        margin-top: px2rem(215.3311px);
    }
    .border{
        border-top: none;
        border-bottom: none;
        border-left: none;
        border-right: px2rem(1px) solid #8E8D8D;
        margin-left: px2rem(53px);
    }
</style>