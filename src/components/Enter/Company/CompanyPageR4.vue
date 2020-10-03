<template>
  <div class="signUpInputDiv" style="height:400px">
    <el-form
      label-width="120px"
      :rules="rules"
      :model="formData"
      ref="ruleForm"
    >
      <el-form-item label="管理员名称" prop="adminName">
        <el-input v-model="formData.adminName"></el-input>
      </el-form-item>
      <el-form-item label="输入账号" prop="adminAcc">
        <el-input v-model="formData.adminAcc"></el-input>
      </el-form-item>
      <el-form-item label="输入密码" prop="adminPwd">
        <el-input v-model="formData.adminPwd"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="adminEmail">
        <el-input v-model="formData.adminEmail"></el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      style="width:350px;margin-top:50px"
      @click="ShowInfo"
      >提交</el-button
    >

    <el-dialog
      title="请确认信息正确"
      :visible.sync="clauseVisible"
      width="400px"
      center=""
    >
      <span style="text-align:center">
        <div style="font-size:20px">管理员名称：{{ formData.adminName }}</div>
        <div style="font-size:20px">管理员账户：{{ formData.adminAcc }}</div>
        <div style="font-size:20px">管理员密码：{{ formData.adminPwd }}</div>
        <div style="font-size:20px">邮箱：{{ formData.adminEmail }}</div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ToNextPage">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clauseVisible: false,
      formData: {
        adminName: '',
        adminAcc: '',
        adminPwd: '',
        adminEmail: ''
      },
      rules: {
        adminName: [{ required: true, message: '管理员姓名', trigger: 'blur' }],
        adminAcc: [{ required: true, message: '管理员账户', trigger: 'blur' }],
        adminPwd: [{ required: true, message: '管理员密码', trigger: 'blur' }],
        adminEmail: [{ required: true, message: '管理员邮箱', trigger: 'blur' }]
      }
    }
  },
  methods: {
    ShowInfo() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.clauseVisible = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    ToNextPage() {
      this.clauseVisible = false
      this.$store.commit('CompanyInfo_SignUp_AddAdmin', {
        id: this.$store.state.Data_SignUp_Company_ID,
        newAdmin: {
          name: this.adminName,
          account: this.adminAcc,
          pwd: this.adminPwd,
          email: this.adminEmail
        }
      })
      this.$router.push('/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR5')
      this.$store.commit('Layout_SetCompanyProgress', 5)
    }
  }
}
</script>

<style></style>
