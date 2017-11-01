const state={

};

const mutations={

};

const actions={
    save1:function({}) {
        let s=document.getElementById('school').value;
        let a=document.getElementById('academy').value;
        let m=document.getElementById('major').value;
        let g=document.getElementById('grade').value;
        let c=document.getElementById('class').value;
        console.log(s,a,m,g,c);
    }
};

const getters={

};

export default {
    state,
    mutations,
    actions,
    getters
}