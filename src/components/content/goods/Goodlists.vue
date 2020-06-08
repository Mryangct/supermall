<template>
  <div class="goods">
    <goodlists-item v-for="item in goods" :goodsitem="item">

    </goodlists-item>

  </div>
</template>

<script>
import GoodlistsItem from "./GoodlistsItem";

export default {
  name: "Goodlists",
  components:{
    GoodlistsItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }

  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>