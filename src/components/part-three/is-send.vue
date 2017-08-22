<template>
    <div id="sendM">
        <div class="sendM-top"></div>
        <div class="sendM-container">
            <div class="sendM-way">
                <div><img src="src/assets/img/part-three/receiver.png" alt=""><span>收信件</span></div>
                <div class="sendM-select"><span>已发送</span></div>
            </div>
            <div class="sendM-time">
                <ul class="sendM-time-box">
                    <li v-for="(item, index) in times" v-on:click="changeInf(index)">
                        <div>
                            <span class="m">{{item.moth}}月</span><span class="d">{{item.days}}</span><span class="zero"></span>
                        </div>
                     </li>
                </ul>
            </div>
            <div class="sendM-content">
                <img v-on:click="Pre()" src="src/assets/img/part-three/left.png" alt="">
                <div class="sendM-content-box">
                    <div class="item item-s">
                        <span class="sendM-content-title">表白情书1</span>
                        <p class="sendM-content-p">
                            爱上了你，坏男孩我才领略思念的滋味、分离的愁苦和妒忌的煎熬，还有那无休止的占有欲.为什么你的一举一动都让我心潮起伏?为什么我总害怕时光飞逝而无法与你终生厮守?
                            你一直走进我的生命，我正为你准备好一生一世。
                        </p>
                        <div class="read">阅读</div>
                    </div>
                    <div class="item">
                        <span class="sendM-content-title">表白情书2</span>
                        <p class="sendM-content-p">
                            爱上了你，坏男孩我才领略思念的滋味、分离的愁苦和妒忌的煎熬，还有那无休止的占有欲.为什么你的一举一动都让我心潮起伏?为什么我总害怕时光飞逝而无法与你终生厮守?
                            你一直走进我的生命，我正为你准备好一生一世。
                        </p>
                        <div class="read">阅读</div>
                    </div>
                    <div class="item">
                        <span class="sendM-content-title">表白情书3</span>
                        <p class="sendM-content-p">
                            爱上了你，坏男孩我才领略思念的滋味、分离的愁苦和妒忌的煎熬，还有那无休止的占有欲.为什么你的一举一动都让我心潮起伏?为什么我总害怕时光飞逝而无法与你终生厮守?
                            你一直走进我的生命，我正为你准备好一生一世。
                        </p>
                        <div class="read">阅读</div>
                    </div>
                    <div class="item">
                        <span class="sendM-content-title">表白情书4</span>
                        <p class="sendM-content-p">
                            爱上了你，坏男孩我才领略思念的滋味、分离的愁苦和妒忌的煎熬，还有那无休止的占有欲.为什么你的一举一动都让我心潮起伏?为什么我总害怕时光飞逝而无法与你终生厮守?
                            你一直走进我的生命，我正为你准备好一生一世。
                        </p>
                        <div class="read">阅读</div>
                    </div>
                </div>
                <img v-on:click="Next()" src="src/assets/img/part-three/right.png" alt="">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @import 'src/assets/css/function.scss';
    html, body {
        height: 100%;
        width: 100%;
    }
    #sendM {
        .sendM-top {
            width: 100%;
            height: px2rem(108px);
            background: #F4AD12;
        }
        .sendM-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            .sendM-way {
                width: 100%;
                height: px2rem(105px);
                display: flex;
                align-items: center;
                justify-content: space-around;
                div {
                    height: px2rem(50px);
                    width: px2rem(188px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #EA4C89;
                    font-size: px2rem(40px);
                    color: #EA4C89;
                    border-radius: 8%;
                    img {
                        display: block;
                        width: px2rem(30px);
                        height: px2rem(30px);
                        margin-right: px2rem(5px);
                    }
                }
                .sendM-select {
                    background: #EA4C89;
                    color: white;
                }
            }
            .sendM-time {
                width: 100%;
                height: px2rem(86px);
                border-top: 1px solid #F4AD12;

                ul {
                    width: 100%;
                    height: px2rem(86px);
                    display: flex;
                    li {
                        flex: 1;
                        position: relative;

                        div {
                            margin: 0 auto;
                            width: px2rem(108px);
                            height: 100%;
                            border-radius: 25% 25% 0 0;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            .m {
                                color: gray;
                                font-size: px2rem(9px);
                            }
                            .d {
                                font-size: px2rem(27px);
                                color: #F4AD12;
                            }
                            .zero {
                                display: inline-block;
                                width: px2rem(10px);
                                height: px2rem(10px);
                                border-radius: 50%;
                                background: red;
                            }
                        }
                        .sedM-time-sel {
                            background: #FF7677;
                        }
                    }
                    li:after {
                        content: "";
                        display: block;
                        width: 1px;
                        height: px2rem(74px);
                        background: #F4AD12;
                        position: absolute;
                        left: 100%;
                        top: 12%;
                    }
                }
            }
            .sendM-content {
                width: 100%;
                height: px2rem(925px);
                background: #FF7677;
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: relative;
                .sendM-content-box {
                    width: px2rem(555px);
                    height: px2rem(820px);
                    background: white;
                    position: relative;
                    border-radius: 5%;

                    .item {
                        border-radius: 5%;
                        width: px2rem(555px);
                        height: px2rem(820px);
                        background: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        visibility: hidden;
                        position: absolute;
                        .sendM-content-title {
                            font-size: px2rem(48px);
                            margin-top: px2rem(60px);
                        }
                        .sendM-content-title:after {
                            content: "";
                            display: block;
                            width: 0;
                            height: 0;
                            clear: both;
                        }
                        .sendM-content-p {
                            font-size: px2rem(36px);
                            padding: 0 px2rem(25px);
                        }
                        .read {
                            width: 100%;
                            height: px2rem(150px);
                            font-size: px2rem(72px);
                            background: #F4AD12;
                            color: white;
                            border-radius: 5%;
                            line-height: px2rem(150px);
                            text-align: center;
                        }
                    }
                    .item-s {
                        visibility: visible;
                    }
                }
                img {
                    height: px2rem(50px);
                    width: px2rem(50px);
                    position: relative;
                    z-index: 99999;
                }

            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                times :
                    [{
                        "moth" : "7",
                        "days" : "01"
                    },{
                        "moth" : "7",
                        "days" : "05"
                    },{
                        "moth" : "7",
                        "days" : "12"
                    },{
                        "moth" : "7",
                        "days" : "15"
                    }],
                aLi : '',
                aSpan : '',
                aContentImg : '',
                iNow:'',
            }
        },
        methods:{
            changeInf:function (index) {
                this.initThings(index);
                this.changeLi(index);
            },
            Next:function () {
                this.iNow = (++this.iNow) % this.aLi.length;
                this.changContentImg(this.iNow);
                this.changeLi(this.iNow);
            },
            Pre: function () {
                if (this.iNow) {
                    this.iNow--;
                } else {
                    this.iNow = this.aLi.length - 1;
                }
                this.changContentImg(this.iNow);
                this.changeLi(this.iNow);
            },
            changContentImg : function () {
                for(let i=0 ; i<this.aLi.length;i++){
                    this.aContentImg[i].classList.remove('item-s')
                }
                this.aContentImg[this.iNow].classList.add('item-s')
            },
            changeLi:function (index) {
                   this.resetCss(index);
                   this.aLi[index].querySelector('div').style.background="#FF7677";
                   this.aSpan[0].style.color = "white";
                   this.aSpan[1].style.color = "white";
                   this.aSpan[2].style.background="greenyellow";
                   this.iNow = index;
                   this.changContentImg();
            },
            //重置Li的css样式
            resetCss : function () {
                for(let i=0 ; i<this.aLi.length;i++){
                    this.aLi[i].querySelector('div').style.background="#FFFFFF";
                    let  ThatAspan =  this.aLi[i].querySelectorAll('span');
                    ThatAspan[0].style.color = "";
                    ThatAspan[1].style.color = "";
                    ThatAspan[2].style.background= "";
                }

            },
            //初始化函数的各项值
            initThings :function (index) {
                this.aLi = document.querySelectorAll('.sendM-time-box li');
                this.aSpan= this.aLi[index].querySelectorAll('span');
                this.aContentImg = document.querySelectorAll('.sendM-content-box .item');
               }
        },
        computed :{


        }
    }
</script>