import axios from 'axios'
import config from '@/request/config'
const URLWEBHTTP = config.URLWEBHTTP;

/**
 * 封装的axios和ajax 一般用axios足够。如果有jsonp需求可以使用zport的ajax;
 */

export default async (url = '', params = {}, type = 'GET', method = 'axios') => {
    type = type.toUpperCase();
    if (method === 'axios') {
        let qs = require('qs');
        return new Promise((resolve, reject) => {
            axios({
                method: type,
                url: URLWEBHTTP + apiurl,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                data: type === 'POST' ? qs.stringify(params,{arrayFormat: 'brackets'}) : '',
                params: type === 'GET' ? params : ''
                // timeout: appConfigs.timeout,
                /* 开启跨域cookie携带 */
                //credentials : true,
                //emulateHTTP: true,
                //emulateJSON:true
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        });
    } else {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: URLWEBHTTP + apiurl,
                dataType: 'jsonp',
                data: params,
                jsonp: 'callback',
                success: function(res) {
                    resolve(res)
                },
                error: function(res) {
                    reject(res)
                }
            })
        });
    }
}
