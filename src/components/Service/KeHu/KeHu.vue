<template>
    <div class="kehu-page">
    <KeHuItem class="kehu-box"></KeHuItem>
    </div>
</template>

<script>
import KeHuItem from './KeHuItem'
export default {
  components:{
    'KeHuItem':KeHuItem
  },
}
</script>

<style>
.kefu-page{
  width: 1500px;
  height: 1180px;
  background-color: blue;
}
.kehu-box{
  width: 1400px;
  height: 1100px;
  background-color: blueviolet;
  position: absolute;
  top: 70px;
  left: 70px;
}
</style>
