<template>
  <div class="containedDiv" style="height:950px">
    <HuiHuaItem1 class="huihua-box1">会话人表格</HuiHuaItem1>
    <HuiHuaItem2 class="huihua-box2">会话内容</HuiHuaItem2>
    <HuiHuaItem3 class="huihua-box3">会话人信息</HuiHuaItem3>
  </div>
</template>

<script>
import HuiHuaItem1 from './HuiHuaItem1'
import HuiHuaItem2 from './HuiHuaItem2'
import HuiHuaItem3 from './HuiHuaItem3'
export default {
  components: {
    HuiHuaItem1: HuiHuaItem1,
    HuiHuaItem2: HuiHuaItem2,
    HuiHuaItem3: HuiHuaItem3
  }
}
</script>

<style>
.huihua-page {
  width: 1410px;
  height: 1160px;
  background-color: greenyellow;
}
.huihua-box1 {
  width: 240px;
  height: 850px;
  background-color: whitesmoke;
  position: absolute;
  top: 50px;
  left: 40px;
}
.huihua-box2 {
  width: 850px;
  height: 850px;
  background-color: green;
  position: absolute;
  top: 50px;
  left: 290px;
}
.huihua-box3 {
  width: 240px;
  height: 850px;
  background-color: cadetblue;
  position: absolute;
  top: 50px;
  left: 1150px;
}
</style>
