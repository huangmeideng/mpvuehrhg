<template>
    <div>
        <swiper>
            <block v-for="item of swiperData" :key="item.id">
                <swiper-item>
                    <image :src="item.imgUrl" width="355" height="150"/>    
                </swiper-item> 
            </block>
        </swiper>   
    </div>
</template>

<script>
export default {
    name: "IndexSwiper",
    data () {
        return {
            swiperData: [
                {
                    id: "001",
                    imgUrl: "https://i.loli.net/2018/12/12/5c107c7ddb7e9.jpg"
                },
                {
                    id: "002",
                    imgUrl: "https://i.loli.net/2018/12/12/5c107c9bd3c97.jpg"
                },
                {
                    id: "003",
                    imgUrl: "https://i.loli.net/2018/12/12/5c107cb15e25e.jpg"
                }
            ]
        }
    }
}
</script>

<style>

</style>

