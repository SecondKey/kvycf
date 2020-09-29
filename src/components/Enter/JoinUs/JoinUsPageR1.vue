<template>
  <div class="signUpInputDiv" style="height:450px">
    <el-form label-width="120px">
      <el-form-item label="选择职位">
        <el-select v-model="value" placeholder="请选择" style="width:230px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      style="width:350px;margin-top:50px"
      @click="NextProcess"
      >提交</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '前端开发'
        },
        {
          value: '选项2',
          label: '后端开发'
        },
        {
          value: '选项3',
          label: '运维'
        },
        {
          value: '选项4',
          label: '客服培训'
        }
      ],
      value: ''
    }
  },
  methods: {
    NextProcess() {
      this.$router.push('/EnterSignUpPage/EnterJoinUsPage/EnterJoinUsPageR2')
    }
  }
}
</script>

<style></style>
