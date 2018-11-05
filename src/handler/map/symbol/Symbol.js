import * as MapTalks from 'maptalks';

const SymbolHandle = {
    //创建Symbol
    createSymbol(features, type) {
        const _this = this;
        let lsSymbol = [];
        switch (type.toUpperCase()) {
            case 'MARKER':
                features.forEach(f => {
                    lsSymbol.push(_this.createMarker(f, true));
                });
                break;
            case 'UIMARKER':
                features.forEach(f => {
                    lsSymbol.push(_this.createUIMarker(f, true));
                });
                break;
            case 'LINE':
                features.forEach(f => {
                    lsSymbol.push(_this.createLine(f));
                });
                break;
            case 'POLYGON':
                features.forEach(f => {
                    lsSymbol.push(_this.createPolygon(f));
                });
                break;
            default:
                break;
        }
        return lsSymbol;
    },

    //创建Marker
    createMarker(feature, hasEvent = false) {
        let marker = new MapTalks.Marker(feature.geometry.plane, {
            visible: true,
            editable: true,
            cursor: 'pointer',
            shadowBlur: 0,
            shadowColor: 'black',
            draggable: false,
            dragShadow: false, // display a shadow during dragging
            drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
            symbol: StyleHandle.createImageStyle(),
            properties: {
                id: 123,
                altitude: feature.geometry.altitude
            },
        });
        hasEvent && marker.on('click', (param) => {
            console.log(param);
        });
        return marker;
    },

    //创建UIMarker
    //根据html自定义标注
    createUIMarker(feature, hasEvent = false) {
        let uiMarker = new MapTalks.ui.UIMarker(feature.geometry.plane, {
            visible: true,
            draggable: false,
            single: false,
            content: '<div>Hello</div>'//自定义显示内容
        });
        hasEvent && uiMarker.on('click', (param) => {
            console.log(param);
        });
        return uiMarker;
    },

    //创建Line
    createLine(feature, hasEvent = false) {
        let line = new MapTalks.LineString(feature.geometry.plane, {
            arrowStyle: null, // arrow-style : now we only have classic 箭头
            arrowPlacement: 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
            visible: true,
            editable: true,
            cursor: null,
            shadowBlur: 0,
            shadowColor: 'black',
            draggable: false,
            dragShadow: false, // display a shadow during dragging
            drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
            symbol: StyleHandle.createLineStyle(),
            properties: {
                name: 'zlh',
                altitude: feature.geometry.altitude
            },
        });
        hasEvent && line.on('click', (param) => {

        });
        return line;
    },

    //创建面
    createPolygon(feature, hasEvent = false) {
        let polygon = new MapTalks.Polygon(feature.geometry, {
            visible: true,
            editable: true,
            cursor: 'pointer',
            shadowBlur: 0,
            shadowColor: 'black',
            draggable: false,
            dragShadow: false, // display a shadow during dragging
            drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
            symbol: StyleHandle.createPolygonStyle()
        });
        hasEvent && polygon.on('click', (param) => {

        });
        return polygon;
    }
};

