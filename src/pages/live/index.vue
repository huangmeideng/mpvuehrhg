<template>
    <div class="container">
        <live-list v-if="showData" :liveData='liveData' @jumpLiveDetail="onJumpLiveDetail"></live-list>
        <common-null v-if="showNull"></common-null>
    </div>
</template>

<script>
import LiveList from './components/LiveList'
import CommonNull from '../../components/CommonNull'
import globalData from '../../stores/globalData'
export default {
    components: {
        LiveList,
        CommonNull
    },
    data() {
        return {
            liveData: [],
            page: 1,
            pageSize: 10,
            pageMax: 1
        }
    },
    computed: {
        showData: function() {
            return this.liveData.length===0?false:true
        },
        showNull: function() {
            return this.liveData.length===0?true:false
        }
    },
    methods: {
        /**
         * 获取初始直播数据
         */
        getLiveData () {
            let that = this
            wx.request({
                url: globalData.state.programUrl + '?room_play_state=1',
                header: {
                    'content-type': 'application/json'
                },
                success (res) {
                    let result = res.data
                    if(result.status === 200) {
                        that.pageMax = result.pagemax
                        for(let item of result.data) {
                            that.liveData.push(item)
                        }
                    } else {
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
         * 获取更多数据
         */
        getMoreData() {
            this.page ++
            if(this.page <= this.pagemax) {
                console.log('我还可以加载')
                let that = this
                wx.request({
                    url: globalData.state.programUrl + '?room_play_state=1&page=' + this.page,
                    header: {
                        'content-type': 'application/json'
                    },
                    success(res) {
                        let result = res.data
                        if(result.status === 200){
                            for(let item of result.data) {
                                that.liveData.push(item)
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
            } else{
                wx.showToast({
                    title: '我是有底线的',
                    icon: 'warn',
                    duration: 2000
                })
            }
        },
        /**
         *  刷新数据
         */
        getRefreshData() {
            this.liveData = []
            this.page = 1
            this.pagemax = 1
            let that = this
            wx.request({
                url: globalData.state.programUrl + '?room_play_state=1',
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let result = res.data
                    if(result.status === 200) {
                        for(let item of result.data) {
                            console.log('刷新成功')
                            that.liveData.push(item)
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
        },
        onJumpLiveDetail (id) {
            console.log(id)
            wx.navigateTo({
                url: './live_detail/main?room_id=' + id
            })
        }
    },
    mounted() {
        wx.showLoading({
            title: '加载中'
        })
        this.getLiveData()
        setTimeout(function(){
            wx.hideLoading()
        },1000)
    },
    onReachBottom () {
        this.getMoreData()
    },
    onPullDownRefresh() {
        this.getRefreshData()
    },
    onShareAppMessage() {
        return {
            title: '好人好股-直播'
        }
    }
}
</script>

<style scoped>

</style>
