import * as types from '../types'

const state = {
    indexConfessionLetterList:[
        {
            confessionLetterIndex: 0,
            authorHeadImg: "/src/assets/img/head.png",
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
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
            confessionLetterTalkNum: "1000",
            confessionLetterGoodNum: "1000",
            confessionLetterNotGoodNum: "1000",
            confessionLetterCollectionNum: "100"
        },
        {
            confessionLetterIndex: 0,
            authorHeadImg: "/src/assets/img/head.png",
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "",
            confessionLetterImg5: "",
            confessionLetterImg6: "",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "1000",
            confessionLetterGoodNum: "1000",
            confessionLetterNotGoodNum: "1000",
            confessionLetterCollectionNum: "100"
        },
        {
            confessionLetterIndex: 0,
            authorHeadImg: "/src/assets/img/head.png",
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
            confessionLetterMsg: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。",
            confessionLetterImg1: "",
            confessionLetterImg2: "",
            confessionLetterImg3: "",
            confessionLetterImg4: "",
            confessionLetterImg5: "",
            confessionLetterImg6: "",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
            confessionLetterTalkNum: "1000",
            confessionLetterGoodNum: "1000",
            confessionLetterNotGoodNum: "1000",
            confessionLetterCollectionNum: "100"
        },
        {
            confessionLetterIndex: 0,
            authorHeadImg: "/src/assets/img/head.png",
            authorUsername: "回忆中的血蔷薇",
            confessionLetterTime: "2017年2月2日",
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
            confessionLetterImg7: "/src/assets/img/coment/1.jpg",
            confessionLetterImg8: "/src/assets/img/coment/4.jpg",
            confessionLetterImg9: "/src/assets/img/coment/3.jpg",
            confessionLetterTalkNum: "1000",
            confessionLetterGoodNum: "1000",
            confessionLetterNotGoodNum: "1000",
            confessionLetterCollectionNum: "100"
        },
    ]
}

const mutations = {
    //从后台获取主页所有的表白信件，和后台对接上在写
    [types.GET_INDEX_CONFESSION_LETTER_LIST](state){

    }
}
const actions = {
    //从后台获取主页所有的表白信件，和后台对接上在写
    getIndexConfessionLetterList({commit}){
        commit(types.GET_INDEX_CONFESSION_LETTER_LIST);
    }
}

const getters = {
    getIndexConfessionLetterList(state){
        return state.indexConfessionLetterList;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}