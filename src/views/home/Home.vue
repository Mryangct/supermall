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
export default {
  name: "Home",
  components: {
    NavBar
  }

};
</script>

<style scoped>
.home-nav{
  background: #e68f8f;
  color: #fff;
}
</style>
