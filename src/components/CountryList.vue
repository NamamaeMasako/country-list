<template>
	<v-container>
		<v-row class="text-center">
			<v-data-table :items="countryList.datas" :headers="countryList.headers"></v-data-table>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
let dataList = {}
export default {
	name: 'CountryList',
	data: () => (
		dataList
	),
	beforeCreate() {
		dataList = this.$store.state.CountryListData.indexData.dataList
		console.log(this)
	},
	mounted() {
		this.initPage()
	},
	methods: {
        ...mapActions('CountryListData/indexData',[
            'initPage'
        ])   
    }
}
</script>