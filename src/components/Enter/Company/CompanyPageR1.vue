<template>
  <div class="signUpInputDiv" style="height:650px">
    <el-form label-width="120px">
      <el-form-item label="企业名称">
        <el-input
          placeholder="请输入完整企业名称"
          v-model="companyName"
        ></el-input>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input v-model="principalName"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="email"></el-input
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
      @click="infoVisible = true"
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
        <div style="font-size:20px">企业名称：{{ companyName }}</div>
        <div style="font-size:20px">负责人：{{ principalName }}</div>
        <div style="font-size:20px">联系电话：{{ tel }}</div>
        <div style="font-size:20px">邮箱：{{ email }}</div>
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

      companyName: '',
      principalName: '',
      tel: '',
      email: ''
    }
  },
  methods: {
    ToNextPage() {
      this.infoVisible = false
      let companyInfo = {
        name: this.companyName,
        principalName: this.principalName,
        tel: this.tel,
        email: this.email
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
