<template>
    <div class="container">
        <div class="live-box" 
            v-for="item of liveData" 
            :key="item.room_id" 
            :style="{backgroundImage: 'url(' + item.room_image +')',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%;'}"
            @click="onJumpLiveDetail(item.room_id)">
            <div class="live-title">
                {{item.room_belong}}
            </div>
            <img class="live-play" :src="playIcon" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['liveData'],
    name: 'LiveList',
    data() {
        return {
            playIcon: '/static/icon/play.png'
        }
    },
    methods: {
        onJumpLiveDetail(id) {
            this.$emit('jumpLiveDetail',id)
        }
    },
}
</script>

<style scoped>
    .live-box {
        width: 700rpx;
        height: 400rpx;
        margin-top: 20rpx;
        margin-left: 25rpx;
        border-radius: 10rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
    }
    .live-title {
        position: absolute;
        margin-top: 10rpx;
        margin-left: 10rpx;
        font-family: 'Microsoft YaHei';
        font-size: 30rpx;
        color: #FFFFFF;
    }
    .live-play {
        position: absolute;
        margin-top: 120rpx;
        margin-left: 290rpx;
        width: 120rpx;
        height: 120rpx;
    }
</style>


