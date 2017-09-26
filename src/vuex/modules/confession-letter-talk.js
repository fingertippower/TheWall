import * as types from '../types'

const state = {
    talkList:[
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
        {
            personalHeadImg:"/src/assets/img/head.png",
            personalNickname:"已经回不去",
            talkMsg:"这句话说的，已下载就说到了电子上去了字的萨科简单。"
        },
    ]
}

const mutations = {

}

const actions = {

}

const getters = {
    getTalkMsg(state){
        return state.talkList;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}