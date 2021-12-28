import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import CountryListData from './CountryList/index.js'
console.log('CountryListData',CountryListData)
export default new Vuex.Store({
	modules: {
		CountryListData: CountryListData
	}
})
