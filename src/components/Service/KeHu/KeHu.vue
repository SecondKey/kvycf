<template>
  <div class="kehu-page">
    <el-container class="kehu-box">
      <KeHuItem2></KeHuItem2>
      <KeHuItem1></KeHuItem1>
    </el-container>
  </div>
</template>

<script>
import KeHuItem1 from './KeHuItem1'
import KeHuItem2 from './KeHuItem2'
export default {
  components: {
    KeHuItem1: KeHuItem1,
    KeHuItem2: KeHuItem2
  }
}
</script>

<style>
.kefu-page {
  width: 1500px;
  height: 1180px;
  background-color: blue;
}
.kehu-box {
  width: 1400px;
  height: 1100px;
  background-color: #fff;

  top: 70px;
  left: 70px;
  border: 1px solid;
}
</style>
