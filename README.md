# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#### 什么是跨域
> 端口，域名，协议，三者有一个不同就是属于跨域 （http://www.baidu.com:8080）

+ 端口：8080
+ 域名：www.baidu.com
+ 协议：http/https

为什么有跨域，是浏览器为了安全起见所作得限制

### 解决跨域的方式
+ jsonp 
> 利用了 script 标签的 src 属性，（src有天然跨域的属性）来实现跨域，只支持 get 请求
```js
$.ajax({
  url:'',
  type:'',
  data:{},
  dataType:'json/jsonp'
})
```
+ CORS
> 后端去配置跨域

+ nginx
> 利用 nginx 服务器去实现跨域，均衡负载，轮询

+ webpack 中的 dev-server

> 配置 proxy

```js
//http://127.0.0.1:3000/api/userList
// get('/api/userList')
porxy:{
  '/api':'http://127.0.0.1:3000'
}
```