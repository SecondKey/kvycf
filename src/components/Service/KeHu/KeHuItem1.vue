<template>
  
  <!-- 用户列表 -->
    
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
       
          <el-aside width="400px" :data="this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client[1]">
                <i class=" el-icon-s-custom" style="font-size: 300px; color: black;margin: 30px"></i>
               
                <table style="color: #000;margin: 20px;">
                  <th>
                    <tr class="KeHu_tr">姓名：{{name}}</tr>
                    <tr class="KeHu_tr">地址：{{position}}</tr>
                    <tr class="KeHu_tr">客户评级：{{rate}}</tr>
                  </th>
                </table>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>
          <el-main>
            <el-table :data="this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client[1]">
              <el-table-column prop="visitTime" label="历史访问时间" width="180">
              </el-table-column>
              <el-table-column prop="email" label="邮箱" width="180">
              </el-table-column>
              <el-table-column prop="tel" label="手机" width="180">
              </el-table-column>
            </el-table>
          </el-main>
          <el-footer height="300px">
          </el-footer>
      </el-container>

     
    </el-container>

</template>

<script>



import KeHumsg from "./KeHumsg.js"
export default {

   data() {
      return {
            // id: ,
            // name: , //客户名称
            // tel: , //手机
            // email: , //邮箱
            // position: , //地址
            // rate: , //信誉评级
            // visitTime: , //访问时间
            // order: [0, 1, 2, 3] //订单

            }
        },
         mounted:function() {
          var _this=this
          KeHumsg.on('val',function(m) {
            _this.kk=m;
          })
          
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