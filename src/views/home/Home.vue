<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
      
    </swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import { getHomeData } from 'network/home';
import Swiper from 'components/common/swiper/Swiper';
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,

  },
  data() {
    return {
      banners: []
    };
  },
  created() {
    getHomeData().then(res => {
      this.banners = res.data.banner.list;
    });
  }
};
</script>

<style scoped>
.home-nav {
  background: #e68f8f;
  color: #fff;
}
</style>
