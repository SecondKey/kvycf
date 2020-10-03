<template>
  <div class="signUpInputDiv" style="height:800px">
    <el-form
      label-width="120px"
      :rules="rules"
      :model="formData"
      ref="ruleForm"
    >
      <el-form-item label="企业编号">
        <el-select
          v-model="formData.SCName"
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
      <el-form-item label="客服名称" prop="SName">
        <el-input v-model="formData.SName"></el-input>
      </el-form-item>
      <el-form-item label="真实名称" prop="STName">
        <el-input v-model="formData.STName"></el-input>
      </el-form-item>
      <el-form-item label="输入账号" prop="SAcc">
        <el-input v-model="formData.SAcc"></el-input>
      </el-form-item>
      <el-form-item label="输入密码" prop="SPwd">
        <el-input v-model="formData.SPwd"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码" prop="DPwd">
        <el-input v-model="formData.DPwd"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="STel">
        <el-input v-model="formData.STel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="SEmail">
        <el-input v-model="formData.SEmail"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="SCode">
        <el-popover
          ref="popover"
          placement="bottom"
          width="400px"
          trigger="focus"
        >
          <img src="../../../img/yzm.png" style="width:200px;height:80px" />
        </el-popover>
        <el-input v-popover:popover v-model="formData.SCode"></el-input>
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
        <div style="font-size:20px">客服名称：{{ formData.SName }}</div>
        <div style="font-size:20px">真实名称：{{ formData.STName }}</div>
        <div style="font-size:20px">账户：{{ formData.SAcc }}</div>
        <div style="font-size:20px">密码：{{ formData.SPwd }}</div>
        <div style="font-size:20px">电话：{{ formData.STel }}</div>
        <div style="font-size:20px">邮箱：{{ formData.SEmail }}</div>
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.SPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      clauseVisible: false,
      infoVisible: false,
      readClause: false,

      formData: {
        SCName: '凯文云',
        Sid: 0,
        SName: '',
        STName: '',
        SAcc: '',
        SPwd: '',
        DPwd: '',
        STel: '',
        SEmail: '',
        SCode: ''
      },
      rules: {
        SName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        STName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        SAcc: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        SPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        DPwd: [{ validator: validatePass2, trigger: 'blur' }],
        STel: [{ required: true, message: '请输入电话', trigger: 'blur' }],
        SEmail: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        SCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },

  methods: {
    CompanySelect(val) {
      this.Sid = val
    },
    CheckYzm() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          if (this.formData.SCode == this.$store.state.Data_VerificationCode) {
            this.infoVisible = true
          } else {
            this.$message.error({
              message: '验证码错误',
              center: true
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    ToNextPage() {
      this.clauseVisible = false
      this.$store.commit('Service_SignUp', {
        id: this.$store.state.Data_SignUp_Company_ID,
        newService: {
          name: this.formData.SName,
          tName: this.formData.STName,
          account: this.formData.SAcc,
          pwd: this.formData.SPwd,
          tel: this.formData.STel,
          email: this.formData.SEmail
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
