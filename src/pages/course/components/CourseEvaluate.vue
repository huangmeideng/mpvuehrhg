<template>
    <div>
        <div class="evaluate-box" v-for="(item,index) of evaluateNum" :key="index">
            <div class="evaluate-left">
                <img src="https://f.tdjin.com/ucenter/46215/avatar/avatar.jpeg?1540486246" alt="">
            </div>
            <div class="evaluate-right">
                <div class="evaluate-name">
                    Kinano
                </div>
                <div class="evaluate-content">
                    我是小程序测试评论数据哦哦哦哦哦
                </div>
                <div class="evaluate-time">
                    10-25 16:06
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseEvaluate',
    props: ['evaluateData'],
    data () {
        return {
            evaluateNum: 12
        }
    }
}
</script>

<style scoped>
    .evaluate-box {
        display: flex;
        flex-direction: row;
        border-bottom: 1rpx solid #D0D0D7;
        align-items: center;
    }
    .evaluate-left {
        width: 80rpx;
        height: 80rpx;
        margin-left: 10rpx;
    }
    .evaluate-left img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .evaluate-right {
        display: flex;
        flex-direction: column;
        margin-left: 10rpx;
    }
    .evaluate-name {
        margin-left: 10rpx;
        font-family: "Microsoft YaHei";
        font-size: 28rpx;
        color: #13BDEC;
    }
    .evaluate-content {
        font-family: "Microsoft YaHei";
        font-size: 30rpx;
    }
    .evaluate-time {
        margin-left: 10rpx;
        font-family: "Microsoft YaHei";
        font-size: 24rpx;
    }
</style>
