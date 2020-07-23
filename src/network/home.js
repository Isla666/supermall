import {request} from "./request";
import {requestLocal} from "./requestLocal";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    method: "GET",
  })
}

//根据数据结构，我们这里需要传具体是哪个数据，和页面，所以传type和page
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    method: "GET",
    // 动态传值
    params: {
      type,
      page
    }
  })
}


// 商品列表
export function getGoods(){
  // console.log(requestLocal)
  return requestLocal({
    url:'/goods',
    method: "GET",
  })
}
export function addGoods(data){
  return requestLocal({
    url:'/goods',
    method: "post",
    // 动态传值
    data
  })
}
export function editGoods(params,data){
  return requestLocal({
    url:`/goods/${params.id}`,
    method: "put",
    data
  })
}
export function delGoods(params){
  return requestLocal({
    url:`/goods/${params.id}`,
    method: "delete",
  })
}
