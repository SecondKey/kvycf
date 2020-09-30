<template>
  <div class="shezhi-page">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <SheZhiItem1 class="shezhi-box1">黑名单设置</SheZhiItem1>
    <SheZhiItem2 class="shezhi-box2">设置客服信息</SheZhiItem2>
  </div>
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
