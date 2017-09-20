import axios from 'axios'
import qs from 'qs'
/*
 * 此页面是对于axios的配置
 * */
//axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://192.168.223.1:8080';
//axios.defaults.withCredentials = true;

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    // _.toast("错误的传参");
    alert("错误的传参");
    return Promise.reject(error);
});

//code状态码200判断
axios.interceptors.response.use((res) =>{
    if(res.data.code == '200'){
        // _.toast(res.data.msg);
        alert(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    // _.toast("网络异常");
    // alert("网络异常");
    return Promise.reject(error);
});

export default axios;
