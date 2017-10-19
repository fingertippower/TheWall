<template>
    <div>
        <div class="head">
            <img class="gotoBack" src="../assets/img/gotoBack.png" @click="goBack">
            <span class="headMsg">新建信件</span>
        </div>
        <div class="body">
            <input type="text" placeholder="请输入标题" class="title">
            <textarea name="" id="" cols="30" rows="16" class="letter"></textarea>
            <div class="imgBox">
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(0)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(1)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(2)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(3)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(4)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(5)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(6)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(7)">
                </div>
                <div class="imgListBox">
                    <img src="../assets/img/click.jpg" alt="" class="img">
                    <input type="file"  class="file" @click="getImg(8)">
                </div>
            </div>
            <div class="change">
                <p class="changeTitle">请选择您的发送指令</p>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">输入接收者手机号</p>
                    <input type="text" class="theInput" placeholder="输入手机号若不知可不填">
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">输入接收者真实姓名</p>
                    <input type="text" class="theInput" placeholder="输入真实姓名若不知可不填">
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">输入接收者昵称</p>
                    <input type="text" class="theInput" placeholder="输入昵称若不知可不填">
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">输入接收者学院</p>
                    <input type="text" class="theInput" placeholder="输入学院若不知可不填">
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">选择发送的人群</p>
                    <select class="sendPeopleChange">
                            <option value="所有人">所有人</option>
                            <option value="仅接收人">仅接收人</option>
                    </select>
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">是否公开你的昵称</p>
                    <div class="sendPeopleChange">
                        <span>是</span><input type="radio" value="是" name="昵称">
                        <span>否</span><input type="radio" value="否" name="昵称">
                    </div>
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">是否公开你的真实姓名</p>
                    <div class="sendPeopleChange">
                        <span>是</span><input type="radio" value="是" name="真实姓名">
                        <span>否</span><input type="radio" value="否" name="真实姓名">
                    </div>
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">是否公开你的性别</p>
                    <div class="sendPeopleChange">
                        <span>是</span><input type="radio" value="是" name="性别">
                        <span>否</span><input type="radio" value="否" name="性别">
                    </div>
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">是否公开你的手机</p>
                    <div class="sendPeopleChange">
                        <span>是</span><input type="radio" value="是" name="手机">
                        <span>否</span><input type="radio" value="否" name="手机">
                    </div>
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">是否公开你的学院</p>
                    <div class="sendPeopleChange">
                        <span>是</span><input type="radio" value="是" name="学院">
                        <span>否</span><input type="radio" value="否" name="学院">
                    </div>
                </div>
                <div class="sendPeople">
                    <p class="sendPeopleTitle">是否公开你的昵称</p>
                    <div class="sendPeopleChange">
                        <span>是</span><input type="radio" value="是" name="年级">
                        <span>否</span><input type="radio" value="否" name="年级">
                    </div>
                </div>
            </div>
            <button class="sendLetter">发送</button>
        </div>
        <div class="foot"></div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default{

        methods:{
            ...mapActions(['getImg']),
            goBack:function(){
                this.$router.go(-1);
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/css/function.scss';
    ::-webkit-scrollbar{
        background-color: #fff;
        width: px2rem(0px);
    }
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
        width: 82%;
        background-image: url("../assets/img/letterStyle.png"),url("../assets/img/letterStyle.png");
        background-repeat: repeat-y;
        background-position: left top, right top;
        background-size: px2rem(33px) px2rem(123px);
        padding: px2rem(70px);
        text-align: center;
        .title{
            width: 100%;
            height: px2rem(60px);
            border: px2rem(0.1px) solid #F5F5DC;
            border-radius: px2rem(20px);
            font-size: px2rem(35px);
            padding-left: px2rem(10px);
        }
        .letter{
            margin-top: px2rem(30px);
            width: 100%;
            min-height: px2rem(600px);
            border: px2rem(0.1px) solid #F5F5DC;
            border-radius: px2rem(20px);
            font-size: px2rem(35px);
            padding: px2rem(10px);
            resize:none;
        }
        .imgBox{
            width: 100%;
            height: px2rem(640px);
            margin-top: px2rem(20px);
            .imgListBox {
                float: left;
                width: px2rem(183px);
                height: px2rem(183px);
                margin-left: px2rem(13px);
                margin-top: px2rem(20px);
                .img {
                    margin-left: px2rem(10px);
                    width: px2rem(183px);
                    height: px2rem(183px);
                }
                .file {
                    position: absolute;
                    width: px2rem(183px);
                    height: px2rem(183px);
                    opacity: 0;
                    margin-top: px2rem(-183px);
                    margin-left: px2rem(-80px);
                }
            }
        }
        .change{
            width: 100%;
            height: px2rem(1000px);
            .changeTitle{
                font-size: px2rem(30px);
                color: rgba(142,141,141,1);
            }
            .sendPeople{
                border-bottom: px2rem(2px) solid rgba(142,141,141,1);
                margin-top: px2rem(20px);
                height: px2rem(60px);
                .sendPeopleTitle{
                    line-height: px2rem(50px);
                    float: left;
                    color: rgba(142,141,141,1);
                }
                .sendPeopleChange{
                    border-radius: px2rem(10px);
                    height: px2rem(50px);
                    float: right;
                    color: rgba(142,141,141,1);
                }
                .theInput{
                    float: right;
                    width: px2rem(300px);
                    height:px2rem(40px);
                    border-radius: px2rem(10px);
                    padding-left: px2rem(20px);
                }
            }
        }
        .sendLetter{
            border-radius: px2rem(20px);
            width: px2rem(200px);
            height: px2rem(80px);
            font-size: px2rem(40px);
            color: rgba(142,141,141,1);
            background-color: rgba(244,173,18,1);
        }
    }
    .foot{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: px2rem(109px);
        background-color: rgba(244,173,18,1);
    }

</style>