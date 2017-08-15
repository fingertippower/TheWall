<template>
    <div>
        <div class="head">
            <img src="../assets/img/return.png">
            <p>关注</p>
        </div>
        <button class="concern">关注</button>
        <button class="fans">粉丝</button>
        <div class="people">
            <img src="../assets/img/head.png">
            <span>啦啦啦</span>
            <hr/>
        </div>
        <div class="people1">
            <img src="../assets/img/head.png">
            <span>啦啦啦</span>
            <hr/>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
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
    button{
        width: 50%;
        height: px2rem(67.45px);
        background-color: transparent;
        font-size: px2rem(42px);
        position: absolute;
    }
    .concern{
        border: none;
        color: #939292;
    }
    .fans{
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #F4AD12;
        margin-left: 50%;
    }
    .people img{
        width: px2rem(68px);
        height: px2rem(68px);
        margin-top: px2rem(87.45px);
        margin-left: px2rem(32px);
    }
    .people span{
        font-size: px2rem(28px);
        margin-left: px2rem(22px);
        margin-top: px2rem(107.45px);
        position: absolute;
    }
    .people hr{
        margin-top: px2rem(20px);
    }
    .people1 img{
        width: px2rem(68px);
        height: px2rem(68px);
        margin-top: px2rem(20px);
        margin-left: px2rem(32px);
    }
    .people1 span{
        font-size: px2rem(28px);
        margin-left: px2rem(22px);
        margin-top: px2rem(30px);
        position: absolute;
    }
    .people1 hr{
        margin-top: px2rem(20px);
    }
</style>