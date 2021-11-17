<template>
	<Clock v-if="$route.params.component_id == 'clock'" />

	<!-- <div v-if="$route.params.id === 'om-oss'">
		<h1>Les litt om oss...</h1>
	</div>
	
	<div>{{ $route }}</div> -->
</template>

<script>
	import Clock from '../components/Clock.vue';
	
	export default {
		components: {
			Clock
		},
		
		data() {
			return {};
		}
	};

		/* data() {
			return {}
		},

		methods() { 
			
		} */
	
</script>

<style>
</style>