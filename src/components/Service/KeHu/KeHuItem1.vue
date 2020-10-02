<template>
  <!-- 用户列表 -->
    
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
       
          <el-aside v-if="this.$store.state.currentCustomer">
              <i class=" el-icon-s-custom" style="font-size: 160px; color: black;margin: 30px"></i>
               
              <div>
                <p class="KeHu_tr">名字：{{this.$store.state.currentCustomer.name}}  </p>
                <p class="KeHu_tr">地址：{{this.$store.state.currentCustomer.position}}</p>
                <p class="KeHu_tr">评级：{{this.$store.state.currentCustomer.rate}}</p>
              </div>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>
          <el-main>
            <el-table border style="width: 100%" :data="this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client">
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




export default {


   data() {
      return {
            customers:this.$store.state.SData_Company[0].client,
            

            }
        },
        methods:{


        },

        

     }
</script>

<style>
.Index_1st {
  margin-left: 50px;
}

.KeHu_tr {
  display: block;
  text-align:left;
  font-size: 20px;
  margin-top: 10px;
}
</style>
