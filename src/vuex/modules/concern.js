import * as types from '../types'
//state里面保存了一个concern数组，数组中是concern效果的值
const state={
    concern:{
        concernColor:false,
        fansColor:false
    }
};
const mutations={
    //此事件是当用户点击关注按钮的时候粉丝图标不动，而关注按钮字体颜色改变，并且关注按钮出现下边框
    [types.CONCERN_CLICK](state){
        if(state.concern.concernColor == false){
            state.concern.concernColor = true;
            state.concern.fansColor = false
        }
    },
    //此事件是当用户点击粉丝按钮的时候关注图标不动，而粉丝按钮字体颜色改变，并且粉丝按钮出现下边框
    [types.FANS_CLICK](state){
        if(state.concern.fansColor == false){
            state.concern.fansColor = true;
            state.concern.concernColor = false
        }
    }
};
const actions={
    concernClick({commit}){
        commit(types.CONCERN_CLICK);
    },
    fansClick({commit}){
        commit(types.FANS_CLICK);
    }
};
const getters={
    //直接将state中的concern数组返回，页面调用数组中相应的值
    click(state){
        return state.concern;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}