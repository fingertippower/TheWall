import * as types from '../types'
const state={
    concern:{
        concernClick:false,
        fansClick:false
    }
};
const mutations={
    [types.CONCERN_CLICK](state){
        if(state.concern.concernClick == false){
            state.concern.concernClick = true;
            state.concern.fansClick = false
        }
    },
    [types.FANS_CLICK](state){
        if(state.concern.fansClick == false){
            state.concern.fansClick = true;
            state.concern.concernClick = false
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