const state={

};

const mutations={

};

const actions={
    register:function({}) {
        let p1=document.getElementById('inputPhone').value;
        let p2=document.getElementById('inputPassword').value;
        let length=p1.length;
        if(length==11&&/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(p1)){
            console.log(p1,p2);
        }else{
            alert('请输入正确的手机号');
        }
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
