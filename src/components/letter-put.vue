<template>
    <div class="letter-put">
        <router-view></router-view>
        <div class="time">
            <ul class="time-ul">
                <li class="time-li" v-for="(val, index) in letterMsg">
                    <div class="time-box" @click="readLetter(index)">
                        <div class="month">{{val.timeMonth}}</div>
                        <p class="day">{{val.timeDay}}</p>
                        <div class="spot"></div>
                    </div>
                    <span class="verticalLine"></span>
                </li>
            </ul>
        </div>
        <div class="letter-body">
            <img class="previous" src="../assets/img/left.png" @click="previous">
            <img class="next" src="../assets/img/right.png" @click="next">
            <div class="letter-msg">
                <p class="letter-msg-title">{{letterTitle}}</p>
                <p class="letter-word">{{letterBody}}</p>
                <div class="read">阅读</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default{
        computed:mapGetters(['letterMsg','letterTitle','letterBody']),
        methods:mapActions(['readLetter','previous','next']),
        mounted:function () {
            return this.$store.dispatch('getLetterMsg')
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    ::-webkit-scrollbar{
        background-color: rgba(255,118,119,1);
        height: px2rem(0px);
    }
    .letter-put{
        width: 100%;
        margin-top: px2rem(230px);
        .time{
            width: 100%;
            height: px2rem(86px);
            border-top: 1px solid rgba(254,182,32,1);
            .time-ul{
                width: 100%;
                display: inline;
                white-space: nowrap;
                overflow-x:scroll;
                float:left;
                overflow-y:hidden;
                .time-li{
                    text-align: center;
                    width: px2rem(187px);
                    height: px2rem(95px);
                    display:inline-block;
                    .time-box{
                        /*background-color: rgba(255,118,119,1);*/
                        width: px2rem(110px);
                        height: px2rem(95px);
                        margin: 0 auto;
                        border-top-left-radius: px2rem(50px);
                        border-top-right-radius: px2rem(50px);
                        .month{
                            display:block;
                            font-size: px2rem(18px);
                        }
                        .day{
                            color: rgba(254,182,32,1);
                            font-size: px2rem(42px);
                            margin-top: px2rem(-10px);
                        }
                        .spot{
                            width: px2rem(10px);
                            height: px2rem(10px);
                            background-color: rgba(234,76,137,1);
                            border-radius: px2rem(5px);
                            margin-left: 49%;
                        }
                    }
                    .verticalLine{
                        display:inline-block;
                        width: px2rem(2px);
                        height: px2rem(75px);
                        background-color: rgba(254,182,32,1);
                        float: left;
                        margin-top: px2rem(-85px);
                        margin-left: px2rem(0px);
                    }
                }
            }
        }
        .letter-body{
            position: absolute;
            width: 100%;
            height: px2rem(900px);
            background-color: rgba(255,118,119,1);
            margin-top: px2rem(8px);
            .previous{
                width: px2rem(55px);
                height: px2rem(55px);
                float: left;
                margin-top: px2rem(400px);
                margin-left: px2rem(20px);
            }
            .letter-msg{
                padding: px2rem(30px) px2rem(30px) 0 px2rem(30px);
                background-color: #fff;
                min-height: px2rem(760px);
                width: px2rem(503px);
                margin: px2rem(32px) auto auto auto;
                border-radius: px2rem(20px);
                text-align: center;
                .letter-msg-title{
                    font-size: px2rem(48px);
                }
                .letter-word{
                    position: inherit;
                    margin-top: px2rem(20px);
                    text-align: left;
                    font-size: px2rem(36px);
                }
                .read{
                    position: absolute;
                    margin-top: px2rem(55px);
                    margin-left: px2rem(-32px);
                    width: px2rem(564px);
                    height: px2rem(145px);
                    background-color: rgba(244,173,18,1);
                    border-bottom-right-radius: px2rem(20px);
                    border-bottom-left-radius: px2rem(20px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: px2rem(72px);
                    color: #fff;
                }
            }
            .next{
                float: right;
                width: px2rem(55px);
                height: px2rem(55px);
                margin-right: px2rem(20px);
                margin-top: px2rem(400px);
            }
        }
    }
</style>