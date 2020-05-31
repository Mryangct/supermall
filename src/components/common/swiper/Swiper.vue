<!-- 轮播图 -->
<template>
<div class="hy-swiper">
  <div class="swiper">
    <slot></slot>
  </div>
  <slot name="indicator">

  </slot>
  <div class="indicator">
    <slot name="indicator">

    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'Swiper',
  props:{
    intercal:{
      type:Number,
      default:3000
    },
    animDuration:{
      type:Number,
      default:300
    },
    moveRation:{
      type:Number,
      default:0.25
    },
    showIndicatior:{
      type:Boolean,
      default:true
    }
  },
  data:function(){
    return {
      slideCount:0,//元素个数
      totalWidth:0,//swiper的宽度
      swiperStyle:{},//swiper样式
      currentIndex:1,//当前的index
      scrolling:false,//是否正在滚动
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
