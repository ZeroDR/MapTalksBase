import * as MapTalks from 'maptalks';
import {SymbolHandle,StyleHandle} from '@/handler/map/symbol/Symbol';

const LayerHandle = {
    //创建底图
    createBaseLayer(type) {
        let layer = undefined;
        switch (type.toUpperCase()) {
            case 'LIGHT':
            default:
                layer = new MapTalks.TileLayer('base', {
                    urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a', 'b', 'c', 'd'],
                });
                break;
        }
        return layer;
    },

    //创建VectorLayer
    //参数：高程
    createVectorLayer(id) {
        let fs = [{
            attributes: {
                name: 'ZLH'
            }, geometry: {
                plane: [116.37, 39.498568],
                altitude: [100]
            }
        }];
        let lsSymbol = SymbolHandle.createSymbol(fs, 'marker');

        return new MapTalks.VectorLayer(id, lsSymbol, {
            enableAltitude : false,        // enable altitude
            drawAltitude : undefined,//StyleHandle.createAltitude('line'),
            altitudeProperty : 'altitude', // altitude property in properties, default by 'altitude'
            forceRenderOnMoving:false,//是否移动
        });
    },
};

export {LayerHandle};
