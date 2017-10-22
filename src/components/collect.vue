<template>
    <div class="background">
        <div class="head">
            <img src="../assets/img/return.png" @click="goBack">
            <span>收藏</span>
        </div>
        <div class="collect" v-for="(val,collect) in getCollectList">
            <p class="title">{{val.collectTitle}}</p>
            <p class="text">{{val.collectText}}</p>
            <p class="time">{{val.collectTime}}</p>
            <img :src="val.collectImg" onerror="this.style.display='none'">
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import axios from 'axios'
    export default{
        data(){
            return{
                scroll:'',
                timer:null,
                refresh:false
            }
        },
        computed:mapGetters(['getCollectList']),
        methods:{
            goBack:function(){
                this.$router.go(-1);
            },
            menu:function () {
                if(typeof this.timer==='number'){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                    this.scroll=document.body.scrollTop;
                    if(this.scroll>700){
                        this.refresh=true;
                        this.$store.dispatch('getCollectList');
                        setTimeout(()=>{
                            this.refresh=false;
                        },2000)
                    }
                },100)
            }
        },
        mounted:function () {
            window.addEventListener('scroll',this.menu,false);
            return this.$store.dispatch('getCollectList');
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .background{
        width: 100%;
        height: 100%;
        background-color: #F6EDDC;
        position: fixed;
    }
    .head{
        width:100%;
        height:px2rem(109.1172px);
        background-color: #F4AD12;
        position: relative;
    }
    .head img{
        width:px2rem(23px);
        height:px2rem(36px);
        margin-left: px2rem(44.5859px);
        margin-top: px2rem(58.1196px);
    }
    .head span{
        font-size: px2rem(42px);
        color: #fff;
        text-align: center;
        margin-top:px2rem(55.4971px);
        margin-left: px2rem(276.0039px);
        position: absolute;
    }
    .collect{
        width: px2rem(691px);
        height: px2rem(282.8843px);
        margin: px2rem(6px) auto;
        margin-bottom: px2rem(340px);
        border-radius: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
        background-color: rgba(255,255,255,0.5);
        box-shadow:0 0 px2rem(4px) dimgrey;
    }
    .collect .title{
        font-size: px2rem(26px);
        margin-top: px2rem(58px);
        margin-left: px2rem(25px);
        position: absolute;
    }
    .collect .text{
        width: px2rem(447px);
        margin-top: px2rem(101px);
        margin-left: px2rem(25px);
        position: absolute;
        color: #CDCCCB;
    }
    .collect .time{
        margin-top: px2rem(233px);
        margin-left: px2rem(25px);
        position: absolute;
        color: #CDCCCB;
    }
    .collect img{
        width: px2rem(194px);
        height: px2rem(282.8843px);
        float: right;
        border-radius: 0 px2rem(10px) px2rem(10px) 0;
    }
</style>