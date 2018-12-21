<template>
    <div class="container">
        <div class="null-box">
            <img :src="iconUrl" alt="">
            <div>{{nullText}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonNull',
    props: ['nullText'],
    data() {
        return {
            iconUrl: '/static/icon/null.png'
        }
    },
}
</script>

<style scoped>
    .null-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .null-box img {
        margin-top: 400rpx;
        width: 100rpx;
        height: 100rpx;
    }
    .null-box div {
        margin-top: 40rpx;
        font-family: 'Microsoft YaHei';
        font-size: 30rpx;
        color: #C1BFC3;
    }
</style>


