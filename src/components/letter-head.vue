<template>
    <div class="letter">
        <div class="letter-head"></div>
        <div class="letter-body">
            <div class="getOrPut">
                <router-link to="/index/letter/letter-get">
                    <div class="getLetter" @click="letterGetStyle">
                        收件箱
                    </div>
                </router-link>
                <router-link to="/index/letter/letter-put">
                    <div class="putLetter">
                        已发送
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default{
        methods:mapActions(['letterGetStyle','letterPutStyle'])
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .letter-head{
        width: 100%;
        height: px2rem(107px);
        background-color: rgba(244,173,18,1);
    }
    .letter-body{
        width: 100%;
        .getOrPut{
            width: 100%;
            height: px2rem(105px);
            .getLetter{
                width: px2rem(189px);
                height: px2rem(53px);
                border: 1px solid rgba(234,76,137,1);
                color: rgba(234,76,137,1);
                text-align: center;
                font-size: px2rem(40px);
                border-radius: px2rem(10px);
                margin-top: px2rem(23px);
                float: left;
                margin-left: px2rem(49px);
            }
            .putLetter{
                width: px2rem(189px);
                height: px2rem(53px);
                border: 1px solid rgba(234,76,137,1);
                color: rgba(234,76,137,1);
                text-align: center;
                font-size: px2rem(40px);
                border-radius: px2rem(10px);
                margin-top: px2rem(23px);
                margin-right: px2rem(49px);
                float: right;
            }
        }
    }
</style>