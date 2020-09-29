<template>
  <div class="signUpInputDiv" style="height:400px">
    <el-form label-width="120px">
      <el-form-item label="管理员名称">
        <el-input v-model="adminName"></el-input>
      </el-form-item>
      <el-form-item label="输入账号">
        <el-input v-model="adminAcc"></el-input>
      </el-form-item>
      <el-form-item label="输入密码">
        <el-input v-model="adminPwd"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="adminEmail"></el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      style="width:350px;margin-top:50px"
      @click="clauseVisible = true"
      >提交</el-button
    >

    <el-dialog
      title="请确认信息正确"
      :visible.sync="clauseVisible"
      width="400px"
      center=""
    >
      <span style="text-align:center">
        <div style="font-size:20px">管理员名称：{{ adminName }}</div>
        <div style="font-size:20px">管理员账户：{{ adminAcc }}</div>
        <div style="font-size:20px">管理员密码：{{ adminPwd }}</div>
        <div style="font-size:20px">邮箱：{{ adminEmail }}</div>
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

      adminName: '',
      adminAcc: '',
      adminPwd: '',
      adminEmail: ''
    }
  },
  methods: {
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
