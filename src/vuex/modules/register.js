import axios from '../../fetch/api'
import * as types from '../types'

const state={

};

const mutations={
    [types.REGISTER](state,register){
        let phone=document.getElementsByClassName('phone');
        let password=document.getElementsByClassName('password');
    }
};

const actions={
    register({commit},register){
        commit(types.REGISTER,register);
    },
};

const getters={

};

export default {
    state,
    mutations,
    actions,
    getters
}