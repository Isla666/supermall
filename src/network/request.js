import axios from 'axios'

// 因为axios本身返回的就是一个promise，所以我们直接返回就行
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })


  // 拦截器的处理
  // 全局拦截
  // axios.interceptors

  // 实例请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 拦截之后，一定要返回出去，不然前面拿不到config.main.js 100行  console.log(err)  会报错
    return config
    // 请求拦截的作用：
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面显示一个请求的图标
    // 3.某些网络请求比如（登陆token）必须携带一些特殊信息,就可以在这里做判断，拦截并且做跳转让用户去登陆
  },err=>{
    // console.log(err);
  })


  //响应拦截
  instance.interceptors.response.use(res =>{
    // console.log(res)
    return res.data;
  },err =>{
    console.log(err)
  })

  return instance(config)    //此函数返回的是一个promise函数
}

// new Promise 方式
/* export function request(config){
  return new Promise((resolve,reject)=>{
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })

    // 2.发送真正的网络请求
    instance(config).then(res=>{
      resolve(res);
    }).catch(err=>{
      reject(err);
    })
  })
} */


// 只传递一个参数
/* export function request(config){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 发送真正的网络请求
  instance(config.baseConfig).then(res=>{
    config.success(res);
  }).catch(err=>{
    config.failure(err)
  })
} */


/* export function request(config,success,failure){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 发送真正的网络请求
  instance(config).then(res=>{
    success(res);
  }).catch(err=>{
    failure(err)
  })

} */