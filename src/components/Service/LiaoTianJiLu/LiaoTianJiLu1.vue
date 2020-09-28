<template>
  <div class="liaotianjilu1-page">聊天记录
      <LiaoTianJiLu1Item class="liaotianjilu1-box"> </LiaoTianJiLu1Item>
  </div>
</template>

<script>
import LiaoTianJiLu1Item from './LiaoTianJiLu1Item'
export default {
  components:{
    'LiaoTianJiLu1Item':LiaoTianJiLu1Item
  },
}
</script>

<style>
.liaotianjilu1-page{
  width: 1500px;
  height: 1180px;
  background-color: greenyellow;
  font-size: 2em;
}
.liaotianjilu1-box{
    width: 1450px;
    height: 800px;
    position: absolute;
    top: 60px;
    left: 25px;
    background-color: brown;
}
</style>