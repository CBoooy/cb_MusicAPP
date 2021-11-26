import axios from 'axios';

/* 对其get函数进行封装 */

let baseURL = '/';
let ERR_OK = 0;

axios.defaults.baseURL = baseURL;

export default function get(url, params) {
  return axios
    .get(url, params)
    .then((res) => {
      /* 拿到相应数据 */
      let responseData = res.data;
      /* 判断 error_code 是否为 0 */
      if (responseData.code === ERR_OK) {
        return responseData.result;
      }
    })
    .catch((e) => {
      /* 错误处理 */
      console.log(e);
    });
}

/* 

通过axios发的请求，响应的数据，结构是这样：
{
  data:{
    code: ERR_OK,
    result: {
      sliders,
      albums
    }
  }，
  status:200,
  statusText:'OK',
  headers:{},
  config:{},
  request:{}
}

*/
