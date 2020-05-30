<!-- 导航 -->
<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot class="center"></slot></div>
  <div class="right"><slot class="right"></slot></div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;

}
.left, .right {
  width: 60px;
  background: red;
}

.center{
  flex: 1;
  background: rosybrown;
}
</style>
