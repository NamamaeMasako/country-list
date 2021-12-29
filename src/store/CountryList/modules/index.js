import axios from 'axios'

const state = {
    apiList:{
        all: 'https://restcountries.com/v3.1/all'
    },
    dataList:{
        countryList: {
            search: '',
            headers: [
                { text: '國家名稱',value: 'name.official' },
                { text: '國旗', value: 'flags.png' },
                { text: 'cca2', value: 'cca2' },
                { text: 'cca3', value: 'cca3' },
                { text: '母語名稱', value: 'nativeName' },
                { text: '替代國家名稱', value: 'altSpellings' },
                { text: '國際電話區號', value: 'idd' },
            ],
            datas: [],
        }
    }
}

const getters = {

}
 
const mutations = {

}

const actions = {
    getCountryListData: async (context) => {
        axios(context.state.apiList.all).then(response => {
            console.log(response)
            if(response.data.length < 0 ){
                throw response.data 
            }
            context.state.dataList.countryList.datas = response.data
            context.state.dataList.countryList.datas.sort((a, b) => {
                return a.Brand > b.Brand ? 1 : -1;
            });
            context.state.dataList.countryList.datas.forEach((el) => {
                el.nativeName = []
                if(el.name.nativeName != null && el.name.nativeName != undefined){
                    Object.keys(el.name.nativeName).forEach((k) => {
                        el.nativeName.push(el.name.nativeName[k].official)
                    })
                }
                // let k = el.cioc.toLowerCase()
                // console.log(k)
                // console.log(el.name.nativeName[k].official)
            })
            // if(response.data.result[0].member_shopspace.length > 0){
            //     response.data.result[0].member_shopspace.forEach((el) => {
            //         context.state.selectList.ownedShopspaceList.push(el)
            //     })
            // }
        }).catch((error) => { 
            console.log(error)
            // context.state.alert.variant = 'danger'
            // context.state.alert.message = error['result']
            // Object.keys(context.state.validateMsg).map((key) => {
            //     if(error['message'][key] != undefined){
            //         context.state.validateMsg[key] = error['message'][key]
            //     }else{
            //         context.state.validateMsg[key] = ''
            //     }
            // })
            // context.commit('showAlert')
        })
    },
    initPage: async (context) => {
        await context.dispatch('getCountryListData')
    },
}
 
const module = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}
 
export default module