const StyleHandle = {
    //说明根据属性设置符号问题
    //对应属性添加
    // {
    //    'property':'属性字段名称',
    //    'type':'identity' //string
    // }

    //创建文本样式
    createTextStyle(name) {
        return {
            'textFaceName': 'sans-serif',
            'textName': name,          //value from name in geometry's properties '{name}'
            'textWeight': 'normal', //'bold', 'bolder'
            'textStyle': 'normal', //'italic', 'oblique'
            'textSize': 40,
            'textFont': null,     //same as CanvasRenderingContext2D.font, override textName, textWeight and textStyle
            'textFill': '#34495e',
            'textOpacity': 1,
            'textHaloFill': '#fff',
            'textHaloRadius': 5,
            'textWrapWidth': null,
            'textWrapCharacter': '\n',
            'textLineSpacing': 0,
            'textDx': 0,
            'textDy': 0,
            'textHorizontalAlignment': 'middle', //left | middle | right | auto
            'textVerticalAlignment': 'middle',   // top | middle | bottom | auto
            'textAlign': 'center', //left | right | center | auto
            'textRotation': 0, //旋转角度
        };
    },

    //创建线样式
    createLineStyle() {
        return {
            'lineColor': StyleHandle.createColorStyle(),
            'lineWidth': 1,
            'lineJoin': 'round', //miter, round, bevel
            'lineCap': 'round', //butt, round, square
            'lineDasharray': null,//dasharray, e.g. [10, 5, 5]
            'lineOpacity ': 1,
            'linePatternFile': undefined,//图片填充
            'linePatternDx': 0,
            'textName': '{name}',//设置文本
            'textPlacement': 'vertex',//vertex line
            'textSize': 20,
            'textDy': -20,
            'markerFile': undefined,//设置节点图片
            'markerPlacement': 'vertex', //vertex, point, vertex-first, vertex-last, center
            'markerVerticalAlignment': 'middle',
            'markerWidth': 30,
            'markerHeight': 30
        };
    },

    //创建面样式
    createPolygonStyle() {
        return {
            'polygonFill': StyleHandle.createColorStyle(),
            'polygonOpacity': 1,
            'lineColor': '#1bbc9b',
            'lineWidth': 1,
            'lineJoin': 'round', //miter, round, bevel
            'lineCap': 'round', //butt, round, square
            'lineDasharray': null,//dasharray, e.g. [10, 5, 5]
            'lineOpacity ': 1,
            'shadowBlur': 0,//曲线平滑
            'shadowOffsetX': 0,
            'shadowOffsetY': 0,
            'polygonPatternFile': undefined,//填充图片
            'markerType': undefined,//'ellipse',//节点样式
            'markerFill': '#1bbc9b',
            'markerLineColor': '#000',
            'markerWidth': 30,
            'markerHeight': 30,
            'markerPlacement': 'vertex', // point, vertex, vertex-first, vertex-last, line
            'textName': undefined,//文本
            'textPlacement': 'vertex',   // point, vertex, vertex-first, vertex-last, line
            'textFill': '#fff'
        };
    },

    //创建图片标注
    createImageStyle() {
        return {
            'markerFile': '../static/image/marker/1.png',
            'markerWidth': 28,
            'markerHeight': 40,
            'markerDx': 0,
            'markerDy': 0,
            'markerOpacity': 1,
            'textName': '',
            'textSize': 14,
            'markerHorizontalAlignment': 'middle', // left, middle(default), right
            'markerVerticalAlignment': 'middle',    // top, middle, bottom(default)
            'markerRotation': 0, // marker rotation in degree, clock-wise
        };
    },

    //创建矢量标注
    createVectorStyle() {
        return {
            'markerType': 'ellipse',//默认-圆形 cross-+ x-X triangle-三角形 square-正方形 diamond-菱形 bar-柱状 pie-饼图 pin-水滴 rectangle-正方形
            'markerFill': this.createColorStyle(),//填充色 支持渐变
            'markerFillPatternFile': '',//填充图片
            'markerFillOpacity': 1,//透明度

            'markerLineColor': '#34495e',//边线色
            'markerLineWidth': 3,//线宽
            'markerLineOpacity': 1,//线透明度
            'markerLineDasharray': [],
            'markerWidth': 40,//宽度
            'markerHeight': 40,//高度
            'markerDx': 0,
            'markerDy': 0,
            'markerOpacity': 1,//透明度
            'markerRotation': 0, // marker rotation in degree, clock-wise
        };
    },

    //创建SVG标注
    createSVGStyle() {
        return {
            'markerType': 'path',
            'markerPath': '',
            'markerPathWidth': 540,
            'markerPathHeight': 580,
            // 'markerFill': '#6fa8dc', // will override tiger path's style properties
            // 'markerLineColor' : 12,
            'markerWidth': 400,
            'markerHeight': 400,
            'markerDy': 200,
            'markerDx': 0,
            'markerRotation': 0, // marker rotation in degree, clock-wise
        };
    },

    //创建高程面样式
    createAltitude(type) {
        let drawAltitude = undefined;
        switch (type.toUpperCase()) {
            case 'MARKERLINE':
                drawAltitude = {
                    lineWidth: 1,
                    lineColor: '#1bbc9b'
                };//绘制高度线
                break;
            case 'POLYGON':
                drawAltitude = {
                    polygonFill: '#1bbc9b',
                    polygonOpacity: 0.3,
                    lineWidth: 0
                };//绘制高度面
                break;
            default:
                break;
        }
        return drawAltitude;
    },

    //创建颜色-单色、渐变色
    createColorStyle(type) {
        let colorStyle = undefined;
        switch (type && type.toUpperCase()) {
            case 'GRADUAL':
                colorStyle = {
                    'type': 'linear',//radial
                    'places': [0, 0, 1, 1],
                    'colorStops': [
                        [0.00, '#fff'],
                        [0.50, '#fff27e'],
                        [1, '#f87e4b']
                    ]
                };
                break;
            case 'SINGLE':
            default:
                colorStyle = 'rgb(135,196,240)';
                break;
        }
        return colorStyle;
    },
};

export {SymbolHandle, StyleHandle};
