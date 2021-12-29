<template>
	<v-container>
		<v-card>
			<v-card-title>
				國名查詢
				<!-- <v-spacer></v-spacer> -->
				<v-text-field
					v-model="countryList.search"
					append-icon="mdi-magnify"
					label="Search"
					single-line
					hide-details
					class="pt-0 pb-4 pl-5"
				></v-text-field>
			</v-card-title>
			<v-data-table 
				fixed-header height="1200px" 
				:items="countryList.datas" 
				:headers="countryList.headers" 
				:search="countryList.search"
				items-per-page="25"
				:sort-by="['name.official']"
				:sort-desc="[true]"
			>
				<template v-slot:item.flags.png="{ item }">
					<img :src="item.flags.png" :alt="item.name.official" class="flag">
				</template>
				<template v-slot:item.nativeName="{ item }">
					<span v-for="(n, key) in item.nativeName" :key="key">{{ n }}</span>
				</template>
				<template v-slot:item.idd="{ item }">
					<span class="mr-1">{{item.idd.root}}</span>
					<span v-for="(n, key) in item.idd.suffixes" :key="key">{{ n }}</span>
				</template>
			</v-data-table>
		</v-card>
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