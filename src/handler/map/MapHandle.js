import * as MapTalks from 'maptalks';
import {LayerHandle} from '@/handler/map/layers/Layer'

const MapHandle = {
    map: undefined,
    center: [116.37, 39.498568],
    zoom: 14,
    pitch: 60,//上下旋转角度
    bearing: 30,//左右旋转角度
    hasLoaded: false,
    loadMap(id) {
        const _this = this;
        _this.map = new MapTalks.Map(id, {
            center: _this.center,
            zoom: _this.zoom,
            pitch: _this.pitch,
            bearing: _this.bearing,
            zoomControl: true,//放大缩小
            scaleControl: true,//图例
            overviewControl: true,//鹰眼
            baseLayer: LayerHandle.createBaseLayer('LIGHT')
        });

        _this.initEvent(_this.map);
    },

    //地图注册事件
    initEvent(map) {
        const _this = this;
        map.on('click', (param) => {
        });//点击事件

        let layer = LayerHandle.createVectorLayer('test');
        layer && layer.addTo(map);
    },

    //地图导出为图片
    exportImageByMap() {
        this.map.toDataURL({
            'mimeType': 'image/jpeg', // or 'image/png'
            'save': true,             // to pop a save dialog
            'fileName': 'map'         // file name
        });
    },
};
export default MapHandle;
