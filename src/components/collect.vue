<template>
    <div class="background">
        <div class="head">
            <img src="../assets/img/return.png">
            <p>收藏</p>
        </div>
        <div class="collect">
            <p>五点二十分中央大街</p>
            <img src="../assets/img/background.png">
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .background{
        width: 100%;
        height: 100%;
        background-color: #F6EDDC;
        position: fixed;
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
    .collect{
        width: px2rem(691px);
        height: px2rem(282.8843px);
        margin: px2rem(6px) auto;
        margin-bottom: px2rem(340px);
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
        background-color: transparent;
        background-color: rgba(255,255,255,0.5);
        box-shadow:0 0 px2rem(4px) dimgrey;
    }
    .collect p{
        font-size: px2rem(26px);
        margin-top: px2rem(107px);
        margin-left: px2rem(25px);
        position: absolute;
    }
    .collect img{
        width: px2rem(194px);
        height: px2rem(282.8843px);
        float: right;
        border-radius: 0 px2rem(10px) px2rem(10px) 0;
    }
</style>