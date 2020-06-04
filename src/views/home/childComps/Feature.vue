<!-- 本周推荐 -->
<template>
  <div class="feature">
    <div v-for="(item,index) in  features" :key="index">
      <a>
        <img :src="item.image"
             alt="">
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Feature',
  props:{
    features:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style  scoped>
.feature img{
  width: 100%;
}
</style>
