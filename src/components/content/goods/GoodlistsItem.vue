<template>
  <div class="good-item">
    <img :src="goodsitem.clientUrl" alt="" @load="imgload">
    <div class="good-info">
      <p>{{goodsitem.clientUrl}}</p>
      <span class="price">{{goodsitem.itemMarks}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodlistsItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgload(){
      this.$bus.$emit('imgload')
    }
  }
}
</script>

<style scoped>
.good-item{
  padding-bottom: 40px;
  width: 47%;
  position: relative;
}
.good-item img{
  width: 100%;
  border-radius: 5px;
}
.good-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.good-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.good-info .price{
  color: #eba9b6;
  margin-right: 20px;
}

.good-info .collect{
  position: relative;
}
.good-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 12px;
  height: 12px;
  background: url("~assets/img/common/fav.svg") 0 0/12px 12px;
}
</style>