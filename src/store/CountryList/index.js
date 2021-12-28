import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import indexData from './modules/index.js'
 
const storeData =  {
    namespaced: true,
    modules: {
        indexData: indexData
    }
}
 
export default storeData