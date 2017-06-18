<template>
    <div class="foot">
        <ul class="foot-ul">
            <li><img src="../assets/img/btn4.png"><p>主页</p></li><div class="verticalLine"></div>
            <li><img src="../assets/img/btn6.png"><p>搜索</p></li><div class="verticalLine"></div>
            <li><img src="../assets/img/btn7.png"><p>读书</p></li><div class="verticalLine"></div>
            <li><img src="../assets/img/btn5.png"><p>个人</p></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .foot{
        width: 100%;
        height: px2rem(98px);
        background-color: #E5E5E5;
        position: fixed;
        bottom: 0;
    }
    .foot-ul{
        float: left;
        list-style: none;
        width: 100%;
    }
    .foot-ul li{
        float: left;
        width: 24.7%;
        height: auto;
        text-align: center;
        padding-top: px2rem(8px);
    }
    .foot-ul img{
        width: px2rem(34px);
        height: px2rem(44px);
    }
    .foot p{
        font-size: px2rem(30px);
        font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
        color: #FCFCFC;
        margin-top: px2rem(-2px);
    }
    .verticalLine{
        background-color: #C1C1C1;
        width: px2rem(2px);
        height: px2rem(76px);
        float: left;
        margin-top: px2rem(8px);
    }
</style>