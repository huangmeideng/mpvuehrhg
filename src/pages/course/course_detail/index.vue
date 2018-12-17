<template>
    <div class="container">
        <div class="course-detail-image">
            <img :src="courseDetailData.goods_image" alt="">
        </div>
        <div class="course-detail-content">
            <div class="course-detail-tab-box">
                <div class="course-detail-tab-item" 
                    :class="currentTab===item.id?'selected':''" 
                    v-for="item of courseTabData" 
                    :key="item.id"
                    @click="onChangeTab(item.id)">
                    {{item.name}}
                </div>
            </div>
            <div class="course-detail-content-box">
                <swiper :current="currentTab" @change="onChangeSwiper" :duration="swiperTime" :style="{height: scrollHeight + 'rpx'}">
                    <swiper-item class="swiper-items">
                        <scroll-view class="scroll-views" :scroll-x="scrollX" :scroll-y="scrollY">
                            <div class="course-detail-content-catalog" v-show="currentTab===0?true:false">
                                <div class="course-detail-catalog-item" v-for="(item,index) of courseDetailData.outline" :key="index">
                                    <span>第{{index+1}}节</span>
                                    <span>{{item.outline_title}}</span>
                                </div>
                            </div>
                        </scroll-view>    
                    </swiper-item>
                    <swiper-item class="swiper-items">
                        <scroll-view class="scroll-views" :scroll-x="scrollX" :scroll-y="scrollY">
                            <div class="course-detail-content-intro" v-show="currentTab===1?true:false">
                                <div class="intro-name-start">
                                    <div>{{courseDetailData.goods_name}}</div>
                                    <course-start :starts="startArray"></course-start>
                                </div>
                                <div class="intro-start-time">
                                    <div>开课时间</div>
                                    <div>{{courseDetailData.goods_start_time}}</div>
                                </div>
                                <div class="intro-describe">
                                    {{courseDetailData.goods_describe}}
                                </div>
                            </div>
                        </scroll-view>
                    </swiper-item>
                    <swiper-item class="swiper-items">
                        <scroll-view class="scroll-views" :scroll-x="scrollX" :scroll-y="scrollY">
                            <div class="course-detail-content-evaluate" v-show="currentTab===2?true:false">
                                <course-evaluate></course-evaluate>
                            </div> 
                        </scroll-view>   
                    </swiper-item>
                </swiper>
            </div>
        </div>
        <div class="course-detail-consult" @click="onCourseConsult">
            咨询
        </div>
    </div>
</template>

<script>
import globalData from "../../../stores/globalData"
import CourseStart from "../components/CourseStart"
import CourseEvaluate from "../components/CourseEvaluate"
import utils from "../../../utils"
export default {
    components: {
        CourseStart,
        CourseEvaluate
    },
    data () {
        return {
            courseDetailData: {},
            courseTabData: [
                {
                    id: 0,
                    name: '课程目录',
                },
                {
                    id: 1,
                    name: '课程简介'
                },
                {
                    id: 2,
                    name: '课程评价'
                }
            ],
            currentTab: 0,
            swiperTime: 1000,
            scrollHeight: 560,
            scrollX: false,
            scrollY: true,
            startArray: [],
        }
    },
    methods: {
        /**
         * 获取课程详细数据
         */
        getCourseDetailData(id) {
            let courseDetailUrl = globalData.state.courseUrl + "?goods_id=" + id
            let that = this
            wx.request({
                url: courseDetailUrl,
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let result = res.data
                    if(result.status === 200){
                        that.courseDetailData = result.data
                        wx.setNavigationBarTitle({
                            title: that.courseDetailData.goods_name
                        })
                        that.startArray = utils.numToArray(that.courseDetailData.course_start)
                        console.log(that.courseDetailData)
                    } else{
                        wx.showToast({
                            title: '服务器出错',
                            icon: 'warn',
                            duration: 5000
                        })
                    }
                }
            })
        },
        /**
         * tab切换事件
         */
        onChangeTab(id) {
            this.currentTab = id
        },
        /**
         * swiper切换事件
         */
        onChangeSwiper(e) {
            this.currentTab = e.mp.detail.current
        },
        /**
         * 咨询按钮点击事件
         */
        onCourseConsult() {
            wx.navigateTo({
                url: '../course_consult/main'
            })
        }
    },
    mounted() {
        this.getCourseDetailData(this.$root.$mp.query.course_id)
    },
    onShareAppMessage() {
        return {
            title: this.courseDetailData.goods_name
        }
    }
}
</script>

<style scoped>
    .course-detail-image {
        width: 100%;
        height: 460rpx;
    }
    .course-detail-image image {
        width: 100%;
        height: 100%;
    }
    .course-detail-tab-box {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .course-detail-tab-item {
        font-size: 32rpx;
        color: #000;
        width: 33.33%;
        height: 70rpx;
        line-height: 70rpx;
        border-bottom: 1rpx solid #D0D0D7;
        text-align: center;
    }
    .course-detail-tab-item.selected {
        color: #C8513E;
        border-bottom: 2rpx solid #C8513E;
    }
    .swiper-items {
        height: 100%;
    }
    .scroll-views {
        height: 100%;
    }
    .course-detail-content-catalog {
        display: flex;
        flex-direction: column;
    }
    .course-detail-catalog-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 80rpx;
        font-family: "Microsoft YaHei";
        font-size: 30rpx;
        background-color: #ffffff;
        border-bottom: 1rpx solid #D0D0D7;
    }
    .course-detail-catalog-item span:first-child {
        margin-left: 60rpx;
        color: #C8513E;
    }
    .course-detail-catalog-item span:last-child {
        margin-left: 40rpx;
    }
    .intro-name-start {
        height: 100rpx;
        border-bottom: 1rpx solid #D0D0D7;
    }
    .intro-name-start div:first-child {
        font-family: "Microsoft YaHei";
        font-weight: bold;
        font-size: 35rpx;
        margin-left: 60rpx;
        margin-top: 10rpx;
    }
    .intro-start-time {
        display: flex;
        flex-direction: row;
        line-height: 60rpx;
        border-bottom: 1rpx solid #D0D0D7;
        height: 60rpx;
        font-family: "Microsoft YaHei";
        font-size: 30rpx;
    }
    .intro-start-time div:first-child {
        margin-left: 60rpx;
    }
    .intro-start-time div:last-child {
        margin-left: 10rpx;
    }
    .course-detail-consult {
        position: absolute;
        bottom: 20rpx;
        left: 100rpx;
        width: 550rpx;
        height: 90rpx;
        background-color: #EA7932;
        color: #ffffff;
        font-family: "Microsoft YaHei";
        font-size: 40rpx;
        border-radius: 10rpx;
        text-align: center;
        line-height: 90rpx;
        border: 1rpx solid #ECEAEC;
    }
</style>

