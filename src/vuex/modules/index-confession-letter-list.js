import axios from '../../fetch/api'
import * as types from '../types'

const state = {
    page:1,
    indexConfessionLetterList:[
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
                        "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
                        "也许是与你擦身而过时无意间嗅到的你的芳香，" +
                        "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "/src/assets/img/coment/3.jpg",
            confessionLetterImg8: "/src/assets/img/coment/3.jpg",
            confessionLetterImg9: "/src/assets/img/coment/3.jpg",
            confessionLetterTalkNum: "18.1万",
            confessionLetterGoodNum: "18.1万",
            confessionLetterNotGoodNum: "17.1万",
            confessionLetterCollectionNum: "12.1万",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "999",
            confessionLetterGoodNum: "9999",
            confessionLetterNotGoodNum: "1",
            confessionLetterCollectionNum: "100",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "999",
            confessionLetterGoodNum: "9999",
            confessionLetterNotGoodNum: "1",
            confessionLetterCollectionNum: "100",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "999",
            confessionLetterGoodNum: "9999",
            confessionLetterNotGoodNum: "1",
            confessionLetterCollectionNum: "100",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "999",
            confessionLetterGoodNum: "9999",
            confessionLetterNotGoodNum: "1",
            confessionLetterCollectionNum: "100",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "999",
            confessionLetterGoodNum: "9999",
            confessionLetterNotGoodNum: "1",
            confessionLetterCollectionNum: "100",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
        {
            confessionLetterIndex: 0,
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            authorHeadImg: "/src/assets/img/head.png",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "999",
            confessionLetterGoodNum: "9999",
            confessionLetterNotGoodNum: "1",
            confessionLetterCollectionNum: "100",
            likeDisplay: true,
            alikeDisplay: false,
            dislikeDisplay: true,
            adislikeDisplay: false,
            heart:true,
            aheart:false
        },
    ],
    putIndexConfessionLetterMsg:[{
            personalImg:"/src/assets/img/head.png",
            username: "你说的血蔷薇",
            gender: "女",
            name: "王涛",
            phone: "18846927777",
            college: "数据科学与技术学院",
            grade: "2015"
        }
    ],
    talkList:[
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
    ]
}

const mutations = {
    //从后台获取主页所有的表白信件，和后台对接上在写
    [types.GET_INDEX_CONFESSION_LETTER_LIST](state,res){
        state.indexConfessionLetterList.push(res.data);
        state.page++;
    },
    //用户点击喜欢的图标后，喜欢数值加一，并且改变喜欢的图片样式
    [types.CONFESSION_LETTER_LIKE](state,index){
        let goodImg = document.getElementsByClassName('listWordFootLiPostImg');
        let aNotGoodImg = document.getElementsByClassName('aListWordFootLiGoodImg');
        if(aNotGoodImg[index].style.display == "none"){
            if(goodImg[index].style.display != "none"){
                if(state.indexConfessionLetterList[index].confessionLetterGoodNum == 9999){
                    state.indexConfessionLetterList[index].confessionLetterGoodNum = "1万";
                }else{
                    state.indexConfessionLetterList[index].confessionLetterGoodNum ++;
                }
                state.indexConfessionLetterList[index].likeDisplay = false;
                state.indexConfessionLetterList[index].alikeDisplay = true;
            }
        }
    },
    [types.CONFESSION_LETTER_DISLIKE](state,index){
        let notGoodImg = document.getElementsByClassName('listWordFootLiGoodImg');
        let agoodImg = document.getElementsByClassName('aListWordFootLiPostImg');
        if(agoodImg[index].style.display == "none"){
            if(notGoodImg[index].style.display != "none"){
                if(state.indexConfessionLetterList[index].confessionLetterNotGoodNum == 9999){
                    state.indexConfessionLetterList[index].confessionLetterNotGoodNum = "1万";
                }else{
                    state.indexConfessionLetterList[index].confessionLetterNotGoodNum ++;
                }
                state.indexConfessionLetterList[index].dislikeDisplay = false;
                state.indexConfessionLetterList[index].adislikeDisplay = true;
            }
        }
    },
    [types.CONFESSION_LETTER_HEART](state,index){
        let heart = document.getElementsByClassName('listWordFootLiLetterImg');
        if(heart[index].style.display != "none"){
            if(state.indexConfessionLetterList[index].confessionLetterCollectionNum == 9999){
                state.indexConfessionLetterList[index].confessionLetterCollectionNum = "1万";
            }else{
                state.indexConfessionLetterList[index].confessionLetterCollectionNum ++;
            }
            state.indexConfessionLetterList[index].heart = false;
            state.indexConfessionLetterList[index].aheart = true;
        }
    },
    //用户点击主页表白信用户头像后将从后台获取的对应用户的信息存储在state中的putIndexConfessionLetterMsg中
    [types.CONFESSION_LETTER_PERSONAL_MSG](state,index){

    }
}
const actions = {
    //从后台获取主页所有的表白信件，和后台对接上在写
    getIndexConfessionLetterList({commit,state}){
        axios({
            method: 'get',
            url: 'webapp/dongtaivisit.json/'+ state.page,
            /*params:{
                "id":"{1}"
            }*/
        }).then((res)=>{
            commit(types.GET_INDEX_CONFESSION_LETTER_LIST,res);
            console.log(res.data);
        })
    },
    //用户点击喜欢之后相应表白信件的喜欢数值会加一，并且传给后台
    like({commit},index){
        commit(types.CONFESSION_LETTER_LIKE,index);
    },
    //用户点击喜欢之后相应表白信件的喜欢数值会加一，并且传给后台
    dislike({commit},index){
        commit(types.CONFESSION_LETTER_DISLIKE,index);
    },
    //用户点击主页表白信件下面的收藏按钮之后，用户会收藏此信件并且收藏数值会加一
    heart({commit},index){
        commit(types.CONFESSION_LETTER_HEART,index);
    },
    //用户点击主页表白信件相应发件人的头像后会获取到相应发件人的信息
    personalMsg({commit},index){
        commit(types.CONFESSION_LETTER_PERSONAL_MSG,index);
    },
    //用户在评论中评论完成后点击发送按钮，将用户的评论发送到后台
    sendTheTalk(){
        let input = document.getElementById('input').value;
        console.log(input);
    },
}

const getters = {
    getIndexConfessionLetterList(state){
        return state.indexConfessionLetterList;
    },
    putIndexConfessionLetterMsg(state){
        return state.putIndexConfessionLetterMsg;
    },
    getTalkMsg(state){
        return state.talkList;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}