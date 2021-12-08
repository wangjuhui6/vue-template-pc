import axios from 'axios'
import Cookies from 'js-cookie'
import { Notification } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
  // 清除浏览器缓存
  headers: {
    'Cache-Control': 'no-cache'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  const token  = Cookies.get('token')
    if (token) {
      config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // 接口处理
    if (response.data.errorCode !== 200) {
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    // 错误提示
    Notification({
      title: '',
      message: (error.response.data.message ? error.response.data.message : '系统开小差了！'),
      type: 'error',
      position: 'bottom-right',
      duration: 5 * 1000
    })
    return Promise.reject('error')
  }
)

export default service
