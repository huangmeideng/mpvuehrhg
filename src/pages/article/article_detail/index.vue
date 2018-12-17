<template>
    <web-view :src="articleUrl"></web-view>
</template>

<script>
import globalData from "../../../stores/globalData"
export default {
    data () {
        return {
            articleUrl: "",
            articleTitle: "",
            shareLink: ""
        }
    },
    methods: {
        getArticleDetail(id) {
            let that = this
            wx.request({
                url: globalData.state.articleUrl + "?article_id=" + id,
                header: {
                    "content-type": "application/json"
                },
                success(res) {
                    console.log(res)
                    let result = res.data
                    if(result.status === 200){
                        let articleData = result.data
                        that.articleUrl = articleData.link
                        that.articleTitle = articleData.article_title
                        that.shareLink = articleData.share_link
                        wx.setNavigationBarTitle({
                            title: that.articleTitle
                        })
                    } else{
                        console.log("api请求错误")
                    }
                }
            })
        }
    },
    mounted() {
        let article_id = this.$root.$mp.query.article_id
        wx.showLoading({
            title: "加载中"
        })
        this.getArticleDetail(article_id)
        setTimeout(function(){
            wx.hideLoading()
        },1000)
    },
    onShareAppMessage() {
        return {
            title: this.articleTitle
        }
    }
}
</script>

<style>

</style>

