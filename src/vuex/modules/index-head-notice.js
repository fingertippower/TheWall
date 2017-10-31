import * as types from '../types'
import axios from '../../fetch/api'

const state = {
    notice:""
}

const mutations = {
    [types.INDEX_NOTICE](state,res){
        state.notice = res.data;
    }
}

const actions = {
    notice({commit}){
        axios({
            method: 'get',
            url: 'webapp/flownotice',
        }).then((res)=>{
            commit(types.INDEX_NOTICE,res);
        })
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