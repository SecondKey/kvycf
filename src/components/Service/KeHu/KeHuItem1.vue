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
                <el-button type="text" @click="dialogFormVisible = true">提交修改黑名单申请</el-button>
                <el-dialog title="黑名单申请" :visible.sync="dialogFormVisible" append-to-body >

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                  <el-form-item label="客服ID" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入客户ID"></el-input>
                    </el-form-item>
                  <el-form-item label="修改理由" :label-width="formLabelWidth" placeholder="请输入修改理由" prop="reason">
                     <el-input type="textarea" v-model="ruleForm.reason" placeholder="请输入修改理由"></el-input>
                  </el-form-item>
               

                 <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                   </el-form>
              </el-dialog>
              <!-- #endregion -->
               
               <el-switch
                  style="display: block"
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="白名单成员"
                  inactive-text="黑名单成员"
                  disabled>
                </el-switch>
                 
              </div>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>
          <el-main>

            <!-- <table>
              <tr>
                <th>历史访问时间</th>
                <th>历史访问ip</th>
                <th>历史访问设备</th>
                <th>服务满意度</th>
              </tr>
            </table> -->
            <el-table border style="width: 100%" :data="this.$store.state.currentCustomer.history" >
              <el-table-column prop="VisitTime" label="历史访问时间" width="210">
              </el-table-column>
              <el-table-column prop="VisitIp" label="历史访问IP" width="210">
              </el-table-column>
              <el-table-column prop="VisitEq" label="历史访问设备" width="210">
              </el-table-column>
              <el-table-column prop="order" label="服务工单" width="210">
              </el-table-column>
            </el-table>
          </el-main>

      </el-container>

     
    </el-container>

</template>

<script>




export default {


   data() {
     
      return { 

            
            value: true,

            dialogFormVisible: false,
            ruleForm: {
            name: '',
            delivery: false,
            reason: '',
                },
            rules: {
            name: [
              { required: true, message: '请输入客服ID', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
            ],
            reason: [
              { required: true, message: '请选择修改理由', trigger: 'blur' },
            ],
          },
          formLabelWidth: '120px'
              
          }
   },
        methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('successful submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
