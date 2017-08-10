<template>
    <div class="headNavigation">
        <ul class="headNavigationUl">
            <li class="headNavigationLi">
                <div class="headNavigationBtn">
                    <img class="headNavigationImg" src="../assets/img/headNavigationBtn.png">
                    <span class="headNavigationMsg">毕业季</span>
                </div>
            </li>
            <li class="headNavigationLi interval">
                <div class="headNavigationBtn">
                    <img class="headNavigationImg" src="../assets/img/headNavigationBtn.png">
                    <span class="headNavigationMsg">表白墙</span>
                </div>
            </li>
            <li class="headNavigationLi">
                <div class="headNavigationBtn">
                    <img class="headNavigationImg" src="../assets/img/headNavigationBtn.png">
                    <span class="headNavigationMsg">吐槽</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .interval{
        margin: 0 10%;
    }
    .headNavigation{
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        margin-top: px2rem(122px);
        background-color: antiquewhite;
    }
    .headNavigationUl{
        width: 100%;
        height: px2rem(94px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .headNavigationLi{
        float: left;
    }
    .headNavigationBtn{
        width: px2rem(135px);
        height: px2rem(38px);
        border: 1px solid #fff;
        border-radius: px2rem(10px);
        color: #fff;
        text-align: center;
    }
    .headNavigationImg{
        margin-top: px2rem(2px);
        width: px2rem(33px);
        height: px2rem(33px);
    }
    .headNavigationMsg{
        position: relative;
        top: px2rem(-6px);
    }
</style>