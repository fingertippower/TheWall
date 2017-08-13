<template>
    <div class="background">
        <div class="index-personal-msg">
            <div class="head">
                <div class="headImg">
                    <img class="headImgMsg" src="../assets/img/head.png">
                </div>
                <img class="goBack" src="../assets/img/click.png">
            </div>
            <div class="body">
            </div>
            <div class="foot">
                <div class="focusOn">
                    <img  class="focusOnImg" src="../assets/img/focusOn.png">
                    <span class="focusOnMsg">关注</span>
                </div>
                <div class="postLetter">
                    <img  class="postLetterImg" src="../assets/img/postLetter.png">
                    <span class="postLetterMsg">发私信</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .background{
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
        width: 100%;
        height: px2rem(423px);
        background-color: #fff;
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
        .focusOn{
            width: px2rem(117px);
            height: px2rem(41px);
            color: #fff;
            border: 1px solid #fff;
            margin-right: 10%;
            border-radius: px2rem(10px);
            text-align: center;
            .focusOnImg{
                position: relative;
                top: px2rem(5px);
                width: px2rem(22px);
                height: px2rem(22px);
            }
            .focusOnMsg{
                position: relative;
                top: px2rem(4px);
            }
        }
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