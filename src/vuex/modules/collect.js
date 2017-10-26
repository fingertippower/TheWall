import axios from '../../fetch/api'
import * as types from '../types'

const state={
    collectList:[
        {
            collectTitle:'五点二十分中央大街',
            collectText:'修订版市场部被称，为难吃武功长鼻王建安成本卡不与。',
            collectTime:'2017-08-18',
            collectImg:"/src/assets/img/background.png"
        },
        {
            collectTitle:'五点二十分中央大街',
            collectText:'修订版市场部被称，为难吃武功长鼻王建安成本卡不与。',
            collectTime:'2017-08-18',
            collectImg:"/src/assets/img/background.png"
        },
        {
            collectTitle:'五点二十分中央大街',
            collectText:'修订版市场部被称，为难吃武功长鼻王建安成本卡不与。',
            collectTime:'2017-08-18',
            collectImg:"/src/assets/img/background.png"
        }
    ]
};

const mutations={

};

const actions={
    getCollectList({commit,state}){
        axios({
            method:'get',
            url:'',
        }).then((res)=>{
            commit(types.GET_COLLECT_LIST,res);
        })
    }
};

const getters={
    getCollectList(state){
        return state.collectList;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}