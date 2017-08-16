<template>
    <div class="indexList">
        <ul class="ul">
            <li>
                <div class="listWord">
                    <div class="listWordHead">
                        <img class="listWordHeadImg" src="../assets/img/head.png">
                        <p class="nickname">回忆中的血蔷薇</p>
                        <p class="time">2017年8月8日</p>
                        <img class="listWordHeadFork" src="../assets/img/delete.png">
                    </div>
                    <div class="listWordBody">
                        <p>
                            就啊好担心卡萨诺夏洛克撒娇小卢卡斯你看了下，阿奎罗新疆阿克苏垃圾箱内卡上，
                            打开私信卡拉斯科潇洒看。潇洒快乐就行啊说
                        </p>
                    </div>
                    <div class="listWordFoot">
                        <ul class="listWordFootUl">
                            <li class="listWordFootLi">
                                <router-link to="/talk">
                                    <div>
                                        <span class="listWordFootLiTalk">1223</span>
                                        <img class="listWordFootLiTalkImg" src="../assets/img/talk.png">
                                    </div>
                                </router-link>
                            </li>
                            <li class="listWordFootLi">
                                <div>
                                    <span class="listWordFootLiLetter">25</span>
                                    <img class="listWordFootLiLetterImg" src="../assets/img/theLetter.png">
                                </div>
                            </li>
                            <li class="listWordFootLi">
                                <div>
                                    <span class="listWordFootLiPost">25</span>
                                    <img class="listWordFootLiPostImg" src="../assets/img/post.png">
                                </div>
                            </li>
                            <li class="listWordFootLi">
                                <div>
                                    <span class="listWordFootLiGood">25</span>
                                    <img class="listWordFootLiGoodImg" src="../assets/img/good.png">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .indexList{
        position: fixed;
        top:px2rem(215px);
        width: 94%;
        height: px2rem(1015px);
        margin-left: 3%;
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
                    position: relative;
                    top: px2rem(10px);
                    margin-left: px2rem(94px);
                    color: rgba(142,141,141,1);
                }
                .time{
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
                margin-top: px2rem(20px);
                margin-left: px2rem(55px);
                margin-bottom: px2rem(20px);
            }
            .listWordFoot{
                width: 100%;
                height: px2rem(32px);
                .listWordFootUl{
                    height: px2rem(32px);
                    width: 55%;
                    margin-left: 45%;
                    list-style: none;
                    .listWordFootLi{
                        float: left;
                        margin-left: px2rem(20px);
                        .listWordFootLiTalk{
                            font-size: px2rem(8px);
                            color: rgba(108,203,109,1);
                        }
                        .listWordFootLiTalkImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(31px);
                            height: px2rem(27px);
                        }
                        .listWordFootLiLetter{
                            font-size: px2rem(8px);
                            color: rgba(253,106,105,1);
                        }
                        .listWordFootLiLetterImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(17px);
                            height: px2rem(28px);
                        }
                        .listWordFootLiPost{
                            font-size: px2rem(8px);
                            color: rgba(159,112,122,1);
                        }
                        .listWordFootLiPostImg{
                            position: relative;
                            top: px2rem(5px);
                            width: px2rem(31px);
                            height: px2rem(28px);
                        }
                        .listWordFootLiGood{
                            font-size: px2rem(8px);
                            color: rgba(96,209,255,1);
                        }
                        .listWordFootLiGoodImg{
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
</style>