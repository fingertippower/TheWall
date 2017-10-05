import * as types from '../types'

const state = {
    letter: [
        {
            timeMonth: "4月",
            timeDay: "00",
            letterTitle: "0表报按卡爱看",
            letterBody: "0当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        },
        {
            timeMonth: "7月",
            timeDay: "01",
            letterTitle: "1表报按卡爱看",
            letterBody: "1当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        },
        {
            timeMonth: "7月",
            timeDay: "02",
            letterTitle: "2表报按卡爱看",
            letterBody: "2当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        },
        {
            timeMonth: "7月",
            timeDay: "03",
            letterTitle: "3表报按卡爱看",
            letterBody: "3当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        },
        {
            timeMonth: "7月",
            timeDay: "04",
            letterTitle: "4表报按卡爱看",
            letterBody: "4当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        },
        {
            timeMonth: "7月",
            timeDay: "05",
            letterTitle: "5表报按卡爱看",
            letterBody: "5当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        },
        {
            timeMonth: "7月",
            timeDay: "06",
            letterTitle: "6表报按卡爱看",
            letterBody: "6当你看到这封情书时，可以告诉你的是，我已经喜欢你很久了。" +
            "至于为什么喜欢你，这个问题我沉思了很久，最终我也想不清楚.也许是那一刻你的回眸一笑，" +
            "也许是与你擦身而过时无意间嗅到的你的芳香，" +
            "也许是你优雅且淑女的气质，也许就是那一刻的心动，于是，我便喜欢上你了。"
        }
    ],
    letterIndex: 0,//相应日期下的信件的索引，信件的主体会根据这个索引获取对应的信息信息
    letterTitle: "",
    letterBody: "",
    letterGet:[
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
        {
            letterTitle:"这是一个新的表白",
            letterDate:"2017.12.4"
        },
    ],
    letterGetPersonalMsg:[
        {
            personalImg:"/src/assets/img/head.png",
            username: "你说的血蔷薇",
            gender: "女",
            name: "王涛",
            phone: "18846927777",
            college: "数据科学与技术学院",
            grade: "2015"
        }
    ],
    letterMsg:[
        {
            letterTitle:"这是我对你的真心",
            letterBody:"论文是科学或者社会研究工作者在学术书籍或学术期刊上刊登的呈现自己研究成果的文章。"
            +"论文往往强调原创性的工作总结，但当然也可以是对前人工作总结的回顾及做出评价，"
            +"后者也往往被称为综述性文章（Review）。论文的出版正在经历着重大变化，"
            +"出现了从传统的印刷版到网络上电子格式的兴起。"
            +"论文就是用来进行科学研究和描述科研成果的文章，简称之为论文。"
            +"它既是探讨问题进行科学研究的一种手段，又是描述科研成果进行学术交流的一种工具。"
            +"它包括学年论文、毕业论文、学位论文、科技论文、成果论文等，总称为论文。",
            letterAuthor:"你说的",
            letterDate:"2015.6.6",
            confessionLetterImg1: "/src/assets/img/coment/1.jpg",
            confessionLetterImg2: "/src/assets/img/coment/4.jpg",
            confessionLetterImg3: "/src/assets/img/coment/3.jpg",
            confessionLetterImg4: "/src/assets/img/coment/1.jpg",
            confessionLetterImg5: "/src/assets/img/coment/4.jpg",
            confessionLetterImg6: "/src/assets/img/coment/3.jpg",
            confessionLetterImg7: "",
            confessionLetterImg8: "",
            confessionLetterImg9: "",
        }
    ]
}

const mutations = {
    //用户点击时间轴上面的任何一个时间就会在下面读取到相应信件的信息，现获取用户点击的时间的index值然后获取
    //state中letter对象中对应index下的信件标题和内容，并且用户点击的那个时间背景会变颜色，并将以往点过的时间的背景颜色变为白色。
    [types.LETTER_MSG](state,index){
        state.letterIndex = index;
        state.letterTitle = state.letter[index].letterTitle;
        state.letterBody = state.letter[index].letterBody;
        let bgcolor = document.getElementsByClassName('time-box');
        bgcolor[index].style.backgroundColor = "rgba(255,118,119,1)";
        for(let i=0; i<state.letter.length; i++){
            if(i != index){
                bgcolor[i].style.backgroundColor = "#fff";
            }
        }
    },
    /**
    *用户点击信息主体左侧的按钮事件，也就是看上一个信件的事件，
    *用户点击的时候先判断state中的letterIndex的值（如果是0，就没有必要操作因此才会判断），
    *因为当用户多次点击下一个的时候letterIndex增加后的值会等于state.letter.length，此时需要减去2，
    *因为不减会出现用户点击两次才会看上一个信件的Bug
    *后面就是用户点击上一个信件的按钮下面的信件内容会根据index值去查找对应的信件内容，同时上面的时间轴会随着走动
    * */
    [types.LETTER_INDEX_PREVIOUS](state){
        if(state.letterIndex > 0){
            if(state.letterIndex == state.letter.length){
                state.letterIndex = state.letter.length - 2;
            }else{
                state.letterIndex = state.letterIndex - 1;
            }
            let bgcolor = document.getElementsByClassName('time-box');
            let timeLi = document.getElementsByClassName('time-li');
            state.letterTitle = state.letter[state.letterIndex].letterTitle;
            state.letterBody = state.letter[state.letterIndex].letterBody;
            bgcolor[state.letterIndex+1].style.backgroundColor = "#fff";
            bgcolor[state.letterIndex].style.backgroundColor = "rgba(255,118,119,1)";
            //scrollIntoView()这个方法是为了让走动的li始终在页面的可视区域中。
            timeLi[state.letterIndex].scrollIntoView(true);

        }else{
            state.letterIndex = 0;
        }
    },
    /**
     * 用户点击信件主体右侧的按钮的事件，也就是看下一个信件的事件
     * 用户点击的时候先判断index的值是否小于state.letter.length
     * 因为超过的话就需要等于其长度
     * 下面一个if判断的是index等于state.letter.length时，这么处理是在等于的时候不会因为index值的增加
     * 而使得最后一个日期的颜色被去掉
     * 下面就是对应索引值去获取相应信件的内容
     * */
    [types.LETTER_INDEX_NEXT](state){
        if(state.letterIndex < state.letter.length){
            state.letterIndex = state.letterIndex + 1;
            let bgcolor = document.getElementsByClassName('time-box');
            let timeLi = document.getElementsByClassName('time-li');
            if(state.letterIndex == state.letter.length){
                bgcolor[state.letterIndex-2].style.backgroundColor = "#fff";
                bgcolor[state.letterIndex-1].style.backgroundColor = "rgba(255,118,119,1)";
            }else {
                bgcolor[state.letterIndex - 1].style.backgroundColor = "#fff";
                bgcolor[state.letterIndex].style.backgroundColor = "rgba(255,118,119,1)";
                state.letterTitle = state.letter[state.letterIndex].letterTitle;
                state.letterBody = state.letter[state.letterIndex].letterBody;
                timeLi[state.letterIndex].scrollIntoView(true);
            }
        }else{
            state.letterIndex = state.letter.length;
        }
    },
    //在页面刚刚创建的时候将后台的第一个信件的标题和信息内容赋值给state.letterTitle
    //并且在页面创建的时候第一个li的背景变颜色
    [types.GET_LETTER_MSG](state){
        state.letterTitle = state.letter[0].letterTitle;
        state.letterBody = state.letter[0].letterBody;
        let bgcolor = document.getElementsByClassName('time-box');
        bgcolor[0].style.backgroundColor = "rgba(255,118,119,1)";
    }
}

const actions = {
    //用户点击相应日期然后信件主体显示相应信件信息的事件
    readLetter({commit},index){
        commit(types.LETTER_MSG,index)
    },
    //用户点击上一个信件的事件
    previous({commit}){
        commit(types.LETTER_INDEX_PREVIOUS)
    },
    //用户点击下一个信件的事件
    next({commit}){
        commit(types.LETTER_INDEX_NEXT)
    },
    //在页面刚刚创建的时候将后台的信件中的第一个数据赋值给state中对应的值，以免页面刚刚创建的时候信息体是空的
    //并且在页面创建的时候第一个li的背景变颜色
    getLetterMsg({commit}){
        commit(types.GET_LETTER_MSG)
    }
}

const getters = {
    letterMsg(state){
        return state.letter;
    },
    letterTitle(state){
        return state.letterTitle;

    },
    letterBody(state){
        return state.letterBody;
    },
    getLetterList(state){
        return state.letterGet;
    },
    getLetterPersonMsg(state){
        return state.letterGetPersonalMsg;
    },
    getLetterMsg(state){
        return state.letterMsg;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}