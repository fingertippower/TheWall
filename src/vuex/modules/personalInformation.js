const state={

};

const mutations={

};

const actions={
    save:function({}) {
        let n=document.getElementById('name').value;
        let g=document.getElementById('gender').value;
        let b=document.getElementById('birthday').value;
        let h=document.getElementById('hometown').value;
        let e=document.getElementById('email').value;
        console.log(n,g,b,h,e);
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
