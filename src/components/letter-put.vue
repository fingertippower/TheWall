<template>
    <div class="letter-put">
        <div class="time">
            <ul class="time-ul">
                <li class="time-li">1</li>
                <li class="time-li">2</li>
                <li class="time-li">3</li>
                <li class="time-li">4</li>
                <li class="time-li">4</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @import '../assets/css/function.scss';
    .letter-put{
        width: 100%;
        .time{
            width: 100%;
            height: px2rem(86px);
            border-top: 1px solid rgba(254,182,32,1);
            .time-ul{
                width: 100%;
                display: inline;
                white-space: nowrap;
                overflow-x:scroll;
                float:left;
                overflow-y:hidden;
                .time-li{
                    text-align: center;
                    width: 25%;
                    height: px2rem(86px);
                    display:inline-block;
                }
            }
        }
    }
</style>