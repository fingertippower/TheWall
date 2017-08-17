<template>
    <div class="background">
        <img class="people" src="../assets/img/people.png">
        <p>
            回忆专用小马甲
            <img class="woman" src="../assets/img/woman.png">
        </p>
        <hr class="long-hr">
        <img class="public" id="collection" src="../assets/img/collection.png">
        <span>我的收藏</span>
        <hr class="short-hr">
        <img class="public" id="school" src="../assets/img/school.png">
        <span>学校信息</span>
        <hr class="short-hr">
        <span>
            <img class="hide" src="../assets/img/hide.png">
        </span>
        <img class="public" id="name" src="../assets/img/name.png">
        <span>真实姓名</span>
        <hr class="short-hr">
        <img class="public" id="birthday" src="../assets/img/birthday.png">
        <span>生日</span>
        <hr class="short-hr">
        <img class="public" id="news" src="../assets/img/news.png">
        <span>消息</span>
        <hr class="short-hr">
        <img class="public" id="follow" src="../assets/img/follow.png">
        <span>我关注的</span>
        <div class="foot">
            <button class="border">检查更新</button>
            <button>系统设置</button>
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
        width: px2rem(561.271px);
        height: 100%;
        background-color: tan;
        position: fixed;
        border-top-right-radius: px2rem(218.9893px) 50%;
        border-bottom-right-radius: px2rem(218.9893px) 50%;
    }
    .people{
        width: px2rem(152.344px);
        height: px2rem(152.344px);
        margin-top: px2rem(123px);
        margin-left: px2rem(162px);
    }
    p{
        font-size: px2rem(23px);
        color: #8E8D8D;
        margin-left: px2rem(140px);
        margin-top: px2rem(32px);
    }
    .woman{
        width: px2rem(21px);
        height: px2rem(24.237px);
    }
    .long-hr{
        margin-top: px2rem(35px);
    }
    .public{
        width: px2rem(32px);
        height: px2rem(24px);
        margin-left: px2rem(105px);
        margin-top: px2rem(29.2397px);
    }
    #collection{
        margin-top: px2rem(123px);
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