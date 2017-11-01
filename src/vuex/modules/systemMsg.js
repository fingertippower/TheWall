import axios from '../../fetch/api'
import * as types from '../types'

const state={
    systemMsgList:[
        {
            systemMsgTitle:'五点二十分中央大街',
            systemMsgText:'修订版市场部被称，为难吃武功长鼻王建安成本卡不与。',
            systemMsgTime:'2017-08-18',
        }
    ]
};

const mutations={
    [types.GET_SYSTEM_MSG_LIST](state,res){
        let arr = state.systemMsgList.concat(res.data);
        state.systemMsgList = arr;
    }
};

const actions={
    /*getSystemMsgList({commit,state}){
        axios({
            method:'get',
            url:'',
        }).then((res)=>{
            commit(types.GET_SYSTEM_MSG_LIST,res);
        })
    }*/
};

const getters={
    getSystemMsgList(state){
        return state.systemMsgList;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
