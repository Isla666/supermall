import {request} from "./request";

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