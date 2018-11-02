<template>
    <div class="map-panel">
        <div id="map"></div>
    </div>
</template>

<script>
    import MapHandle from '@/handler/map/MapHandle'

    export default {
        name: 'Map',
        /* 外部引入的值 */
        props: [],
        data() {
            return {}
        },
        created(){
        },
        mounted() {
            this.loadMap();
        },
        methods: {
            loadMap(){
                MapHandle.loadMap('map');
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .map-panel {
        height:100%;
        width:100%;
        #map {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    }
</style>
