<template>
    <div class="not-like">
        <div class="box">
            <div class="head">
                <p class="title">请选择不喜欢的理由</p>
            </div>
            <div class="body">
                <ul>
                    <li class="msg">内容重复<input class="checkbox" type="checkbox"></li>
                    <li class="msg">感觉吃到了狗粮<input class="checkbox" type="checkbox"></li>
                    <li class="msg">这是假的，我要举报<input class="checkbox" type="checkbox"></li>
                </ul>
            </div>
            <div class="foot">
                <div class="no" @click="goBack">
                    <p>取消</p>
                </div>
                <div class="yes" @click="goBack">
                    <p>确认</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods: {
            goBack: function () {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
.not-like{
    z-index: 6;
    position: fixed;
    top: px2rem(0px);
    width: 100%;
    height: px2rem(1334px);
    background-color: rgba(0,0,0,.15);
    display: flex;
    justify-content: center;
    align-items: center;
    .box{
        width: px2rem(500px);
        height: px2rem(651px);
        background-color: #fff;
        border-radius: px2rem(20px);
        .head{
            border-top-right-radius: px2rem(20px);
            border-top-left-radius: px2rem(20px);
            width: 100%;
            height: px2rem(100px);
            background-color: rgba(250,135,149,1);
            display: flex;
            justify-content: center;
            align-items: center;
            .title{
                font-size: px2rem(30px);
                color: #fff;
            }
        }
        .body{
            width: 100%;
            height: px2rem(400px);
            .msg{
                margin-left: 3%;
                margin-top: px2rem(40px);
            }
            .checkbox{
                width: px2rem(40px);
                height: px2rem(40px);

                margin-right: 3%;
                float: right;
            }
        }
        .foot{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            .no{
                display: flex;
                justify-content: center;
                align-items: center;
                height: px2rem(100px);
                width: 50%;
                border-top: 1px solid rgba(250,135,149,1);
                border-right: 1px solid rgba(250,135,149,1);
                font-size: px2rem(30px);
                color: rgba(142,141,141,1);
            }
            .yes{
                display: flex;
                justify-content: center;
                align-items: center;
                height: px2rem(100px);
                width: 50%;
                border-top: 1px solid rgba(250,135,149,1);
                font-size: px2rem(30px);
                color: rgba(250,135,149,1);
            }
        }
    }
}
</style>