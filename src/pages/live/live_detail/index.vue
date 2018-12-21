<template>
    <div class="container">
        <live-player class="live-video" src="rtmp://live.hkstv.hk.lxdns.com/live/hks2" mode="RTC" autoplay  @statechange="statechange" @error="error" />
        <div class="video-notice">
            <div class="notice-icon">
                <img :src="noticeUrl" alt="">
            </div>
            <div class="notice-text">
                这是公告内容哦，哈哈哈!!!
            </div>
        </div>
        <div class="video-danmu-list">
            <scroll-view class="scroll-views" :scroll-y="scrollY">
                <common-comment :commentData="commentData"></common-comment>
            </scroll-view>
        </div>
        <div class="video-danmu-commit">
            <input type="text" placeholder="给视频加点料吧" v-model="sendMessage">
            <div @click="onSendDanMu">发送</div>
        </div>
    </div>
</template>

<script>
import CommonComment from "@/components/CommonComment"
import globalData from '../../../stores/globalData'
export default {
    components: {
        CommonComment
    },
    data () {
        return {
            noticeUrl: '../../../../static/icon/notice.png',
            scrollY: true,
            sendMessage: '',
            arrayMessage: '',
            commentData: [
                {
                    type: 1,
                    text: '这门课程非常好'
                }
            ],
            liveDetailData: []
        }
    },
    methods: {
        statechange(e) {
            console.log('live-player code:', e.detail.code)
        },
        error(e) {
            console.error('live-player error:', e.mp.detail.errMsg)
        },
        onSendDanMu(e) {
            if(this.sendMessage === '') {
                wx.showToast({
                    title: '请输入内容',
                    icon: 'warn',
                    duration: 2000
                })
            } else{
                let danMuMessage = this.sendMessage
                this.sendMessage = ''
                this.arrayMessage = danMuMessage
                let itemData = {
                    type: 2,
                    text: danMuMessage
                }
                this.commentData.push(itemData)
            }
        },
        getLiveDetailData(id) {
            let that = this
            wx.request({
                url: globalData.state.programUrl + '?room_play_state=1&room_id=' + id,
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let result = res.data
                    if(result.status === 200){
                        that.liveDetailData = result.data
                        wx.setNavigationBarTitle({
                            title: that.liveDetailData.room_title
                        })
                    } else{
                        wx.showToast({
                            title: '服务器出错',
                            icon: 'warn',
                            duration: 2000
                        })
                    }
                }
            })
        }
    },
    mounted() {
        this.getLiveDetailData(this.$root.$mp.query.room_id)
        console.log(this.$root.$mp.query.room_id)
    },
    onShareAppMessage() {
        return {
            title: this.liveDetailData.room_title
        }
    }
}
</script>

<style scoped>
    .live-video {
        width: 100%;
        height: 450rpx;
    }
    .video-notice {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50rpx;
        align-items: center;
        background-color: #C8513E;
    }
    .notice-icon {
        width: 40rpx;
        height: 40rpx;
        margin-left: 40rpx;
    }
    .notice-icon img {
        width: 100%;
        height: 100%;
    }
    .notice-text {
        color: #ffffff;
        line-height: 50rpx;
        font-size: 24rpx;
        margin-left: 30rpx;
    }
        .video-danmu-list {
        background-color: #ffffff;
        height: 680rpx;
        border-bottom: 1rpx solid #C8513E;
    }
    .scroll-views {
        height: 100%;
    }
    .video-danmu-commit {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 70rpx;
        border: 1rpx solid #F5F4F4;
        background-color: #ffffff;
    }
    .video-danmu-commit input {
        background-color: #F5F4F4;
        height: 60rpx;
        width: 500rpx;
        border-radius: 40rpx;
        margin-left: 40rpx;
        font-family: 'Microsoft YaHei';
        font-size: 24rpx;
        text-align: center;
    }
    .video-danmu-commit div {
        margin-left: 20rpx;
        height: 46rpx;
        width: 110rpx;
        border-radius: 10rpx;
        text-align: center;
        background-color: #C8513E;
        line-height: 46rpx;
        color: #ffffff;
        font-family: 'Microsoft YaHei';
        font-size: 28rpx;
    }
</style>