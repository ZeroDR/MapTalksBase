<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss">
/* 全局resetCss 重置 */
@import './assets/css/resetCss.css';
html,body,#app{
    height:100%;
    width:100%;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $red_c;
}
</style>
