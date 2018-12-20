<template>
    <div class="container">
        <div class="course-tab">
            <div v-for="item of courseTab" :key="item.id" class="tab-item" @click="onChangeTab(item.id)">
                <span>{{item.name}}</span>
                <div class="tab-line" v-show="item.id===currentTab?true:false"></div>
            </div>
        </div>
        <div class="course-content">
            <swiper @change="onChangeSwiper" :current="currentTab" class="swiper-box" :style="{height: scrollHeight + 'rpx'}" :duration="swiperTimer">
                <swiper-item class="swiper-box-item">
                    <course-list :courseData="freeCourseData" @click="onClickCourse" @consult="onConsultCourse"></course-list>
                </swiper-item>
                <swiper-item class="swiper-box-item">
                    <course-list :courseData="payCourseData" @click="onClickCourse" @consult="onConsultCourse"></course-list>
                </swiper-item>
            </swiper>
        </div>
    </div>
</template>

<script>
import CourseList from "./components/CourseList"
import globalData from "../../stores/globalData"
export default {
    components: {
        CourseList
    },
    data () {
        return {
            courseTab: [
                {
                    id: 0,
                    name: "免费课程"
                },
                {
                    id: 1,
                    name: "付费课程"
                }
            ],
            currentTab: 0,
            currentContent: 0,
            freeCourseData: [],
            payCourseData: [],
            courseData: {
                freeCourseData: [],
                payCourseData: []
            },
            swiperTimer: 1000,
            freePage: 1,
            payPage: 1,
            freePageMax: 1,
            payPageMax: 1
        }
    },
    computed:{
        scrollHeight () {
            //动态计算scroll-view高度
            if(this.currentTab === 0){
                return 200 * this.freeCourseData.length
            } else{
                return 200 * this.payCourseData.length
            }
        }
    },
    methods: {
        /**
         * 切换tab事件
         */
        onChangeTab(id) {
            this.currentTab = id
            this.currentContent = id
        },
        /**
         * 切换swiper事件
         */
        onChangeSwiper(e) {
            console.log(e.mp.detail.current)
            this.currentTab = e.mp.detail.current
            this.currentContent = e.mp.detail.current
        },
        /**
         * 初始化获取课程数据
         */
        getCourseData(type) {
            //根据传参不同进行不同请求
            let that = this
            wx.request({
                url: globalData.state.courseUrl + "?is_" + type + "=1",
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let result = res.data
                    if(result.status === 200){
                        if(type === 'free'){
                            for(let item of result.data){
                                that.freeCourseData.push(item)
                            }
                            that.freePageMax = result.pagemax
                            console.log(that.courseData)
                        } else{
                            for(let item of result.data){
                                that.payCourseData.push(item)
                            }
                            that.payPageMax = result.pagemax
                        }
                    } else{
                        wx.showToast({
                            title: '服务器出错',
                            icon: "warn",
                            duration: 5000
                            })
                    }
                }
            })
        },
        /**
         * 获取更多课程数据
         */
        getMoreCourseData(type){
            let currentPage = 1
            let currentUrl = ""
            let pageMax = 1
            let that = this
            if(type === 0){
                currentPage = ++ this.freePage
                currentUrl = globalData.state.courseUrl + "?is_free=1&page=" + currentPage
                pageMax = this.freePageMax
            } else{
                currentPage = ++ this.payPage
                currentUrl = globalData.state.courseUrl + "?is_pay=1&page=" + currentPage
                pageMax = this.payPageMax
            }
            if(currentPage <= pageMax){
                wx.request({
                    url: currentUrl,
                    header: {
                        'content-type': 'application/json'
                    },
                    success(res){
                        let result = res.data
                        if(result.status === 200){
                            if(type===0){
                                for(let item of result.data){
                                    that.freeCourseData.push(item)
                                }
                            } else{
                                for(let item of result.data){
                                    that.payCourseData.push(item)
                                }
                            }
                        } else{
                            wx.showToast({
                                title: '服务器出错',
                                icon: 'warn',
                                duration: 5000
                            })
                        }
                    }
                })
            }else{
                wx.showToast({
                    title: '我是有底线的',
                    icon: 'warn',
                    duration: 2000
                })
            }
        },
        onClickCourse(id) {
            console.log(id)
            wx.navigateTo({
                url: './course_detail/main?course_id=' + id 
            })
        },
        onConsultCourse() {
            console.log('consult')
            wx.navigateTo({
                url: './course_consult/main'
            })
        }
    },
    mounted() {
        wx.showLoading({
            title: '加载中'
        })
        this.getCourseData("free")
        this.getCourseData("pay")
        setTimeout(function(){
            wx.hideLoading()
        },1000)
    },
    onPullDownRefresh() {
        console.log("上拉刷新")
    },
    /**
     * 下拉加载
     */
    onReachBottom() {
        this.getMoreCourseData(this.currentTab)
    }
}
</script>

<style scoped>
    .course-tab {
        position: fixed;
        top: 0;
        z-index: 999;
        background-color: #C8513E;
        color: #fff;
        width: 100%;
        height: 65rpx;
        font-family: "Microsoft YaHei";
        font-size: 30rpx;
    }
    .course-content {
        margin-top: 80rpx;
    }
    .tab-item {
        display: inline-block;
        margin-left: 160rpx;
        margin-top: 20rpx;
    }
    .tab-line {
        margin-top: -3rpx;
        height: 6rpx;
        width: 128rpx;
        background-color: #ffffff;
    }
    .item-height {
        height: 60rpx;
        background-color: aquamarine;
    }
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
    }
</style>





