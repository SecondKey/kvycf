<template>
  <div class="signUpInputDiv" style="height:600px">
    <el-form
      :label-position="labelPosition"
      label-width="120px"
      :model="formLabelAlign"
    >
      <el-form-item label="公司名称">
        <el-input placeholder="请输入完整公司名称"></el-input>
      </el-form-item>
      <el-form-item label="负责人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-button
          type="info"
          style="margin-left:40px; width:150px;height:150px"
        >
          <i class="el-icon-circle-plus" style="font-size:50px"></i>
        </el-button>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      style="width:350px;margin-top:50px"
      @click="ToNextPage"
      >提交</el-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    ToNextPage() {
      this.$router.push('/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR2')
      this.$store.commit('Layout_SetCompanyProgress', 1)
    }
  }
}
</script>

<style></style>
