<template>
    <div class="foot">
        <ul class="foot-ul">
            <li class="foot-li" @click="letterDisplay">
                <div class="foot-li-div">
                    <router-link to="/index/letter">
                        <div class="foot-logo" v-show="display.letterLogoImg">
                            <img  class="foot-logo-img" src="../assets/img/letter.png">
                        </div>
                        <img  class="foot-letter-img" src="../assets/img/letter.png" v-show="display.letterImg">
                        <p class="foot-msg letter-msg-color" v-show="display.letterMsg">信件</p>
                    </router-link>
                </div>
            </li>
            <div class="foot-vertical-line"></div>
            <li class="foot-li" @click="indexDisplay">
                <div class="foot-li-div">
                    <router-link to="/index/index-home">
                        <div class="foot-logo" v-show="display.indexLogoImg">
                            <img  class="foot-logo-img" src="../assets/img/index.png">
                        </div>
                        <img  class="foot-letter-img" src="../assets/img/index.png" v-show="display.indexImg">
                        <p class="foot-msg index-msg-color" v-show="display.indexMsg">主页</p>
                    </router-link>
                </div>
            </li>
            <div class="foot-vertical-line"></div>
            <li class="foot-li" @click="personalDisplay">
                <div class="foot-li-div">
                    <div class="foot-logo" v-show="display.personalLogoImg">
                        <img  class="foot-logo-img" src="../assets/img/personal.png">
                    </div>
                    <img  class="foot-letter-img" src="../assets/img/personal.png" v-show="display.personalImg">
                    <p class="foot-msg personal-msg-color" v-show="display.personalMsg">个人</p>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        //display是vuex中的返回数组，数组中相应的值控制indexFoot中的logo和文字展示与否
        computed:mapGetters(['display']),
        //这里返回的三个事件是vuex中的事件，用来控制点击后display中的对应值的变化
        methods:mapActions(['letterDisplay','indexDisplay','personalDisplay'])
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