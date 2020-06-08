<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3"  :pull-up-load="true" @scroll="contentscroll" @pullingUp="loadmore" >
      <home-swiper :banners="banners"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature :features="features"></feature>
      <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
      <goodlists :goods="showgoods"></goodlists>
    </scroll>
    <back-top @click.native="backclick" v-show="isshow"></back-top>
    <div style="height: 44px"></div>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper';
import RecommendsView from './childComps/RecommendView'
import Feature from './childComps/Feature'

import NavBar from 'components/common/navbar/NavBar';
import TabControl from "components/content/tabControl/TabControl";
import Goodlists from "components/content/goods/Goodlists";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";


import { getHomeData ,getHomeGoods} from 'network/home';
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendsView,
    Feature,
    NavBar,
    TabControl,
    Goodlists,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends:[],
      features:[],
      goods:{
        'lx':{page:0,list:[]},
        'xk':{page: 0,list: []},
        'jx':{page:0,list:[]}
      },
      currentType:'lx',
      isshow:false,

    };
  },
  created() {
    this.getHomeData();

    this.getHomeGoods('lx');
    this.getHomeGoods('xk');
    this.getHomeGoods('jx');

  },
  mounted() {

    this.$bus.$on('imgload',()=>{
      // console.log("sdfdfdf");
      this.$refs.scroll.refresh();
      console.log("======");

    })
  },
  methods:{

    tabclick(index){
      // console.log(index);
      switch (index){
        case 0 :
          this.currentType = 'lx';
          break;
        case 1 :
          this.currentType ='xk';
          break;
        case 2 :
          this.currentType ='jx'
      }
    },


   getHomeData(){
     getHomeData().then(res => {
       this.banners = res.data.banner.list;
       this.recommends=res.data.pw.list;
       this.features=res.data.bzlx.list;
     });
   },
   getHomeGoods(type){
     const page = this.goods[type].page+1;
     getHomeGoods(type,page).then(res=>{
       this.goods[type].list.push(...res.data.data);
       this.goods[type].page+=1;
        // console.log(res);
       this.$refs.scroll.finishPullUp()
     })

   },

   backclick(){
      this.$refs.scroll.scrollTo(0,0,500)
   },
    contentscroll(position){
      this.isshow = -(position.y) >1000
    },
    loadmore(){
      this.getHomeGoods(this.currentType)
    }
  },
  computed:{
    showgoods(){
     return this.goods[this.currentType].list
    }
  }
};
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;

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
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 10;
}
/*.content{*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*}*/


.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
</style>
