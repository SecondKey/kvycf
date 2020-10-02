<template>
  <!-- 用户列表 -->
    
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
       
          <el-aside >
              <i class=" el-icon-s-custom" style="font-size: 160px; color: black;margin: 30px"></i>
               
              <div >
                <p class="KeHu_tr">名字：{{name}}  </p>
                <p class="KeHu_tr">地址：{{position}}</p>
                <p class="KeHu_tr">评级：{{rate}}</p>
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

            // id: ,
            name:this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client[this.$store.state.OData_Client_nowChoiseClient].name, //客户名称
            //tel: this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client.tel , //手机
            //email:  this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client.email, //邮箱
            position: this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client[this.$store.state.OData_Client_nowChoiseClient].position, //地址
            rate:this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client[this.$store.state.OData_Client_nowChoiseClient].rate, //信誉评级
            //visitTime:  this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client.visitTime, //访问时间
            // order: [0, 1, 2, 3] //订单

            }
        },
        methods:{

        //#region 测试用例
        // test(){
        //   console.log(this.$store.state.OData_Client_nowChoiseClient)
        //   console.log(this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany].client[this.$store.state.OData_Client_nowChoiseClient].name)
        // }
        //#endregion

        },

        //#region 刷新页面
        computed:{
          Updata_name(){
            return this.$store.state.OData_Client_nowChoiseClient
          }
        }
        //#endregion

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
