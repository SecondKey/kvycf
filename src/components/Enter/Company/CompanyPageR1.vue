<template>
  <div class="signUpInputDiv" style="height:650px">
    <el-form
      label-width="120px"
      :rules="rules"
      :model="formData"
      ref="ruleForm"
    >
      <el-form-item label="企业名称" prop="companyName">
        <el-input v-model="formData.companyName"></el-input>
      </el-form-item>
      <el-form-item label="负责人" prop="principalName">
        <el-input v-model="formData.principalName"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="formData.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email"></el-input
      ></el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload class="avatar-uploader" :show-file-list="false" action="">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i
            v-else
            class="el-icon-plus avatar-uploader-icon"
            style="
  line-height: 178px;
  height: 178px;"
          ></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="clauseVisible = true"
      >《相关法律条款》</el-button
    >
    <div></div>
    <el-checkbox v-model="readClause">我已阅读相关条款</el-checkbox>
    <el-button
      type="primary"
      style="width:350px;margin-top:30px"
      @click="ShowInfo"
      :disabled="!readClause"
    >
      提交
    </el-button>

    <el-dialog
      title="请确认信息正确"
      :visible.sync="infoVisible"
      width="400px"
      center=""
    >
      <span style="text-align:center">
        <div style="font-size:20px">企业名称：{{ formData.companyName }}</div>
        <div style="font-size:20px">负责人：{{ formData.principalName }}</div>
        <div style="font-size:20px">联系电话：{{ formData.tel }}</div>
        <div style="font-size:20px">邮箱：{{ formData.email }}</div>
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
      infoVisible: false,
      clauseVisible: false,
      imageUrl: '',
      readClause: false,

      formData: {
        companyName: '',
        principalName: '',
        tel: '',
        email: ''
      },

      rules: {
        companyName: [
          { required: true, message: '请输入完整企业名称', trigger: 'blur' }
        ],
        principalName: [
          { required: true, message: '请输入企业负责人名称', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入企业联系电话', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入企业邮箱账户', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ShowInfo() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.infoVisible = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    ToNextPage() {
      this.infoVisible = false
      let companyInfo = {
        name: this.formData.companyName,
        principalName: this.formData.principalName,
        tel: this.formData.tel,
        email: this.formData.email
      }
      this.$store.commit('Company_SignUp', companyInfo)
      this.$router.push('/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR2')
      this.$store.commit('Layout_SetCompanyProgress', 1)
    }
  },
  created: function() {
    this.$store.commit('Layout_SetCompanyProgress', 0)
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
