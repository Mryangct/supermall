<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active: index ===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
     this.currentIndex=index;
     this.$emit('tabclick',index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 44px;
  line-height: 44px;
  background-color: #f6f6f6;
}

.tab-control-item{
  flex: 1;
}

.tab-control-item span{
  padding: 5px;
}
.active{
  color: #eba9b6;
}
.active span{
  border-bottom: 3px solid #eba9b6;
}
</style>