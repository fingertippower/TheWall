<template>
    <div>
        <div class="head">
            <img src="../assets/img/return.png">
            <p>关注</p>
        </div>
        <router-link to="concern-fans">
        <button class="concern">关注</button>
        </router-link>
        <button class="fans">粉丝</button>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss">
    @import '../assets/css/function.scss';
    .head{
        width:100%;
        height:px2rem(109.1172px);
        background-color: #F4AD12;
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
        border: none;
    }
    .fans{
        margin-left: 50%;
    }
</style>