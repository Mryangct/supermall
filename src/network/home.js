import {request} from "./request"

export function getHomeData(){
  return request({
    url:'/gethomedata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/findtablist',
    params:{
      type,
      page
    }
  })
}