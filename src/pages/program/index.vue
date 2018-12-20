<template>
    <div>
        <program-list :programData="programData"></program-list>
    </div>
</template>

<script>
import ProgramList from './components/ProgramList'
import globalData from '../../stores/globalData'
import utils from '../../utils'
export default {
    components: {
        ProgramList
    },
    data () {
        return {
            programData: [],
            page: 1,
            pageSize: 10,
            pageMax: 1
        }
    },
    methods: {
        /**
         * 获取初始节目列表数据
         */
        getProgramData() {
            let that = this
            wx.request({
                url: globalData.state.programUrl + "?is_past=1",
                header: {
                    'content-type': 'application/json'
                },
                success (res) {
                    let result = res.data
                    if(result.status === 200){
                        that.pageMax = result.pagemax
                        for(let item of utils.oneArrayToTwoArray(result.data,2)){
                            that.programData.push(item)
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
        /**
         * 获取更多节目数据
         */
        getMoreProgramData() {
            this.page ++
            if(this.page <= this.pageMax) {
                let programpUrl = globalData.state.programUrl + "?is_past=1&page=" + this.page
                let that = this
                wx.request({
                    url: programpUrl,
                    header: {
                        'content-type': 'application/json'
                    },
                    success (res) {
                        let result = res.data
                        if(result.status === 200) {
                            for(let item of utils.oneArrayToTwoArray(result.data,2)) {
                                that.programData.push(item)
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
         * 刷新获取数据
         */
        getNewProgramData() {
            this.programData = []
            this.pageMax = 1
            this.page = 1
            let that = this
            wx.request({
                url: globalData.state.programUrl + '?is_past=1',
                header: {
                    'content-type': 'application/json'
                },
                success (res) {
                    let result = res.data
                    if(result.status === 200) {
                        that.pageMax = result.pagemax
                        for( let item of utils.oneArrayToTwoArray(result.data,2)) {
                            that.programData.push(item)
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
        }
    },
    mounted() {
        this.getProgramData()
    },
    /**
     * 上拉加载
     */
    onReachBottom() {
        this.getMoreProgramData()
    },
    /**
     * 下拉刷新
     */
    onPullDownRefresh() {
        this.getNewProgramData()
    }
}
</script>

<style scoped>
    
</style>


