<template>
    <div>{{ today }}</div>
</template>

<script>
    export default {
        data() {
            return {
                today: this.getTime()
            }
        },

        mounted() {
            setInterval(() => {
                this.today = this.getTime();
            }, 1000)
            // console.log('mounted clock')
        },

        methods: {
            getTime() {
                return new Date().toTimeString().slice(0, 8);
            }
        }
    }
</script>

<style>

</style>