<template>
    <div>
        <div class="comment-list" v-for="(item,index) of commentData" :key="index">
            <div class="comment-other" v-if="item.type == 1">
                <div class="other-avatar">
                    <img src="https://f.tdjin.com/ucenter/46279/avatar/avatar.png?1542076617" alt="">
                </div>
                <div class="other-text">
                    {{item.text}}
                </div>
            </div>
            <div class="comment-me" v-if="item.type == 2">
                <div class="me-avatar">
                    <img src="https://f.tdjin.com/ucenter/46215/avatar/avatar.jpeg?1540486246" alt="">
                </div>
                <div class="me-text">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonComment',
    props: ['commentData'],
    data() {
        return {
            localData: [
                {
                    id: 0,
                    type: 1,
                    text: '其他人发的弹幕1'
                },
                {
                    id: 1,
                    type: 1,
                    text: '其他人发的弹幕2'
                },
                {
                    id: 2,
                    type: 2,
                    text: '自己发的弹幕1'
                },
                {
                    id: 3,
                    type: 1,
                    text: '其他人发的弹幕3'
                },
                {
                    id: 4,
                    type: 2,
                    text: '自己发的弹幕2'
                },
                {
                    id: 5,
                    type: 2,
                    text: '自己发的弹幕3'
                },
                {
                    id: 6,
                    type: 1,
                    text: '其他人发的弹幕1'
                },
                {
                    id: 7,
                    type: 1,
                    text: '其他人发的弹幕2'
                },
                {
                    id: 8,
                    type: 2,
                    text: '自己发的弹幕1'
                },
                {
                    id: 9,
                    type: 1,
                    text: '其他人发的弹幕3'
                },
                {
                    id: 10,
                    type: 2,
                    text: '自己发的弹幕2'
                },
                {
                    id: 11,
                    type: 2,
                    text: '自己发的弹幕3'
                },
                {
                    id: 12,
                    type: 1,
                    text: '其他人发的弹幕1'
                },
                {
                    id: 13,
                    type: 1,
                    text: '其他人发的弹幕2'
                },
                {
                    id: 14,
                    type: 2,
                    text: '自己发的弹幕1'
                },
                {
                    id: 15,
                    type: 1,
                    text: '其他人发的弹幕3'
                },
                {
                    id: 16,
                    type: 2,
                    text: '自己发的弹幕2'
                },
                {
                    id: 17,
                    type: 2,
                    text: '自己发的弹幕3'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .comment-other {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10rpx;
    }
    .other-avatar {
        width: 70rpx;
        height: 70rpx;
        margin-left: 10rpx;
    }
    .other-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .other-text {
        margin-left: 10rpx;
        width: 250rpx;
        color: #ffffff;
        background-color: #43A0C8;
        border-radius: 6rpx;
        line-height: 46rpx;
        font-family: "Microsoft YaHei";
        font-size: 24rpx;
        text-align: center;
        padding: 4rpx;
    }
    .comment-me {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        margin-top: 10rpx;
    }
    .me-avatar {
        width: 70rpx;
        height: 70rpx;
        margin-right: 10rpx;
    }
    .me-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .me-text {
        margin-right: 10rpx;
        width: 250rpx;
        color: #ffffff;
        background-color: #D9690F;
        border-radius: 6rpx;
        line-height: 46rpx;
        font-family: "Microsoft YaHei";
        font-size: 24rpx;
        text-align: center;
        padding: 4rpx;
    }
</style>

