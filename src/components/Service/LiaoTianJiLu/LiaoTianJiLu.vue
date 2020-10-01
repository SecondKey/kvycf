<template>
  <div class="containedDiv">
    <!-- <h3 style="position:absolute;top:55px;left:70px">聊天目录</h3> -->
    <!-- <LiaoTianJiLuItem1 class="liaotianjilu-box1"></LiaoTianJiLuItem1> -->
    <LiaoTianJiLuItem2 class="liaotianjilu-box2"> </LiaoTianJiLuItem2>
  </div>
</template>

<script>
import LiaoTianJiLuItem1 from './LiaoTianJiLuItem1'
import LiaoTianJiLuItem2 from './LiaoTianJiLuItem2'
export default {
  components: {
    LiaoTianJiLuItem1: LiaoTianJiLuItem1,
    LiaoTianJiLuItem2: LiaoTianJiLuItem2
  }
}
</script>

<style>
.liaotianjilu-page {
  width: 1410px;
  height: 1160px;
  background-color: blue;
}
.liaotianjilu-box1 {
  width: 100px;
  height: 30px;
  position: absolute;
  top: 70px;
  right: 110px;
  border-radius: 2px;
  background-color: chartreuse;
  /* display: inline-block; */
}
.liaotianjilu-box2 {
  width: 1200px!important;
  height: 600px!important;
  position: absolute;
  top: 40px!important;
  left: 70px;
  background-color: white!important;
}
.liaotianjilu-h2 {
  display: inline;
}
</style>
