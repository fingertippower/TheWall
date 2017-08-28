<template>
    <div id="sendM">
        <div class="sendM-top"></div>
        <div class="sendM-container">
            <div class="sendM-way">
                <div class="sendM-select"><img src="src/assets/img/part-three/receiver.png" alt=""><span>收信件</span></div>
                <div><span>已发送</span></div>
            </div>
        </div>
        div
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/function.scss';
    html, body {
        height: 100%;
        width: 100%;
    }
    #sendM {
        .sendM-top {
            width: 100%;
            height: px2rem(108px);
            background: #F4AD12;
        }
        .sendM-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            .sendM-way {
                width: 100%;
                height: px2rem(105px);
                display: flex;
                align-items: center;
                justify-content: space-around;
                div {
                    height: px2rem(50px);
                    width: px2rem(188px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #EA4C89;
                    font-size: px2rem(40px);
                    color: #EA4C89;
                    border-radius: 8%;
                    img {
                        display: block;
                        width: px2rem(30px);
                        height: px2rem(30px);
                        margin-right: px2rem(5px);
                        background: white;
                    }
                }
                .sendM-select {
                    background: #EA4C89;
                    color: white;
                }
            }
        }
    }
    </style>