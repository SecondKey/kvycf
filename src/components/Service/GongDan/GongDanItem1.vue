<template>
  <el-aside width="300px" style="background-color: #ffffff">

    <!--  -->
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title" style="background-color: black"> <P class="Index_1st">普通用户</p></template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户1</el-menu-item>
            <el-menu-item index="1-2">用户2</el-menu-item>
            <el-menu-item index="1-3">用户3</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
        <el-submenu index="2">
          <template slot="title"><P class="Index_1st">高级用户</P></template>
          <el-menu-item-group>
            <el-menu-item index="2-1">用户4</el-menu-item>
            <el-menu-item index="2-2">用户5</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><P class="Index_1st">至尊用户</P></template>
          <el-menu-item-group>
            <el-menu-item index="3-1">用户6</el-menu-item>
            <el-menu-item index="3-2">用户7</el-menu-item>
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