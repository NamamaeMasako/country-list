<template>
  	<v-app>
		<v-app-bar app color="primary" dark>
			<v-tabs background-color="deep-purple accent-4" center-active dark>
				<v-tab>
					<router-link to="/" class="nav-link">Home</router-link>
				</v-tab>
				<v-tab>
					<router-link to="/About" class="nav-link">About</router-link>
				</v-tab>
			</v-tabs>
		</v-app-bar>

		<v-main>
			<router-view/>
		</v-main>
  	</v-app>
</template>

<script>

export default {
	name: 'App',

	data: () => ({
		//
	}),
};
</script>
