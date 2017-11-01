import axios from '../../fetch/api'
import * as types from '../types'

const state={
    schoolfellowList:[
        {
            schoolfellowImg:"/src/assets/img/head.png",
            schoolfellowName:'啦啦啦'
        },
        {
            schoolfellowImg:'/src/assets/img/head.png',
            schoolfellowName:'哈哈哈'
        },
        {
            schoolfellowImg:"/src/assets/img/head.png",
            schoolfellowName:'啦啦啦'
        },
        {
            schoolfellowImg:'/src/assets/img/head.png',
            schoolfellowName:'哈哈哈'
        },
        {
            schoolfellowImg:"/src/assets/img/head.png",
            schoolfellowName:'啦啦啦'
        },
        {
            schoolfellowImg:'/src/assets/img/head.png',
            schoolfellowName:'哈哈哈'
        },
        {
            schoolfellowImg:"/src/assets/img/head.png",
            schoolfellowName:'啦啦啦'
        },
        {
            schoolfellowImg:'/src/assets/img/head.png',
            schoolfellowName:'哈哈哈'
        },
        {
            schoolfellowImg:"/src/assets/img/head.png",
            schoolfellowName:'啦啦啦'
        },
        {
            schoolfellowImg:'/src/assets/img/head.png',
            schoolfellowName:'哈哈哈'
        },
        {
            schoolfellowImg:"/src/assets/img/head.png",
            schoolfellowName:'啦啦啦'
        },
        {
            schoolfellowImg:'/src/assets/img/head.png',
            schoolfellowName:'哈哈哈'
        }
    ]
};

const mutations={
    [types.GET_SCHOOLFELLOW_LIST](state,res){
        let arr = state.schoolfellowList.concat(res.data);
        state.schoolfellowList= arr;
    }
};

const actions={
    getSchoolfellowList({commit,state}){
        axios({
            method:'get',
            url:''
        }).then((res)=>{
            commit(types.GET_SCHOOLFELLOW_LIST,res)
        })
    }
};

const getters={
    getSchoolfellowList(state){
        return state.schoolfellowList;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
