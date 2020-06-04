<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature :features="features"></feature>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendsView from './childComps/RecommendView'
import Feature from './childComps/Feature'

import { getHomeData } from 'network/home';
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    Feature
  },
  data() {
    return {
      banners: [],
      recommends:[],
      features:[],
    };
  },
  created() {
    getHomeData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends=res.data.pw.list;
      this.features=res.data.bzlx.list;
    });
  }
};
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background: #e68f8f;
  color: #fff;
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>
