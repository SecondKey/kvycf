<template>
  <div style="height:303px;">
    <div class="waitForDO">
      <i class="el-icon-user" style="font-size:50px ;margin-top:30px"></i>
      <div style="font-size:30px;font-width:500;margin-top:20px">
        数据正在审核，请耐心等待
      </div>
      <el-button type="info" style="margin-top:30px" @click="NextProcess"
        >返回主页</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    NextProcess() {
      this.$router.push('/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR3')
      this.$store.commit('Layout_SetCompanyProgress', 2)
    }
  }
}
</script>

<style></style>
