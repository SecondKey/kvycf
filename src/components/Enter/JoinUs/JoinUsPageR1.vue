<template>
  <div class="signUpInputDiv" style="height:450px">
    <el-form
      label-width="120px"
      :rules="rules"
      :model="formData"
      ref="ruleForm"
    >
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
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="id">
        <el-input v-model="formData.id"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="formData.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email"></el-input>
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
      value: '前端开发',

      formData: {
        name: '',
        id: '',
        tel: '',
        email: ''
      },
      rules: {
        name: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
        id: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
        tel: [{ required: true, message: '请输入电话', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]
      }
    }
  },
  methods: {
    NextProcess() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.$router.push(
            '/EnterSignUpPage/EnterJoinUsPage/EnterJoinUsPageR2'
          )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style></style>
