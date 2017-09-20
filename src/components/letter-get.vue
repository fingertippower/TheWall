<template>
    <div>
        <router-view></router-view>
        <ul class="list">
            <li class="listLi">
                <div class="imgBox">
                    <img src="../assets/img/1.png" class="img">
                </div>
                <router-link to="/letter-msg">
                    <div class="title">
                        <p>我要对你表白</p>
                    </div>
                </router-link>
                <div class="sendLetterMsg">
                    <div class="time">
                       2017.12.20
                    </div>
                    <router-link to="/index/letter/letter-get/letter-get-msg">
                            <img src="../assets/img/news.png" class="sendLetterMsgImg">
                    </router-link>
                </div>
            </li>
            <li class="listLi">
                <div class="imgBox">
                    <img src="../assets/img/1.png" class="img">
                </div>
                <router-link to="/letter-msg">
                    <div class="title">
                        <p>我要对你表白</p>
                    </div>
                </router-link>
                <div class="sendLetterMsg">
                    <div class="time">
                        2017.12.20
                    </div>
                    <router-link to="/index/letter/letter-get/letter-get-msg">
                        <img src="../assets/img/news.png" class="sendLetterMsgImg">
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        methods:{

        },
        mounted:function(){
            let imgBox = document.getElementsByClassName('imgBox');
            let img = document.getElementsByClassName('img');
            //收信箱每个列表的左侧梯形的背景颜色，产生随机的颜色
            for(let i=0; i<imgBox.length; i++){
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                imgBox[i].style.borderTopColor = "rgba(" + r + "," + g + "," + b + ",1)";
            }
            //收信箱每个列表的左侧的图片，随机的添加图片
            for(let i=0; i<img.length; i++){
                let a = Math.floor(Math.random()*2);
                img[i].src = "/src/assets/img/" + a + ".png";
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/function.scss';
    .list{
        margin-top: px2rem(230px);
        margin-bottom: px2rem(150px);
        .listLi{
            width: 100%;
            height: px2rem(180px);
            position: relative;
            .imgBox{
                height: 0;
                width: px2rem(195px);
                border-top-color: rgba(244,173,18,1);
                border-top-width: px2rem(180px);
                border-top-style: solid;
                border-right: px2rem(57px) solid transparent;
                float: left;
                .img{
                    position: absolute;
                    margin-top: px2rem(-130px);
                    margin-left: px2rem(65px);
                    width:px2rem(82px);
                    height: px2rem(82px);
                }
            }
            .title{
                font-size: px2rem(42px);
                color: rgba(142,141,141,1);
                display: flex;
                justify-content: center;
                align-items: center;
                width: 48%;
                height: px2rem(180px);
                float: left;
                position: absolute;
                margin-left: px2rem(240px);
            }
            .sendLetterMsg{
                position: absolute;
                margin-left: 81%;
                float: left;
                min-width: 12.5%;
                height: px2rem(180px);
                text-align: center;
                .time{
                    margin-left: px2rem(-10px);
                    width: px2rem(145px);
                    height: px2rem(33px);
                    background-color: rgba(174,231,244,1);
                    font-size: px2rem(18px);
                    color: #fff;
                    text-align: center;
                }
                .sendLetterMsgImg{
                    position: absolute;
                    margin-left: px2rem(-30px);
                    width: px2rem(50px);
                    height: px2rem(50px);
                    margin-top: px2rem(30px);
                }
            }
        }
    }
    .listLi:before{
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        border-top: 1px solid rgba(84,221,69,1);
        -webkit-transform-origin: 0 0;
        -moz-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        -o-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(0.5, 0.5);
        -ms-transform: scale(0.5, 0.5);
        -o-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>