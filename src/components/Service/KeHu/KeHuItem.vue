<template>
  <el-container class="kehu-box">
  <!-- 用户列表 -->
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">

    <!--  -->
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"> <P class="Index_1st">普通用户</p></template>
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
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
          <el-aside width="400px">
                <i class=" el-icon-s-custom" style="font-size: 300px; color: black;margin: 30px"></i>
                <table style="color: #000;margin: 20px;" :data="tableData">
                  <th>
                    <tr class="KeHu_tr">姓名：<spon >{{}}</spon></tr>
                    <tr class="KeHu_tr">公司：<spon>{{}}</spon></tr>
                    <tr class="KeHu_tr">客户评级：<spon>{{}}</spon></tr>
                  </th>
                </table>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>

          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="  ——历史访问时间——" width="180">
              </el-table-column>
              <el-table-column prop="address" label="——上次访问IP地址——" width="180">
              </el-table-column>
              <el-table-column prop="telephone" label="——联系方式——" width="180">
              </el-table-column>
            </el-table>
          </el-main>
          <el-footer height="300px">
          </el-footer>
      </el-container>
        

    </el-container>

   </el-container>
</template>

<script>
export default {
   data() {
      const item = {
        date: '2016-05-02',
        address: '192.168.9.251',
        telephone: '8008208820'
      };
      return {
        tableData: Array(30).fill(item),
      }
    }
  }
</script>


<style>
.Index_1st{
 margin-left:50px
}

.KeHu_tr{
  display: block;
  text-align:left;
  font-size: 30px;
  margin: 10px;
}
</style>