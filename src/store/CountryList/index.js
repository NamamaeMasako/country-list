import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import indexData from './modules/index.js'
 
const storeData =  new Vuex.Store({
    modules: {
        indexData: indexData
    }
})
 
export default storeData