<template>
  <div class="kehu-page">
    <KeHuItem class="kehu-box"></KeHuItem>
  </div>
</template>

<script>
import KeHuItem from './KeHuItem'
export default {
  components: {
    KeHuItem: KeHuItem
  }
}
</script>

<style>
.kefu-page {
  width: 1410px;
  height: 1160px;
  background-color: blue;
}
.kehu-box {
  width: 1380px;
  height: 1120px;
  background-color: blueviolet;
  position: absolute;
  top: 50px;
  left: 40px;
}
</style>
