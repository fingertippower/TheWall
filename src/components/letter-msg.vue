<template>
    <div class="bg">
        <div class="head">
            <img class="gotoBack" src="../assets/img/gotoBack.png" @click="goBack">
            <span class="headMsg">详情阅读</span>
        </div>
        <div class="body">
            <p class="title">蔷薇之恋</p>
            <p class="word">
                论文是科学或者社会研究工作者在学术书籍或学术期刊上刊登的呈现自己研究成果的文章。
                论文往往强调原创性的工作总结，但当然也可以是对前人工作总结的回顾及做出评价，
                后者也往往被称为综述性文章（Review）。论文的出版正在经历着重大变化，
                出现了从传统的印刷版到网络上电子格式的兴起。
                论文就是用来进行科学研究和描述科研成果的文章，简称之为论文。
                它既是探讨问题进行科学研究的一种手段，又是描述科研成果进行学术交流的一种工具。
                它包括学年论文、毕业论文、学位论文、科技论文、成果论文等，总称为论文。
            </p>
            <div class="imgBox">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
                <img class="listImg" src="../assets/img/coment/1.jpg" onerror="this.style.display='none'">
            </div>
            <div class="author">血蔷薇</div>
            <div class="time">2017.3.5</div>
        </div>
        <div class="foot"></div>
    </div>
</template>

<script>
    export default{
        methods:{
            goBack:function(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/function.scss';
    .bg{
        .head{
            z-index: 2;
            position: fixed;
            top: 0;
            width: 100%;
            height: px2rem(149px);
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
                font-size: px2rem(48px);
                position: relative;
                top: px2rem(54px);
            }
        }
        .body{
            position: absolute;
            margin-top: px2rem(149px);
            margin-bottom: px2rem(109px);
            width: 80%;
            background-image: url("../assets/img/letterStyle.png"),url("../assets/img/letterStyle.png");
            background-repeat: repeat-y;
            background-position: left top, right top;
            background-size: px2rem(33px) px2rem(123px);
            padding: px2rem(70px);
            .title{
                font-size: px2rem(36px);
                color: rgba(87,60,13,1);
            }
            .word{
                margin-top: px2rem(30px);
                font-size: px2rem(28px);
                line-height: px2rem(60px);
                color: rgba(87,60,13,1);
            }
            .imgBox{
                margin-top: px2rem(30px);
                width: 100%;
                max-height: px2rem(700px);
                .listImg{
                    margin-left: px2rem(7px);
                    width: px2rem(183px);
                    height: px2rem(183px);
                }
            }
            .author{
                float: right;
                width: px2rem(100px);
                height: px2rem(50px);
                margin-top: px2rem(20px);
                color: rgba(87,60,13,1);
            }
            .time{
                color: rgba(87,60,13,1);
                position: relative;
                float: right;
                left: px2rem(80px);
                width: px2rem(100px);
                height: px2rem(50px);
                margin-top: px2rem(70px);
            }
        }
        .foot{
            position: fixed;
            bottom: 0;
            width: 100%;
            height: px2rem(109px);
            background-color: rgba(244,173,18,1);
        }
    }
</style>