<template>
    <div class="container">
        <div class="article-list">
            <div class="article-one" @click="onJumpDetail(item.article_id)" v-for="item of articleData" :key="item.article_id">
                <div class="article-image">
                    <img :src="item.article_image" alt="图片丢失">
                </div>
                <div class="article-content">
                    <div class="article-title">
                        <span>{{item.article_title}}</span>
                    </div>
                    <div class="article-footer">
                        <span class="article-author">{{item.business_name}}</span>
                        <span class="article-date">{{item.indate}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleList",
    props: ["articleData"],
    methods: {
        onJumpDetail (id) {
            //let newUrl = encodeURIComponent(url)
            wx.navigateTo({
                url: "./article_detail/main?article_id="+id,
            })
        }
    }
}
</script>

<style scoped>
    .article-one {
        display: flex;
        flex-direction: row;
        margin-top: 20rpx;
        margin-left: 10rpx;
        background-color: #ffffff;
        border-bottom: 1px solid #080B02;
    }
    .article-image {
        width: 200rpx;
        height: 140rpx;
    }
    .article-image img {
        width: 100%;
        height: 100%;
    }
    .article-content {
        margin-left: 20rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .article-title span {
        font-family: "Microsoft YaHei";
        font-size: 28rpx;
    }
    .article-footer {
        display: flex;
        flex-direction: row;
    }
    .article-footer span:first-child {
        font-size: 24rpx;
        background-color: #C8513E;
        color: #fff;
        border-radius: 5%;
        padding: 2rpx 5rpx;
        margin-bottom: 5rpx;
    }
    .article-footer span:last-child {
        margin-left: 100rpx;
        font-size: 28rpx;
    }
</style>

