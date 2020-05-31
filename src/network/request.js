import axios from 'axios'

export function request(config){
  const instance =axios.create({
    baseURL:'http://127.0.0.1/think/public/index.php/index/index',
    timeout:5000
  })


//请求拦截
instance.interceptors.request.use(config=>{
  return config
},err=>{

})


//响应拦截
instance.interceptors.response.use(config=>{
  return config
},err=>{

})

return instance(config)
}
