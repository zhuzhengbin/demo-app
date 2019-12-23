import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const instance = originAxios.create({
      baseURL: '/api/',
      // baseURL: 'localhost:8086',
      timeout: 500
    });

    // 中间可以加上两个拦截器

    // 传入对象进行网络请求
    instance(option).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}


