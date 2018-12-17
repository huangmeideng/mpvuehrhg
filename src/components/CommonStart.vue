<template>
    <div>
        <div>
            <img :src="startUrl" alt="">
        </div>
        <div>
            <img :src="startUrl" alt="">
        </div>
        <div>
            <img :src="startUrl" alt="">
        </div>
        <div>
            <img :src="startUrl" alt="">
        </div>
        <div>
            <img :src="startUrl" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonStart',
    props: ['starts'],
    data () {
        return {
            startUrl: '/static/icon/start.png',
            startNoUrl: '/static/icon/start_no.png',
            startNum: 5
        }
    },
}
</script>

<style scoped>

</style>

