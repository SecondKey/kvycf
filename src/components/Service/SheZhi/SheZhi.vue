<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" style="height:100%">
    <div style="margin-top:20px;margin-left:16px">客服设置</div>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">客服信息设置</span>
    </el-menu-item>

    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title">常用语</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">自动回复</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">客户设</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-document"></i>
      <span slot="title">黑名单</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import SheZhiItem1 from './SheZhiItem1'
import SheZhiItem2 from './SheZhiItem2'
export default {
  components: {
    SheZhiItem1: SheZhiItem2,
    SheZhiItem2: SheZhiItem2
  }
}
</script>

<style>
.shezhi-page {
  width: 1410px;
  height: 1160px;
  background-color: violet;
}
.shezhi-box1 {
  width: 650px;
  height: 1100px;
  background-color: blue;
  position: absolute;
  top: 70px;
  left: 70px;
}
.shezhi-box2 {
  width: 650px;
  height: 1100px;
  background-color: yellow;
  position: absolute;
  top: 70px;
  left: 730px;
}
</style>
