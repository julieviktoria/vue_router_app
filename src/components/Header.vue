<template>
	<header>
		<!-- <RouterLink to="/">Go to /</RouterLink> -->

		<RouterLink :to="{ name: 'home' }">Go to "home"</RouterLink>
		<br />
		<RouterLink :to="{ name: 'component', params: { component_id: 'clock' } }"
			>Go to "component" med "component_id": "clock"</RouterLink>

        <button @click="push">Push to /</button>
        <br>
        <button @click="replace">Replace to /</button>

        <!-- Eksterne lenker 
            <a href="https://nrk.no" target="_blank">Ekstern lenke</a> 
        -->
	</header>
	
</template>

<script>
    export default {
        methods: {
            push() {
                // this.$route
                // this.$router.push('/');
                this.$router.push('/');
            },

            replace() {
                this.$router.replace('/');
            },
        }
    };
</script>

<style>
    header {
		margin-bottom: 1em;
		font-size: 0.5em;
		background: #eee;
	}
    
    header .router-link-active {
        background: rgb(143, 143, 189);
        border-radius: 10px;
    }
</style>
