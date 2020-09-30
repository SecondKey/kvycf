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
            
            id:this.$store.state.SData_Company[0].client[1].id, //k客户编号
            name:this.$store.state.SData_Company[0].client[1].name,//客户名称
            tel:this.$store.state.SData_Company[0].client[1].tel, //手机
            email:this.$store.state.SData_Company[0].client[1].email, //邮箱
            position:this.$store.state.SData_Company[0].client[1].position, //地址
            rate: this.$store.state.SData_Company[0].client[1].rate, //信誉评级
            visitTime: this.$store.state.SData_Company[0].client[1].visitTime, //访问时间
            order: [0, 1, 2, 3] //订单
            
            }
        },
        mounted:function() {
          var _this=this
          KeHumsg.on('val',function(m) {
            _this.name=m;
          })
          
        },

    methods: {
      menu1:function(){
        KeHumsg.$emit("val","this.$store.state.SData_Company[0].client[1]");
      },
      menu2:function(){
        KeHumsg.$emit("val","this.$store.state.SData_Company[0].client[2]");
      }
   
  },
 
}
</script>

<style>

</style>