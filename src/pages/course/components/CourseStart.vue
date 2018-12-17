<template>
    <div>
        <div class="start-box">
            <div class="start-item" v-for="(item,index) of starts" :key="index">
                <img :src="item===1?startUrl:startNoUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseStart',
    props: ['starts'],
    data () {
        return {
            startUrl: '/static/icon/start.png',
            startNoUrl: '/static/icon/start_no.png',
        }
    }
}
</script>

<style scoped>
    .start-box {
        display: flex;
        flex-direction: row;
        margin-left: 60rpx;
        margin-top: 10rpx;
    }
    .start-item {
        width: 40rpx;
        height: 40rpx;
    }
    .start-item img {
        width: 100%;
        height: 100%;
    }
</style>