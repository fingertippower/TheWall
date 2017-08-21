import * as types from '../types'
//state里面保存了一个indexfoot数组，数组中是indexFoot图片个文字效果的值
const state = {
    indexFoot:{
        letterLogoImg:false,
        letterMsg:false,
        letterImg:true,
        indexLogoImg:true,
        indexMsg:true,
        indexImg:false,
        personalLogoImg:false,
        personalMsg:false,
        personalImg:true
    }
}

const mutations = {
    //此事件是当用户点击信箱按钮的时候其余两个图表不动并且隐藏文字，而信箱logo上升，显示文字
    [types.LETTER_DISPLAY](state){
        if(state.indexFoot.letterLogoImg == false){
            state.indexFoot.letterLogoImg = true,
            state.indexFoot.letterMsg = true,
            state.indexFoot.letterImg = false,
            state.indexFoot.indexLogoImg =false,
            state.indexFoot.indexMsg = false,
            state.indexFoot.indexImg = true,
            state.indexFoot.personalLogoImg =false,
            state.indexFoot.personalMsg = false,
            state.indexFoot.personalImg = true
        }
    },
    //此事件是当用户点击主页的按钮之后，主页logo上升，显示文字，而其余两个logo不动且文字隐藏
    [types.INDEX_DISPLAY](state){
        if(state.indexFoot.indexLogoImg == false){
            state.indexFoot.letterLogoImg = false,
            state.indexFoot.letterMsg = false,
            state.indexFoot.letterImg = true,
            state.indexFoot.indexLogoImg =true,
            state.indexFoot.indexMsg = true,
            state.indexFoot.indexImg = false,
            state.indexFoot.personalLogoImg =false,
            state.indexFoot.personalMsg = false,
            state.indexFoot.personalImg = true
        }
    },
    //此事件是当用户点击个人中心页面以后，logo上升显示文字，其余两个logo不动文字隐藏
    [types.PERSONAL_DISPLAY](state){
        if(state.indexFoot.personalLogoImg == false){
            state.indexFoot.letterLogoImg = false,
            state.indexFoot.letterMsg = false,
            state.indexFoot.letterImg = true,
            state.indexFoot.indexLogoImg =false,
            state.indexFoot.indexMsg = false,
            state.indexFoot.indexImg = true,
            state.indexFoot.personalLogoImg =true,
            state.indexFoot.personalMsg = true,
            state.indexFoot.personalImg = false
        }
    }
}

const actions = {
    letterDisplay({commit}){
        commit(types.LETTER_DISPLAY);
    },
    indexDisplay({commit}){
        commit(types.INDEX_DISPLAY);
    },
    personalDisplay({commit}){
        commit(types.PERSONAL_DISPLAY);
    }
}

const getters = {
    //直接将state中的indexFoot数组返回，页面调用数组中相应的值
    display(state){
        return state.indexFoot;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}