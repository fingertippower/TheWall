import Vue from 'vue'
import Vuex from 'vuex'
import IndexFoot from './modules/indexFoot'
import Concern from './modules/concern'
import SendLetter from './modules/send-letter'

Vue.use(Vuex);
//这里并没有把所有的vuex里面的内容写在一起，因为那样显得很乱，而是把不同页面的放在了一起最后暴露出去
export default new Vuex.Store({
    modules:{
        IndexFoot,
        Concern,
        SendLetter
    }
})