<template>
  <div class="containedDiv" style="height:880px">
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
  width: 235px;
  height: 850px;
  background-color: whitesmoke;
  position: absolute;
  top: 15px;
  left: 15px;
}
.huihua-box2 {
  width: 820px;
  height: 850px;
  background-color: green;
  position: absolute;
  top: 15px;
  left: 265px;
}
.huihua-box3 {
  width: 320px;
  height: 850px;
  background-color: cadetblue;
  position: absolute;
  top: 15px;
  left: 1075px;
}
</style>
