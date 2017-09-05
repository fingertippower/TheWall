import * as types from '../types'

const state = {

}

const mutations = {
    [types.LETTER_GET_BUTTON_STYLE](){
        let getBgcolor = document.getElementsByClassName('getLetter');
        let sendBgcolor = document.getElementsByClassName('putLetter');
        getBgcolor[0].style.backgroundColor = "rgba(234,76,137,1)";
        getBgcolor[0].style.color = "#fff";
        sendBgcolor[0].style.backgroundColor = "#fff";
        sendBgcolor[0].style.color = "rgba(234,76,137,1)";
    },
    [types.LETTER_SEND_BUTTON_STYLE](){
        let getBgcolor = document.getElementsByClassName('getLetter');
        let sendBgcolor = document.getElementsByClassName('putLetter');
        getBgcolor[0].style.backgroundColor = "#fff";
        getBgcolor[0].style.color = "rgba(234,76,137,1)";
        sendBgcolor[0].style.backgroundColor = "rgba(234,76,137,1)";
        sendBgcolor[0].style.color = "#fff";
    }
}

const actions = {
    letterGetStyle:function({commit}){
        commit(types.LETTER_GET_BUTTON_STYLE);
    },
    letterPutStyle:function({commit}){
        commit(types.LETTER_SEND_BUTTON_STYLE);
    }
}

const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}