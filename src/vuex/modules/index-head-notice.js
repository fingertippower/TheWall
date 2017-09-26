import * as types from '../types'

const state = {
    notice:"这是一个表白成功的例子"
}

const mutations = {
    [types.INDEX_NOTICE](state){
        state.notice += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        state.notice += "这又是一个表白成功的例子"
    }
}

const actions = {
    notice({commit}){
        commit(types.INDEX_NOTICE);
    }
}

const getters = {
    getNotice(state){
        return state.notice;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}