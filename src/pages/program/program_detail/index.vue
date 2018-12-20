<template>
    <div>
        <div class="video-box">
            <video :src="videoLink"
                    id='courseVideo'
                    muted
                    controls
                    :poster="poster"
                    :page-gesture="pageGesture"
                    :danmu-list="danmuData"
                    enable-danmu
                    danmu-btn>
            </video>
        </div>
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
import utils from "../../../utils"
import globalData from '../../../stores/globalData'
export default {
    components: {
        CommonComment
    },
    data () {
        return {
            videoLink: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
            poster: 'https://f.tdjin.com/course_goods/20180606/2945671887f481bdaeb03b47b2e533b85b177bf546c36.jpeg',
            noticeUrl: '../../../../static/icon/notice.png',
            pageGestture: true,
            scrollY: true,
            sendMessage: '',
            arrayMessage: '',
            danmuData: [
                {
                    text: '第一秒出现的弹幕',
                    color: '#68FF4F',
                    time: 1
                },
                {
                    text: '第三秒出现的弹幕',
                    color: '#32FFFE',
                    time: 3
                }
            ],
            commentData: [
                {
                    type: 1,
                    text: '这个节目非常好'
                }
            ],
            navigateTitle: ''
        }
    },
    methods: {
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
                this.videoContext.sendDanmu({
                    text: danMuMessage,
                    color: utils.getRandomColor()
                })
            }
        },
        /**
         * 获取节目详情数据
         */
        getProgramDetailData(id) {
            let that = this
            wx.request({
                url: globalData.state.programUrl + '?room_id=' + id,
                header: {
                    'content-type': 'application/json'
                },
                success (res) {
                    let result = res.data
                    if(result.status === 200) {
                        console.log(result.data)
                        that.navigateTitle = result.data.room_title
                        wx.setNavigationBarTitle({
                            title: that.navigateTitle
                        })
                    } else{
                        wx.showToast({
                            title: '服务器出错',
                            icon: 'warn',
                            duration: 5000
                        })
                    }
                }
            })
        }
    },
    mounted() {
        this.videoContext = wx.createVideoContext('courseVideo')
        console.log(this.$root.$mp.query.room_id)
        this.getProgramDetailData(this.$root.$mp.query.room_id)
    },
    /**
     * 分享
     */
    onShareAppMessage() {
        return {
            title: this.navigateTitle
        }
    }
}
</script>

<style scoped>
    .video-box {
        width: 100%;
        height: 400rpx;
    }
    .video-box video {
        width: 100%;
        height: 100%;
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



