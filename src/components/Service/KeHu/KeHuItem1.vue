<template>
  <!-- 用户列表 -->
    
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
       
          <el-aside v-if="this.$store.state.currentCustomer">
              <div>
                <el-image
                  style="width: 200px; height: 200px;margin-top:20px ;"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                 ></el-image>
               </div>
              <div>
                <p class="KeHu_tr">名字：{{this.$store.state.currentCustomer.name}}</p>
                <p class="KeHu_tr">地址：{{this.$store.state.currentCustomer.position}}</p>
                <p class="KeHu_tr">邮箱：{{this.$store.state.currentCustomer.email}}</p>
                <p class="KeHu_tr">电话：{{this.$store.state.currentCustomer.tel}}</p>
                <p class="KeHu_tr">评级：{{this.$store.state.currentCustomer.rate}}</p>
                <!-- <el-switch inactive-text=""></el-switch> -->
              </div>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>
          <el-main>
            <el-table border style="width: 100%" :data="List_data">
              <el-table-column prop="VisitTime" label="历史访问时间" width="180">
              </el-table-column>
              <el-table-column prop="VisitIp" label="历史访问ip" width="180">
              </el-table-column>
              <el-table-column prop="VisitEq" label="历史访问设备" width="180">
              </el-table-column>
            </el-table>
          </el-main>

      </el-container>

     
    </el-container>

</template>

<script>




export default {


   data() {
     const List_data={
                VisitTime:'2018-9-20',
                VisitIp:'192-168-9-251',
                VisitEq:'pc'
              };
      return { 

            customers:this.$store.state.SData_Company[0].client,
            List_data: Array(10).fill(List_data)

            }
        }
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
  margin: 10px 20px;
}
</style>
