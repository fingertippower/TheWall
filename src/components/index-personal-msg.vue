<template>
    <div class="background">
        <div class="index-personal-msg">
            <div class="head">
                <div class="headImg">
                    <img class="headImgMsg" src="../assets/img/head.png">
                </div>
                <img @click="goBack" class="goBack" src="../assets/img/click.png">
            </div>
            <div class="body">
                <div class="bodyMsg">{{putIndexConfessionLetterMsg[0].username}}
                    <span><img src="../assets/img/woman.png" class="genderImgWoman" v-show="girl"></span>
                    <span><img src="../assets/img/man.png" class="genderImgMan" v-show="boy"></span>
                </div>
                <p class="bodyMsg position">姓名：</p><span class="msg">{{putIndexConfessionLetterMsg[0].name}}</span>
                <p class="bodyMsg position">手机：</p><span class="msg">{{putIndexConfessionLetterMsg[0].phone}}</span>
                <p class="bodyMsg position">学院：</p><span class="msg">{{putIndexConfessionLetterMsg[0].college}}</span>
                <p class="bodyMsg position">年级：</p><span class="msg">{{putIndexConfessionLetterMsg[0].grade}}</span>
            </div>
            <div class="foot">
                <div class="postLetter">
                    <img  class="postLetterImg" src="../assets/img/postLetter.png">
                    <span class="postLetterMsg">发私信</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default{
        data(){
          return{
                boy:false,
                girl:false
          }
        },
        computed:{
            ...mapGetters(['putIndexConfessionLetterMsg']),
        },
        methods: {
            goBack: function () {
                this.$router.go(-1);
            }
        },
        mounted(){
            let gender = this.$store.state.IndexConfessionLetterList.putIndexConfessionLetterMsg[0].gender;
            if(gender == "男"){
                this.boy = true;
                console.log(this.boy);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .background{
        z-index: 6;
        position: fixed;
        top: px2rem(0px);
        width: 100%;
        height: px2rem(1334px);
        background-color: rgba(0,0,0,.15);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .index-personal-msg{
        width: px2rem(500px);
        height: px2rem(811px);
        border-radius: px2rem(20px);
    }
    .head{
        width: 100%;
        height: px2rem(183px);
        background-color: rgba(250,135,149,1);
        border-radius: px2rem(20px) px2rem(20px) 0 0;
        border-bottom: 1px solid #000;
        padding-top: px2rem(20px);
        .headImg{
            width: px2rem(157px);
            height: px2rem(157px);
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
            .headImgMsg{
                width: px2rem(157px);
                height: px2rem(157px);
            }
        }
        .goBack{
            width: px2rem(48px);
            height: px2rem(48px);
            position: relative;
            top:px2rem(-155px);
            left: px2rem(435px);
        }
    }
    .body{
        width: 90%;
        height: px2rem(423px);
        background-color: #fff;
        padding-left: 10%;
        .bodyMsg{
            position: relative;
            top: 8%;
            color: rgba(142,141,141,1);
        }
        .position{
            margin-top: 3%;
        }
        .msg{
            color: rgba(142,141,141,1);
            margin-left: px2rem(80px);
        }
        .genderImgWoman{
            position: absolute;
            margin-left: px2rem(10px);
            width: px2rem(29px);
            height: px2rem(33px);
        }
        .genderImgMan{
            position: absolute;
            margin-left: px2rem(10px);
            width: px2rem(29px);
            height: px2rem(33px);
        }
    }
    .foot{
        width: 100%;
        height: px2rem(191px);
        background-color: rgba(250,135,149,1);
        border-radius: 0 0 px2rem(20px) px2rem(20px);
        border-top: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        .postLetter{
            width: px2rem(117px);
            height: px2rem(41px);
            color: #fff;
            border: 1px solid #fff;
            border-radius: px2rem(10px);
            text-align: center;
            .postLetterImg{
                position: relative;
                top: px2rem(7px);
                width: px2rem(26px);
                height: px2rem(26px);
            }
            .postLetterMsg{
                position: relative;
                top: px2rem(4px);
            }
        }
    }
</style>