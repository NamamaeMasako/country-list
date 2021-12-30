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
				hide-default-footer
				:items="countryList.datas" 
				:headers="countryList.headers" 
				:search="countryList.search"
				:page.sync="countryList.page"
				:items-per-page="countryList.itemsPerPage"
				:sort-by="['name.official']"
				:sort-desc="[true]"
				@page-count="countryList.pageCount = $event"
			>
				<template v-slot:item.name.official="{ item }">
					<v-dialog v-model="dialog">
						<v-card class="col-12">
							<v-card-title class="text-h5">
								詳細資訊
							</v-card-title>
							<v-card class="col-12 mb-2" v-for="(el, key) in item" :key="key">
								<v-card-title class="text-h5">
									{{key}}
								</v-card-title>
								<div>
									{{el}}
								</div>
								<!-- <div v-if="typeof el == 'object'">
									<v-card v-for="(e, key) in el" :key="key">
										<v-card-title class="text-h5">
											{{key}}
										</v-card-title>
									</v-card>
								</div>
								<div v-else>
									{{el}}
								</div> -->
							</v-card>
							<v-card-actions>
								<v-btn depressed block outlined @click="dialog = false">
									關閉
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<v-btn depressed block outlined @click.stop="dialog = true">{{item.name.official}}</v-btn>
				</template>
				<template v-slot:item.flags.png="{ item }">
					<img :src="item.flags.png" :alt="item.name.official" class="flag">
				</template>
				<template v-slot:item.nativeName="{ item }">
					<span v-for="(n, key) in item.nativeName" :key="key">{{ n }}</span>
				</template>
				<template v-slot:item.idd="{ item }">
					<span class="mr-1">{{item.idd.root}}</span>
					<!-- <span v-for="(n, key) in item.idd.suffixes" :key="key">{{ n }}</span> -->
				</template>
			</v-data-table>
			<div class="text-center pt-2">
				<v-pagination
					v-model="countryList.page"
					:length="countryList.pageCount"
				></v-pagination>
			</div>
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