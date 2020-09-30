<template>
  
  <!-- 用户列表 -->
    
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
          <el-aside width="400px">
                <i class=" el-icon-s-custom" style="font-size: 300px; color: black;margin: 30px"></i>
                <table style="color: #000;margin: 20px;" :data="data">
                  <th>
                    <tr class="KeHu_tr">姓名：<spon >{{name}}</spon></tr>
                    <tr class="KeHu_tr">地址：<spon>{{position}}</spon></tr>
                    <tr class="KeHu_tr">客户评级：<spon>{{}}</spon></tr>
                  </th>
                </table>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>

          <el-main>
            <el-table :data="data">
              <el-table-column prop="visitTime" label="  ——历史访问时间——" width="180">
              </el-table-column>
              <el-table-column  label="——邮箱——" width="180">{{tel}}
              </el-table-column>
              <el-table-column prop="tel" label="——手机——" width="180">
              </el-table-column>
            </el-table>
          </el-main>
          <el-footer height="300px">
          </el-footer>
      </el-container>
        

    </el-container>

</template>

<script>
export default {
   data() {
     
      return {
            id:this.$store.state.SData_Company[0].client[1].id, //k客户编号
            name:this.$store.state.SData_Company[0].client[1].name, //客户名称
            tel:this.$store.state.SData_Company[0].client[1].tel, //手机
            email: '', //邮箱
            position: this.$store.state.SData_Company[0].client[1].position, //地址
            rate: '', //信誉评级
            visitTime: '', //访问时间
            order: [0, 1, 2, 3] //订单
          
      }
      
      },
   

      

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