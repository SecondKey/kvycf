<template>
  <el-aside width="300px" style="background-color: #ffffff">

    <!--  -->
      <el-menu :default-openeds="['1', '3']" >
        <el-submenu index="1">
          <template slot="title"> <P class="Index_1st">普通用户</p></template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="menu1">{{name}}</el-menu-item>
            <el-menu-item index="1-2" @click="menu2">{{name}}</el-menu-item>
            <el-menu-item index="1-3">{{name}}</el-menu-item>
          </el-menu-item-group>
          </el-submenu>
        <el-submenu index="2">
          <template slot="title"><P class="Index_1st">高级用户</P></template>
          <el-menu-item-group>
            <el-menu-item index="2-1">{{name}}</el-menu-item>
            <el-menu-item index="2-2">{{name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><P class="Index_1st">至尊用户</P></template>
          <el-menu-item-group>
            <el-menu-item index="3-1">{{name}}</el-menu-item>
            <el-menu-item index="3-2">{{name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
import KeHumsg from './KeHumsg.js'
export default {
   data() {
      return {
            name:this.$store.state.SData_Company[0].client[1].name,//客户名称
            }
        },
       

  //   methods: {
  //     menu1:function(){
  //       KeHumsg.$emit("val","1");
  //     },
  //     menu2:function(){
  //       KeHumsg.$emit("val","2");
  //     }
   
  // },
 
}
</script>

<style>

</style>