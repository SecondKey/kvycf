<template>
  <div style="height:303px;">
    <div class="waitForDO">
      <i
        class="el-icon-success"
        style="font-size:50px ;margin-top:30px;color:green"
      ></i>
      <div style="font-size:30px;font-width:500;margin-top:20px">
        注册成功！
      </div>
      <div style="font-size:30px;font-width:500;margin-top:20px">
        {{ count }}秒后自动返回主页
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: '' //倒计时
    }
  },
  methods: {
    NextProcess() {
      this.count = 1
    }
  },
  created: function() {
    const TIME_COUNT = 5
    if (!this.timer) {
      this.count = TIME_COUNT
      this.show = false
      this.timer = setInterval(() => {
        if (this.count > 1 && this.count <= TIME_COUNT) {
          this.count--
        } else {
          this.show = true
          clearInterval(this.timer)
          this.timer = null
          //跳转的页面写在此处
          this.$router.push({ path: '/' })
          this.$store.commit('Layout_EnterPage_ChangeChoisePage', '1')
        }
      }, 1000)
    }
  }
}
</script>

<style></style>
