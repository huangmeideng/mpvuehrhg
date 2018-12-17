<template>
    <div>
        <div class="container" v-for="item of courseData" :key="item.goods_id" @click="onClickCourse(item.goods_id)">
            <div class="course-image">
                <img :src="item.goods_image" alt="">
            </div>
            <div class="course-content">
                <div class="content-top">
                    <span>{{item.goods_name}}</span>
                </div>
                <div class="content-footer">
                    <div class="footer-date">
                        <span>2018-08-08</span>
                    </div>
                    <div class="footer-button" @click.stop="onConsultCourse">
                        <span>咨询</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['courseData'],
    name: "CourseList",
    data () {
        return {

        }
    },
    methods: {
        onClickCourse(id) {
            this.$emit('click',id)
        },
        onConsultCourse() {
            this.$emit('consult')
        }
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: row;
        width: 720rpx;
        height: 164rpx;
        margin-bottom: 20rpx;
        margin-left: 12rpx;
        box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.2), 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.19);
    }
    .course-image {
        margin-top: 5rpx;
        margin-left: 4rpx;
        width: 200rpx;
        height: 155rpx; 
        border-radius: 10rpx;
    }
    .course-image img {
        width: 100%;
        height: 100%;
    }
    .course-content {
        margin-left: 20rpx;
        font-family: "Microsoft YaHei";
    }
    .content-top {
        margin-top: 4rpx;
        height: 50rpx;
    }
    .content-top span {
        font-size: 26rpx;
        font-weight: bold;
    }
    .content-footer {
        display: flex;
        flex-direction: row;
        margin-top: 40rpx;
    }
    .footer-date {
        margin-top: 20rpx;
        width: 170rpx;
    }
    .footer-date span {
        font-size: 24rpx;
    }
    .footer-button {
        margin-left: 230rpx;
        margin-top: 20rpx;
        width: 80rpx;
        height: 35rpx;
        text-align: center;
        background-color: #D98B1B;
        border-radius: 5%;
        padding: 4rpx 2rpx;
        color: #ffffff;
        font-size: 28rpx;
        line-height: 35rpx;
    }
</style>
