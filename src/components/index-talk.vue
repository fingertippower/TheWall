<template>
    <div class="talk">
        <div class="head">
            <img class="gotoBack" src="../assets/img/gotoBack.png" @click="goBack">
            <span class="headMsg">评论</span>
        </div>

        <div class="body">
            <ul>
                <li class="li">
                    <img class="listImg" src="../assets/img/head.png" @click="aaa">
                    <p class="nickname">忧伤的蔷薇</p>
                    <p class="listMsg">这句话说的，已下载就说到了电子上去了字的萨科简单。</p>
                </li>
                <li class="li">
                    <img class="listImg" src="../assets/img/head.png">
                    <p class="nickname">忧伤的蔷薇</p>
                    <p class="listMsg">这句话说的，已下载就说到了电子上去了字的萨科简单。</p>
                </li>
                <li class="li">
                    <img class="listImg" src="../assets/img/head.png">
                    <p class="nickname">忧伤的蔷薇</p>
                    <p class="listMsg">这句话说的，已下载就说到了电子上去了字的萨科简单。</p>
                </li>
                <li class="li">
                    <img class="listImg" src="../assets/img/head.png">
                    <p class="nickname">忧伤的蔷薇</p>
                    <p class="listMsg">这句话说的，已下载就说到了电子上去了字的萨科简单。</p>
                </li>
                <li class="li">
                    <img class="listImg" src="../assets/img/head.png">
                    <p class="nickname">忧伤的蔷薇</p>
                    <p class="listMsg">这句话说的，已下载就说到了电子上去了字的萨科简单。</p>
                </li>
                <li class="li">
                    <img class="listImg" src="../assets/img/head.png">
                    <p class="nickname">忧伤的蔷薇</p>
                    <p class="listMsg">这句话说的，已下载就说到了电子上去了字的萨科简单。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex"
    export default{
        methods:{
            ...mapActions(['aaa']),
            goBack:function(){
                this.$router.go(-1);
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .head{
        width: 100%;
        height: px2rem(107px);
        background-color: rgba(244,173,18,1);
        text-align: center;
        .gotoBack{
            position: fixed;
            width: px2rem(22px);
            height: px2rem(35px);
            left: px2rem(36px);
            top: px2rem(61px);
        }
        .headMsg{
            color: #fff;
            font-size: px2rem(42px);
            position: relative;
            top: px2rem(54px);
        }
    }
    .body{
        width: 100%;
        height: auto;
        .li{
            margin-top: px2rem(30px);
            .listImg{
                float: left;
                width: px2rem(92px);
                height: px2rem(92px);
                margin-left: px2rem(25px);
            }
            .nickname{
                font-size: px2rem(30px);
                margin-left: px2rem(132px);
            }
            .listMsg{
                font-size: px2rem(28px);
                margin-left: px2rem(132px);
                margin-right: px2rem(30px);
                margin-top: px2rem(20px);
            }
        }

    }
</style>