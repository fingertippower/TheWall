import * as types from '../types'

const state = {

}

const mutations = {

}

const actions = {
    //发送信件页面，将用户从手机选择的图片大于1M的压缩，小于1M的不变，最后预览图片，发送给后台Base64的数据
    getImg({commit},index){
        var input = document.getElementsByClassName('file');
        var img = document.getElementsByClassName('img');
        input[index].onchange = function(){
            var file = this.files[0];
            var fileType = file.type;
            if(fileType.indexOf("image") >= 0){
                if(!!file){
                    //读取本地文件，以gbk编码方式输出
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(){
                        //读取完毕后输出结果
                        //img.src = this.result;
                        if(file.size > 1048576){
                            var Img = new Image();
                            var dataURL;
                            Img.src=this.result;
                            Img.onload=function(){ //要先确保图片完整获取到，这是个异步事件
                                var canvas = document.createElement("canvas"), //创建canvas元素
                                    width=Img.width, //确保canvas的尺寸和图片一样
                                    height=Img.height;
                                canvas.width=width;
                                canvas.height=height;
                                canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
                                dataURL=canvas.toDataURL('image/jpeg',0.5); //转换图片为dataURL
                                img[index].src = dataURL;
                            }
                        }else{
                            img[index].src = this.result;
                        }
                    }
                }
            }else{
                alert("您选择的不是图片");
            }
        }
    }
}

const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}