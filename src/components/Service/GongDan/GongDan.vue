<template>
  <div class="containedDiv">
    <GongDanItem1 class="gongdan-box1">工单目录表格</GongDanItem1>
    <GongDanItem2 class="gongdan-box2">工单内容</GongDanItem2>
  </div>
</template>

<script>
import GongDanItem1 from './GongDanItem1'
import GongDanItem2 from './GongDanItem2'
export default {
  components: {
    GongDanItem1: GongDanItem1,
    GongDanItem2: GongDanItem2
  }
}
</script>

<style>
.gongdan-page {
  width: 1410px;
  height: 1160px;
  background-color: green;
}
.gongdan-box1 {
  width: 300px;
  height: 550px;
  position: absolute;
  background-color: chocolate;
  top: 40px;
  left: 50px;
}
.gongdan-box2 {
  width: 1000px!important;
  height: 550px!important;
  position: absolute;
  background-color: cornflowerblue;
  top: 40px;
  left: 370px;
}
</style>
