<template>
    <div class="content">
        <MapComponent></MapComponent>
    </div>
</template>

<script>

//引入vuex
import { mapMutations, mapState } from 'vuex'

import MapComponent from "@/components/MapComponent.vue";

export default {
    name: 'HomePage',
    props: [],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        /* 使用mapMutaions遍历vuex里的mutations */
        ...mapState([])
    },
    components: {
        MapComponent
    },
    mounted() {
    },
    methods: {
        /* 使用mapMutaions遍历vuex里的mutations */
        ...mapMutations([]),
    },
}
</script>

<style lang="scss" scope>
.content {
    height:100%;
    width:100%;
    text-align: center;
    .center {
        @include center();
        color: $black_c;
    }
    .titleImg {
        width: 350px;
    }
    button {
        border: 1px solid;
        cursor: pointer;
        background: #ffffff;
    }
}
</style>
