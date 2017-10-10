<template>
    <div class="pen">
        <router-link to="/write-letter">
            <img class="penImg" src="../assets/img/indexPen.png">
        </router-link>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .pen{
        position: fixed;
        top: px2rem(1000px);
        right: 0px;
        width: px2rem(115px);
        height: px2rem(115px);
        background-color: rgba(96,209,255,1);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .penImg{
            width: px2rem(65px);
            height: px2rem(56px);
        }
    }
</style>