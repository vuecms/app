import Axios from 'axios'
import { Loading, Message } from 'element-ui'

Axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept': 'application/json, text/javascript, */*; q=0.01'
}

let loadingLock

// 添加一个请求拦截器
Axios.interceptors.request.use(function (config) {
  loadingLock = Loading.service({
    fullscreen: true
  })
  return config
}, function (error) {
  Message({
    showClose: true,
    message: '请求失败',
    type: 'error'
  })
  return Promise.reject(error)
})

// 添加一个响应拦截器
Axios.interceptors.response.use(function (response) {
  loadingLock.close()
  return response.data
}, function (error) {
  loadingLock.close()
  if (error.response.status === 405) {
    window.location.href = '/'
    return
  }
  return Promise.reject(error)
})

export default Axios
