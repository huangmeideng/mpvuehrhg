<template>
    <div class="container">
        <article-swiper></article-swiper>
        <article-list :articleData="articleData"></article-list>
    </div>
</template>

<script>
import ArticleSwiper from "./components/ArticleSwiper"
import ArticleList from "./components/ArticleList"
import globalData from "../../stores/globalData"

export default {
    components: {
        ArticleSwiper,
        ArticleList
    },
    data () {
        return {
            articleData: [],
            page: 1,
            pageSize: 10,
            pageMax: 1
        }
    },
    methods: {
        getArticleData () {
            let that = this
            wx.request({
                url: globalData.state.articleUrl + "?cat_id=2",
                header: {
                    'content-type': 'application/json' // 默认值
                },
            success(res) {
                let result = res.data
                that.pageMax = result.pagemax
                if (result.status === 200){
                    for (let item of result.data){
                        that.articleData.push(item)
                    }
                } else{
                    console.log("请求失败")
                    wx.showToast({
                        title: '服务器出错',
                        icon: "warn",
                        duration: 5000
                    })
                }
                }
            })
        }
    },
    mounted () {
        wx.showLoading({
            title: '加载中'
        })
        this.getArticleData()
        setTimeout(function(){
            wx.hideLoading()
        },1000)
    },
    //上拉加载更多事件
    onReachBottom() {
        this.page++
        let that = this
        let currentPage = this.page
        let currentUrl = globalData.state.articleUrl + "?cat_id=2&page=" + currentPage
        if(this.page <= this.pageMax){
            console.log("还可以加载")
            wx.request({
                url: currentUrl,
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let result = res.data
                    if(result.status === 200){
                        console.log(result.data)
                        for(let item of result.data){
                            that.articleData.push(item)
                        }
                    } else{
                        wx.showToast({
                            title: '服务器出错',
                            icon: 'warn',
                            duration: 2000
                        })
                    }
                }
            })
        } else{
            wx.showToast({
                title: '我是有底线的',
                icon: 'warn',
                duration: 2000
            })
        }
    },
    //下拉刷新事件
    onPullDownRefresh() {
        console.log("下拉刷新")
        this.articleData = []
        this.pageMax = 1
        this.page = 1
        let that = this
        wx.request({
            url: globalData.state.articleUrl + "?cat_id=2",
            header: {
                'content-type': 'application/json' 
            },
            success(res) {
                let result = res.data
                if(result.status === 200){
                    that.pageMax = result.pagemax
                    for(let item of result.data){
                        that.articleData.push(item)
                    }
                } else{
                    wx.showToast({
                        title: '服务器错误',
                        icon: 'warn',
                        duration: 2000
                    })
                }
            }
        })
    },
    onShareAppMessage() {
        return {
            title: '好人好股'
        }
    }
}
</script>

<style>

</style>

