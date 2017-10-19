import Vue from 'vue'
import Vuex from 'vuex'
import IndexFoot from './modules/indexFoot'
import SendLetter from './modules/send-letter'
import LetterHeadStyle from './modules/letter-head-style'
import IndexConfessionLetterList from './modules/index-confession-letter-list'
import IndexHeadNotice from './modules/index-head-notice'
import WriteLetter from './modules/write-letter'
import Register from './modules/register'
import Collect from './modules/collect'

Vue.use(Vuex);
//这里并没有把所有的vuex里面的内容写在一起，因为那样显得很乱，而是把不同页面的放在了一起最后暴露出去
export default new Vuex.Store({
    modules:{
        IndexFoot,
        SendLetter,
        LetterHeadStyle,
        IndexConfessionLetterList,
        IndexHeadNotice,
        WriteLetter,
        Register,
        Collect
    }
})