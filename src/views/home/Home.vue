<template>
 <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">
       购物街
     </div>
   </nav-bar>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeData} from "network/home"
export default {
  name: "Home",
  components: {
    NavBar
  },
  data(){
    return {
      banners : []
    }
  },
  created(){
    getHomeData().then(res =>{
     this.banners=res.data.banner.list
    })
  }

};
</script>

<style scoped>
.home-nav{
  background: #e68f8f;
  color: #fff;
}
</style>
