<template>
    <div class="head">
        <div class="headNotice">
            <img src="../assets/img/horn.png" class="headNoticeImg">
            <span class="headNoticeMsg">恭喜回忆的小马甲对失去的爱表白成功</span>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .head{
        width: 100%;
        height: px2rem(216px);
        position: fixed;
        top: 0;
        /*background-color: #E5E5E5;*/
        z-index: 2;
        background-image: url("../assets/img/indexBackground1.png");
        background-size: 100% 100%;
    }
    .headNotice{
        width: px2rem(702px);
        height: px2rem(66px);
        background-color: rgba(255,255,255,1);
        border-radius: 5px;
        padding-left: px2rem(7px);
        display: flex;
        align-items: center;
        margin: px2rem(57px) auto 0 auto;
    }
    .headNoticeImg{
        width: px2rem(37px);
        height: px2rem(37px);
    }
    .headNoticeMsg{
        color: rgba(142,141,141,1);
        margin-left: px2rem(36px);
    }
</style>