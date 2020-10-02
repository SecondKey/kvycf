<template>
  <el-aside width="200px" style="background-color: #ffffff">
    <!--  -->
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"> <P class="Index_1st">普通用户</P></template>
        <el-menu-item-group>
          <el-menu-item index="1-1" >{{ name1 }}</el-menu-item>
          <el-menu-item index="1-2">{{ name2 }}</el-menu-item>
          <el-menu-item index="1-3" @click="Change_KeHu_03">{{ name3 }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><P class="Index_1st">高级用户</P></template>
        <el-menu-item-group>
          <el-menu-item index="2-1">{{ name4 }}</el-menu-item>
          <el-menu-item index="2-2">{{ name5 }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><P class="Index_1st">至尊用户</P></template>
        <el-menu-item-group>
          <el-menu-item index="3-1">{{ name6 }}</el-menu-item>
          <el-menu-item index="3-2">{{ name6 }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {

      //#region name数据

      name1: this.$store.state.SData_Company[
        this.$store.state.Data_Login_Conpany
      ].client[0].name, //客户名称
      name2: this.$store.state.SData_Company[
        this.$store.state.Data_Login_Conpany
      ].client[1].name, //客户名称
      name3: this.$store.state.SData_Company[
        this.$store.state.Data_Login_Conpany
      ].client[2].name, //客户名称
      name4: this.$store.state.SData_Company[
        this.$store.state.Data_Login_Conpany
      ].client[3].name, //客户名称
      name5: this.$store.state.SData_Company[
        this.$store.state.Data_Login_Conpany
      ].client[4].name, //客户名称
      name6: this.$store.state.SData_Company[
        this.$store.state.Data_Login_Conpany
      ].client[5].name //客户名称

      //#endregion

    }
  },
  methods:{

     //#region 动态触发

      Change_KeHu_00(){
     
      this.$store.commit('OData_Client_SelectClient',0)
      
      
    },
     Change_KeHu_01(){
     
      this.$store.commit('OData_Client_SelectClient',1)
      
    },
     Change_KeHu_02(){
     
      this.$store.commit('OData_Client_SelectClient',2)
      
    },
    Change_KeHu_03(){
     
      this.$store.commit('OData_Client_SelectClient',3)
      // console.log(this.$store.state.OData_Client_nowChoiseClient)

    },
     Change_KeHu_04(){
     
      this.$store.commit('OData_Client_SelectClient',4)
      
    },
     Change_KeHu_05(){
     
      this.$store.commit('OData_Client_SelectClient',5)
      
    },

   //#endregion

   
  },
  
}
</script>

<style></style>
