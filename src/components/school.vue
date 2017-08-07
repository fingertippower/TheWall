<template>
    <div>
        <div class="head">
            <img src="../assets/img/return.png">
            <p>学校信息</p>
        </div>
        <div class="message">
            <span>学校</span>
            <input type="text">
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
        height:100%;
        text-align: center;
    }
    .message input{
        width: px2rem(685.4658px);
        height: px2rem(94.4951px);
        border: px2rem(1px) solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-color: #B8B8B8;
        color: #B8B8B8;
        font-size: px2rem(34px);
    }
    .message span{
        font-size: px2rem(34px);
        margin-left: px2rem(22.499px);
        margin-top: px2rem(31.4985px);
        position: absolute;
    }
    img{
        width:px2rem(23px);
        height:px2rem(36px);
        margin-left: px2rem(44.5859px);
        margin-top: px2rem(58.1196px);
    }
</style>