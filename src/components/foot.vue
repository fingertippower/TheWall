<template>
    <div class="foot">
        <ul class="foot-ul">
            <li class="foot-li" @click="letterDisplay">
                <div class="foot-li-div">
                    <div class="foot-logo" v-show="letterLogoImg">
                        <img  class="foot-logo-img" src="../assets/img/letter.png">
                    </div>
                    <img  class="foot-letter-img" src="../assets/img/letter.png" v-show="letterImg">
                    <p class="foot-msg letter-msg-color" v-show="letterMsg">信件</p>
                </div>
            </li>
            <div class="foot-vertical-line"></div>
            <li class="foot-li" @click="indexDisplay">
                <div class="foot-li-div">
                    <div class="foot-logo" v-show="indexLogoImg">
                        <img  class="foot-logo-img" src="../assets/img/index.png">
                    </div>
                    <img  class="foot-letter-img" src="../assets/img/index.png" v-show="indexImg">
                    <p class="foot-msg index-msg-color" v-show="indexMsg">主页</p>
                </div>
            </li>
            <div class="foot-vertical-line"></div>
            <li class="foot-li" @click="personalDisplay">
                <div class="foot-li-div">
                    <div class="foot-logo" v-show="personalLogoImg">
                        <img  class="foot-logo-img" src="../assets/img/personal.png">
                    </div>
                    <img  class="foot-letter-img" src="../assets/img/personal.png" v-show="personalImg">
                    <p class="foot-msg personal-msg-color" v-show="personalMsg">个人</p>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                letterLogoImg:false,
                letterMsg:false,
                letterImg:true,
                indexLogoImg:true,
                indexMsg:true,
                indexImg:false,
                personalLogoImg:false,
                personalMsg:false,
                personalImg:true
            }
        },
        methods:{
            letterDisplay(){
                if(this.letterLogoImg == false){
                    this.letterLogoImg = true,
                    this.letterMsg = true,
                    this.letterImg = false,
                    this.indexLogoImg =false,
                    this.indexMsg = false,
                    this.indexImg = true,
                    this.personalLogoImg =false,
                    this.personalMsg = false,
                    this.personalImg = true
                }
            },
            indexDisplay(){
                if(this.indexLogoImg == false){
                    this.letterLogoImg = false,
                    this.letterMsg = false,
                    this.letterImg = true,
                    this.indexLogoImg =true,
                    this.indexMsg = true,
                    this.indexImg = false,
                    this.personalLogoImg =false,
                    this.personalMsg = false,
                    this.personalImg = true
                }
            },
            personalDisplay(){
                if(this.personalLogoImg == false){
                    this.letterLogoImg = false,
                    this.letterMsg = false,
                    this.letterImg = true,
                    this.indexLogoImg =false,
                    this.indexMsg = false,
                    this.indexImg = true,
                    this.personalLogoImg =true,
                    this.personalMsg = true,
                    this.personalImg = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    a{text-decoration: none}
    .foot{
        border: 1px solid rgba(89,89,89,0.1);
        width: 100%;
        height: px2rem(104px);
        background-color: rgba(255,255,255,1);
        position: fixed;
        bottom: 0;
    }
    .foot-letter-img{
        width: px2rem(55px);
        height: px2rem(55px);
    }
    .foot-ul{
        width: 100%;
        height: px2rem(104px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .foot-li{
        float: left;
    }
    .foot-li-div{
        margin-top: px2rem(22px);
        text-align: center;
        width: px2rem(244px);
        height: px2rem(75px);
    }
    .foot-msg{
        font-size: px2rem(26px);
    }
    .letter-msg-color{
        color: rgba(96,209,255,1);
    }
    .index-msg-color{
        color: rgba(254,182,32,1);
    }
    .personal-msg-color{
        color: rgba(108,203,109,1);
    }
    .foot-vertical-line{
        width: px2rem(2px);
        height: px2rem(79px);
        background-color: rgba(89,89,89,0.3);
        float: left;
        margin-top: px2rem(12px);
    }
    .foot-logo{
        margin: px2rem(-150px) auto 0 auto;
        width: px2rem(119px);
        height: px2rem(119px);
        background-color: rgba(255,255,255,1);
        border-radius: px2rem(80px);
        border: 1px solid rgba(89,89,89,0.1);
        border-bottom: 0;
    }
    .foot-logo-img{
        width: px2rem(66px);
        height: px2rem(66px);
        margin-top: px2rem(30px);
    }
</style>