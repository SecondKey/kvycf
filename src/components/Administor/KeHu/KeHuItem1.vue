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
                <br>

                <!-- #region -->
                <el-button type="text" @click="dialogFormVisible = true">填写加入黑名单通知</el-button>
                <el-dialog title="黑名单通知" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="客户ID" :label-width="formLabelWidth">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="拉黑理由" :label-width="formLabelWidth">                   
                    <el-input placeholder="请输入修改理由"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
              <!-- #endregion -->
               
               <el-switch
                  style="display: block"
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="白名单成员"
                  inactive-text="黑名单成员">
                </el-switch>
                 
              </div>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>
          <el-main>
            <el-table border style="width: 100%" :data="List_data">
              <el-table-column prop="VisitTime" label="历史访问时间" width="210">
              </el-table-column>
              <el-table-column prop="VisitIp" label="历史访问ip" width="210">
              </el-table-column>
              <el-table-column prop="VisitEq" label="历史访问设备" width="210">
              </el-table-column>
              <el-table-column prop="VisitRt" label="服务满意度" width="210">
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
                VisitEq:'pc',
                VisitRt:'非常满意'
              };
      return { 

            customers:this.$store.state.SData_Company[0].client,
            List_data: Array(15).fill(List_data),
            value: true,

          dialogFormVisible: false,
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
