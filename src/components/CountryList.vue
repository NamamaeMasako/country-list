<template>
	<v-container>
		<v-row class="text-center">
			<v-data-table :items="dataList.countryList.datas" :headers="dataList.countryList.headers"></v-data-table>
		</v-row>
	</v-container>
</template>

<script>
let data = {}
export default {
	name: 'CountryList',
	data: () => (
		data
	),
	beforeCreate() {
		data = this.$store.state.CountryListData.indexData
	},
}
</script>