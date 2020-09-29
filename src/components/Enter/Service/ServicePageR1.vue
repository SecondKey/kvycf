<template>
  <div class="signUpInputDiv" style="height:700px">
    <el-form label-width="120px">
      <el-form-item label="企业编号">
        <el-select
          v-model="SCName"
          filterable
          placeholder="请选择"
          style="width:230px"
          @change="CompanySelect"
        >
          <el-option
            v-for="item in $store.state.SData_Company"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客服名称">
        <el-input v-model="SName"></el-input>
      </el-form-item>
      <el-form-item label="真实名称">
        <el-input v-model="STName"></el-input>
      </el-form-item>
      <el-form-item label="输入账号">
        <el-input v-model="SAcc"></el-input>
      </el-form-item>
      <el-form-item label="输入密码">
        <el-input v-model="SPwd"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="STel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="SEmail"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-popover
          ref="popover"
          placement="bottom"
          width="400px"
          trigger="focus"
        >
          <img src="../../../img/yzm.png" style="width:200px;height:80px" />
        </el-popover>
        <el-input v-popover:popover v-model="SCode"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="clauseVisible = true"
      >《相关法律条款》</el-button
    >
    <div></div>
    <el-checkbox v-model="readClause">我已阅读相关条款</el-checkbox>

    <el-button
      type="primary"
      style="width:350px;margin-top:50px"
      @click="CheckYzm"
      :disabled="!readClause"
      >提交</el-button
    >

    <el-dialog
      title="请确认信息正确"
      :visible.sync="infoVisible"
      width="400px"
      center=""
    >
      <span style="text-align:center">
        <div style="font-size:20px">客服名称：{{ SName }}</div>
        <div style="font-size:20px">真实名称：{{ STName }}</div>
        <div style="font-size:20px">账户：{{ SAcc }}</div>
        <div style="font-size:20px">密码：{{ SPwd }}</div>
        <div style="font-size:20px">电话：{{ STel }}</div>
        <div style="font-size:20px">邮箱：{{ SEmail }}</div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ToNextPage">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="法律条款："
      :visible.sync="clauseVisible"
      width="400px"
      center
    >
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clauseVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clauseVisible: false,
      infoVisible: false,
      readClause: false,

      SCName: '',
      Sid: 0,
      SName: '',
      STName: '',
      SAcc: '',
      SPwd: '',
      STel: '',
      SEmail: '',
      SCode: ''
    }
  },

  methods: {
    CompanySelect(val) {
      console.log(val)
      this.Sid = val
    },
    CheckYzm() {
      if (this.SCode == this.$store.state.Data_VerificationCode) {
        this.infoVisible = true
      } else {
        this.$message.error({
          message: '验证码错误',
          center: true
        })
      }
    },

    ToNextPage() {
      this.clauseVisible = false
      this.$store.commit('Service_SignUp', {
        id: this.$store.state.Data_SignUp_Company_ID,
        newService: {
          name: this.SName,
          tName: this.STName,
          account: this.SAcc,
          pwd: this.SPwd,
          tel: this.STel,
          email: this.SEmail
        }
      })
      this.$router.push('/EnterSignUpPage/EnterServicePage/EnterServicePageR2')
      this.$store.commit('Layout_SetServiceProgress', 1)
    }
  },
  created: function() {
    this.$store.commit('Layout_SetServiceProgress', 0)
  }
}
</script>

<style></style>
