<template>
  <el-aside width="300px" style="background-color: #ffffff">

    <!--  -->
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title" style="background-color: black" > <P class="Index_1st" style="text-align:left">工单</p></template>
          <el-menu-item-group>
            <el-menu-item index="1-1">全部工单</el-menu-item>
            <el-menu-item index="1-2">待处理的</el-menu-item>
            <el-menu-item index="1-3">最近工单</el-menu-item>
            <el-menu-item index="1-4">抄送工单</el-menu-item>
            <el-menu-item index="1-5">处理中工单</el-menu-item>
            <el-menu-item index="1-5">已解决工单</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
          </el-menu>
    </el-aside>
</template>

<script>
export default {

}
</script>

<style>
</style>