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
            programData: []
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
        }
    },
    mounted() {
        this.getProgramData()
    },
}
</script>

<style scoped>
    
</style>


