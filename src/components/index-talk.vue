<template>
    <div class="talk">
        <div class="head">
            <img class="gotoBack" src="../assets/img/gotoBack.png" @click="goBack">
            <span class="headMsg">评论</span>
        </div>
        <div class="body">
            <ul>
                <li class="li" v-for="(val, index) in getTalkMsg">
                    <img class="listImg" :src="val.personalHeadImg">
                    <p class="nickname">{{val.personalNickname}}</p>
                    <p class="listMsg">{{val.talkMsg}}</p>
                </li>
            </ul>
        </div>
        <div class="foot">
            <p v-show="talk" @click="sendTalk">期待你的评论...</p>
            <textarea v-show="input" class="talk-input" rows="3" cols="20"id="input"></textarea>
            <button v-show="input" class="send" @click="sendTheTalk">发送</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from "vuex"
    export default{
        data(){
            return{
                talk:true,
                input:false
            }
        },
        computed:mapGetters(['getTalkMsg']),
        methods:{
            ...mapActions(['sendTheTalk']),
            goBack:function(){
                this.$router.go(-1);
            },
            sendTalk:function(){
                this.talk = false;
                this.input = true;
            }
        }
    }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/function.scss';
    .head{
        z-index: 2;
        position: fixed;
        top: 0;
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
        position: absolute;
        margin-top: px2rem(100px);
        width: 100%;
        height: auto;
        .li{
            margin-top: px2rem(30px);
            border-bottom: 1px solid rgba(96,96,96,.1);
            .listImg{
                float: left;
                width: px2rem(92px);
                height: px2rem(92px);
                margin-top: px2rem(10px);
                margin-left: px2rem(25px);
                border-radius: 50%;
                overflow: hidden;
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
    .foot{
        position: fixed;
        bottom: 0px;
        width: 100%;
        min-height: px2rem(100px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(244,173,18,1);
        color: #fff;
        font-size: px2rem(30px);
        .talk-input{
            width: 75%;
            min-height: px2rem(20px);
            margin-right:px2rem(10px);
            border: 1px solid rgba(244,173,18,1);
            border-radius: px2rem(20px);
            padding: 0 px2rem(20px);
            font-size: px2rem(30px);
            overflow:hidden;
        }
        .send{
            width: px2rem(100px);
            height: px2rem(60px);
            background-color: antiquewhite;
            border: 1px solid rgba(244,173,18,1);
            border-radius: px2rem(20px);
        }
    }
</style>