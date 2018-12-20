<template>
    <div class="container">
        <div class="user-header">
            <div class="header-avatar">
                <open-data type='userAvatarUrl'></open-data>
            </div>
            <div class="header-info">
                <div class="login-register">
                    登录/注册
                </div>
            </div>
        </div>
        <div class="user-body">
            <div class="nine-item" v-for="item of nineData" :key="item.id">
                <img :src="item.iconUrl" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
        <div class="user-footer">
            退出
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nineData: [
                {
                    id: 0,
                    name: 'Ps4',
                    iconUrl: '/static/gameicon/PS4.png'
                },
                {
                    id: 1,
                    name: 'Xbox',
                    iconUrl: '/static/gameicon/xbox.png'
                },
                {
                    id: 2,
                    name: 'Switch',
                    iconUrl: '/static/gameicon/switch.png'
                },
                {
                    id: 3,
                    name: 'Steam',
                    iconUrl: '/static/gameicon/steam.png'
                },
                {
                    id: 4,
                    name: 'Pc',
                    iconUrl: '/static/gameicon/PC.png'
                },
                {
                    id: 5,
                    name: 'Pokem',
                    iconUrl: '/static/gameicon/pokem.png'
                },
                {
                    id: 6,
                    name: 'Doudou',
                    iconUrl: '/static/gameicon/doudou.png'
                },
                {
                    id: 7,
                    name: 'Shank',
                    iconUrl: '/static/gameicon/game.png'
                },
                {
                    id: 8,
                    name: 'Dlc',
                    iconUrl: '/static/gameicon/dlc.png'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .user-header {
        width: 730rpx;
        height: 250rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10rpx;
        margin-top: 10rpx;
        border-radius: 10rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
    }
    .header-avatar {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 100rpx;
    }
    .header-info {
        margin-left: 40rpx;
        margin-top: 30rpx;
    }
    .login-register {
        font-family: 'Microsoft YaHei';
        font-size: 32rpx;
        text-align: center;
    }
    .user-body {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 720rpx;
        height: 720rpx;
        margin-left: 15rpx;
        margin-top: 20rpx;
        border-radius: 10rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
    }
    .nine-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 220rpx;
        height: 220rpx;
        margin-top: 10rpx;
    }
    .nine-item img {
        width: 100rpx;
        height: 100rpx;
    }
    .nine-item span {
        font-family: 'Microsoft YaHei';
        font-size: 26rpx;
    }
    .user-footer {
        position: absolute;
        bottom: 30rpx;
        width: 150rpx;
        height: 50rpx;
        margin-left: 275rpx;
        font-family: 'Microsoft YaHei';
        font-size: 28rpx;
        text-align: center;
        line-height: 50rpx;
        color: #B2B1B4;
        border-radius: 10rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
    }
</style>


