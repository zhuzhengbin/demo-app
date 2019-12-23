import axios from './axios'


// 和首页相关的网络请求
export function getHomeContent() {
  return axios({
    url: '/home/content'
  })
}