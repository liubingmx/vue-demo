import axios from '@/api/http.js'; // 导入http中创建的axios实例
import base from './base.js'; // 导入接口域名列表

const order = {    
    // 新闻列表    
    orderList (params) {        
        return axios.get(`${base.bd}/orders`, {params:params});    
    }
    // post提交    
    // login (params) {        
    //     return axios.post(`${base.bd}/accesstoken`, qs.stringify(params));    
    // }
    // 其他接口…………
}

export default order;
