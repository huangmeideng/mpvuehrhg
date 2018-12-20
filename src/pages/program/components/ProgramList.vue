<template>
    <div class="container">
        <div class="program-list-box" v-for="(item,index) of programData" :key="index">
            <div class="list-one" @click="onJumpProgramDetail(item[0].room_id)">
                <div class="list-header">
                    <img :src="item[0].room_image" alt="">
                </div>
                <div class="list-footer">
                    <div class="list-title">
                        {{item[0].room_title}}
                    </div>
                    <div class="list-author">
                        <span>主讲人:</span>
                        <span>{{item[0].business_name}}</span>
                    </div>
                    <div class="list-views-time">
                        <div class="list-views">
                            <img :src="iconUrl" alt="">
                            <span>{{item[0].access_amount}}</span>
                        </div>
                        <div class="list-time">
                            <img :src="timeUrl" alt="">
                            <span>{{item[0].room_start_time}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-two" v-if="item[1]" @click="onJumpProgramDetail(item[1].room_id)">
                <div class="list-header">
                    <img :src="item[1].room_image" alt="">
                </div>
                <div class="list-footer">
                    <div class="list-title">
                        {{item[1].room_title}}
                    </div>
                    <div class="list-author">
                        <span>主讲人:</span>
                        <span>{{item[1].business_name}}</span>
                    </div>
                    <div class="list-views-time">
                        <div class="list-views">
                            <img :src="iconUrl" alt="">
                            <span>{{item[1].access_amount}}</span>
                        </div>
                        <div class="list-time">
                            <img :src="timeUrl" alt="">
                            <span>{{item[1].room_start_time}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgramList',
    props: ['programData'],
    data () {
        return {
            defaultImg: 'https://f.tdjin.com/live_room/default/default.png',
            iconUrl: '/static/icon/views.png',
            timeUrl: '/static/icon/time.png'
        }
    },
    methods: {
        onJumpProgramDetail(e) {
            this.$emit('listClick',e)
        }
    }
}
</script>

<style scoped>
    .program-list-box {
        display: flex;
        flex-direction: row;
        margin-top: 20rpx;
        margin-left: 20rpx;
        width: 684rpx;
        height: 400rpx;
        margin: 10rpx auto;
    }
    .list-one {
        width: 320rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
        border-radius: 10rpx;
    }
    .list-two {
        width: 320rpx;
        margin-left: 40rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
        border-radius: 10rpx;
    }
    .list-header {
        width: 300rpx;
        height: 250rpx;
        margin-top: 10rpx;
        margin-left: 10rpx;
    }
    .list-header img {
        width: 100%;
        height: 100%;
        border-radius: 5rpx;
    }
    .list-footer {
        display: flex;
        flex-direction: column;
    }
    .list-title {
        font-family: "Microsoft YaHei";
        width: 300rpx;
        font-size: 30rpx;
        margin-left: 10rpx;
        margin-top: 8rpx;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .list-author {
        font-family: "Microsoft YaHei";
        margin-left: 10rpx;
    }
    .list-author span:first-child {
        font-size: 28rpx;
        color: #f57f14;
    }
    .list-author span:last-child {
        font-size: 26rpx;
        color: #000000;
        margin-left: 20rpx;
    }
    .list-views-time {
        display: flex;
        flex-direction: row;
        font-family: "Microsoft YaHei";
        font-size: 22rpx;
        margin-left: 10rpx;
    }
    .list-views {
        display: flex;
        flex-direction: row;
    }
    .list-views img {
        width: 30rpx;
        height: 30rpx;;
    }
    .list-views span {
        margin-left: 10rpx;
        color: #000000;
    }
    .list-time {
        display: flex;
        flex-direction: row;
        margin-left: 40rpx;
    }
    .list-time img {
        width: 30rpx;
        height: 30rpx;
    }
    .list-time span {
        margin-left: 10rpx;
        color: #000000;
    }
</style>

