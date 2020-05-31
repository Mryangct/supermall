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
<<<<<<< HEAD
import {getHomeData} from "network/home"
=======
>>>>>>> 4d9286e5e135d8801d9d67b1fafafccb59ca4a52
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
