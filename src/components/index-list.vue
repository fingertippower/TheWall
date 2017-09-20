<template>
    <div class="indexList">
        <ul class="ul">
            <li class="li" v-for="(val, index) in getIndexConfessionLetterList">
                <div class="listWord">
                    <div class="listWordHead">
                        <router-link to="/index/index-home/index-personal-msg">
                            <img class="listWordHeadImg" :src="val.authorHeadImg" @click="personalMsg(index)">
                        </router-link>
                        <p class="nickname">{{val.authorUsername}}</p>
                        <p class="time">{{val.confessionLetterTime}}</p>
                        <router-link to="/index/index-home/index-not-like">
                            <img class="listWordHeadFork" src="../assets/img/delete.png">
                        </router-link>
                    </div>
                    <div class="listWordBody">
                        <p class="listWordBodyMsg">{{val.confessionLetterMsg}}</p>
                        <div class="imgBox">
                            <img class="listImg" :src="val.confessionLetterImg1" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg2" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg3" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg4" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg5" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg6" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg7" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg8" onerror="this.style.display='none'">
                            <img class="listImg" :src="val.confessionLetterImg9" onerror="this.style.display='none'">
                        </div>
                    </div>
                    <div class="listWordFoot">
                        <ul class="listWordFootUl">
                            <li class="listWordFootLi">
                                <router-link to="/talk">
                                    <div>
                                        <div class="listWordFootLiTalk">{{val.confessionLetterTalkNum}}</div>
                                        <img class="listWordFootLiTalkImg" src="../assets/img/comment_alt.png">
                                    </div>
                                </router-link>
                            </li>
                            <li class="listWordFootLi" @click="heart(index)">
                                <div>
                                    <div class="listWordFootLiLetter">{{val.confessionLetterCollectionNum}}</div>
                                    <img class="listWordFootLiLetterImg" src="../assets/img/heart_alt.png"  v-show="val.heart">
                                    <img class="aListWordFootLiLetterImg" src="../assets/img/aheart_alt.png"   v-show="val.aheart">
                                </div>
                            </li>
                            <li class="listWordFootLi" @click="like(index)">
                                <div>
                                    <div class="listWordFootLiPost">{{val.confessionLetterGoodNum}}</div>
                                    <img class="listWordFootLiPostImg" src="../assets/img/like.png" v-show="val.likeDisplay">
                                    <img class="aListWordFootLiPostImg" src="../assets/img/alike.png" v-show="val.alikeDisplay">
                                </div>
                            </li>
                            <li class="listWordFootLi" @click="dislike(index)">
                                <div>
                                    <div class="listWordFootLiGood">{{val.confessionLetterNotGoodNum}}</div>
                                    <img class="listWordFootLiGoodImg" src="../assets/img/dislike.png" v-show="val.dislikeDisplay">
                                    <img class="aListWordFootLiGoodImg" src="../assets/img/adislike.png" v-show="val.adislikeDisplay">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <div class="refreshImgBox" v-show="refresh">
            <img src="../assets/img/refresh.gif" class="refreshImg">
        </div>
        <button @click="aa">231651351</button>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default{
        data(){
            return{
                scroll: '',
                timer: null,
                refresh: false
            }
        },
        computed:mapGetters(['getIndexConfessionLetterList']),
        methods:{
            ...mapActions(['like','dislike','heart','personalMsg','aa']),
            //判断表白信件列表滚动条位置
            menu:function(){
                if(typeof this.timer === 'number'){
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(()=>{
                    this.scroll = document.body.scrollTop;
                    if(this.scroll > 700){
                        this.refresh = true;
                        this.$store.dispatch('getIndexConfessionLetterList');
                        setTimeout(()=>{this.refresh = false;}, 2000);
                    }
                },100);
            }
        },
        mounted:function(){
            window.addEventListener('scroll',this.menu,false);
            return this.$store.dispatch('getIndexConfessionLetterList');
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .indexList{
        margin-top:px2rem(215px);
        width: 94%;
        margin-left: 3%;
        margin-bottom: px2rem(100px);
    }
    .li{
        margin-top: px2rem(10px);
    }
    .ul{
        list-style: none;
        .listWord{
            width: 96%;
            height: auto;
            padding: 2%;
            border-radius: px2rem(10px);
            background-color: #fff;
            .listWordHead{
                .listWordHeadImg{
                    float: left;
                    width: px2rem(83px);
                    height: px2rem(83px);
                    border-radius: 50%;
                    overflow: hidden;
                }
                .nickname{
                    font-size: px2rem(23px);
                    position: relative;
                    top: px2rem(10px);
                    margin-left: px2rem(94px);
                    color: rgba(142,141,141,1);
                }
                .time{
                    font-size: px2rem(12px);
                    position: relative;
                    top: px2rem(15px);
                    margin-left: px2rem(94px);
                    color: rgba(142,141,141,1);
                }
                .listWordHeadFork{
                    width: px2rem(32px);
                    height: px2rem(32px);
                    float: right;
                    position: relative;
                    top: px2rem(-65px);
                }
            }
            .listWordBody{
                margin: px2rem(20px) px2rem(55px);
                .listWordBodyMsg{
                    font-size: px2rem(24px);
                    color: rgba(142,141,141,1);
                }
                .imgBox{
                    width: 100%;
                    max-height: px2rem(700px);
                    margin-top: px2rem(10px);
                    .listImg{
                        width: px2rem(183px);
                        height: px2rem(183px);
                    }
                }
            }
            .listWordFoot{
                width: 100%;
                height: px2rem(32px);
                .listWordFootUl{
                    height: px2rem(32px);
                    width: 65%;
                    margin-left: 32%;
                    list-style: none;
                    .listWordFootLi{
                        float: left;
                        margin-left: px2rem(15px);
                        .listWordFootLiTalk{
                            float: left;
                            text-align: center;
                            width: px2rem(55px);
                            height: px2rem(30px);
                            font-size: px2rem(8px);
                            color: rgba(217,213,213,1);
                        }
                        .listWordFootLiTalkImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(31px);
                            height: px2rem(27px);
                        }
                        .listWordFootLiLetter{
                            float: left;
                            text-align: center;
                            width: px2rem(55px);
                            height: px2rem(30px);
                            font-size: px2rem(8px);
                            color: rgba(217,213,213,1);
                        }
                        .listWordFootLiLetterImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(30px);
                            height: px2rem(28px);
                        }
                        .aListWordFootLiLetterImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(30px);
                            height: px2rem(28px);
                        }
                        .listWordFootLiPost{
                            float: left;
                            text-align: center;
                            width: px2rem(55px);
                            height: px2rem(30px);
                            font-size: px2rem(8px);
                            color: rgba(217,213,213,1);
                        }
                        .listWordFootLiPostImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(31px);
                            height: px2rem(28px);
                        }
                        .aListWordFootLiPostImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(31px);
                            height: px2rem(28px);
                        }
                        .listWordFootLiGood{
                            float: left;
                            text-align: center;
                            width: px2rem(55px);
                            height: px2rem(30px);
                            font-size: px2rem(8px);
                            color: rgba(217,213,213,1);
                        }
                        .listWordFootLiGoodImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(29px);
                            height: px2rem(29px);
                        }
                        .aListWordFootLiGoodImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(29px);
                            height: px2rem(29px);
                        }
                    }
                }
            }
        }
    }
    .refreshImgBox{
        z-index: 5;
        background-color: #fff;
        position: fixed;
        left: px2rem(343px);
        bottom: px2rem(82px);
        height: px2rem(70px);
        width: px2rem(70px);
        .refreshImg{
            height: px2rem(70px);
            width: px2rem(70px);
        }
    }

</style>