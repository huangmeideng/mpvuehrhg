import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleUrl: "http://api.tdjin.com/v3/cms/article",
        courseUrl: "http://api.tdjin.com/v3/course/goods",
        programUrl: "http://api.tdjin.com/v3/live/room"
    },
    actions: {

    },
    mutations: {

    }
})