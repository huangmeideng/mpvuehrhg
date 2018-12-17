<template>
    <div class="container">
        <swiper :indicator-dots="indicatorDots"
                :autoplay="autoplay"
                :interval="interval"
                :duration="duration"
                :indicator-active-color="indicatorColor"
                class="hrhg-swiper"
        >
            <block v-for="item of swiperData" :key="item.id">
                <swiper-item>
                    <image :src="item.imgUrl" @click="onJumpDetail" />
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>

<script>
export default {
    //props: ["swiperData"],
    name: "ArticleSwiper",
    data () {
        return {
            indicatorDots: true,
            autoplay: true,
            interval: 3000,
            duration: 500,
            indicatorColor: "#FF313F",
            swiperData: [
                {
                    id: "001",
                    imgUrl: "https://i.loli.net/2018/12/12/5c107c7ddb7e9.jpg",
                    tagUrl: "https://a.b.c.tdjin.com/article/757.html"
                },
                {
                    id: "002",
                    imgUrl: "https://i.loli.net/2018/12/12/5c107c9bd3c97.jpg",
                    tagUrl: "https://a.b.c.tdjin.com/article/703.html"
                },
                {
                    id: "003",
                    imgUrl: "https://i.loli.net/2018/12/12/5c107cb15e25e.jpg",
                    tagUrl: "https://a.b.c.tdjin.com/article/732.html"
                }
            ]
        }
    },
    methods: {
        onJumpDetail () {
             wx.navigateTo({
                url: "./article_detail/main",
            })
        }
    }
}
</script>

<style scoped>
    .hrhg-swiper {
        width: 100%;
        height: 400rpx;
    }
    .hrhg-swiper image {
        width: 100%;
        height: 100%;
    }
</style>

