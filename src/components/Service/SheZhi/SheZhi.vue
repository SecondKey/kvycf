<template>
  <div style="width:100%;">
    <div
      style="
      margin-left:1px;
      height:100%;
      width:400px;
      background:white;
      position: fixed;
      border-left: solid black 1px;
      border-right: solid black 1px;"
    >
      <div
        style="padding-top:20px;
        padding-bottom:20px;
        padding-left:16px;
        border-bottom: solid black 0.2px;
        font-size:30px;"
      >
        客服设置
      </div>
      <el-menu
        :default-active="nowPos"
        class="el-menu-vertical-demo"
        style="height:100%;width:400px;position: absolute;border:none"
        @select="ChangeSelect"
      >
        <el-menu-item index="1" style="font-size:25px">
          <i class="el-icon-menu"></i>
          <span slot="title" href="#to0">账户</span>
        </el-menu-item>

        <el-menu-item index="2" style="font-size:25px">
          <i class="el-icon-document"></i>
          <span slot="title">常用语</span>
        </el-menu-item>
        <el-menu-item index="3" style="font-size:25px">
          <i class="el-icon-document"></i>
          <span slot="title">自动回复</span>
        </el-menu-item>
        <el-menu-item index="4" style="font-size:25px">
          <i class="el-icon-menu"></i>
          <span slot="title">客户信息</span>
        </el-menu-item>
        <el-menu-item index="5" style="font-size:25px">
          <i class="el-icon-document"></i>
          <span slot="title">黑名单</span>
        </el-menu-item>
      </el-menu>
      <el-steps
        :active="nowStep"
        align-center
        finish-status="process"
        direction="vertical"
        style="float:right;width:25px;margin-right:25px;margin-top:16px;height:280px"
      >
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
      </el-steps>
    </div>
    <SheZhi1></SheZhi1>
  </div>
</template>

<script>
import SheZhi1 from './SheZhi1'

export default {
  data() {
    return {
      nowPos: '1',
      nowStep: 0
    }
  },
  methods: {
    ChangeSelect(index) {
      this.nowStep = Number(index) - 1
      document.getElementById('setting' + index).scrollIntoView()
    },
    AddChangYongYu() {
      this.$store.commit('SData_AddChangYongYu', this.nowChangYongYu)
      this.nowChangYongYu = ''
      this.sortList.sort()
    },
    onScroll(index) {
      this.nowStep = index
      nowPos = index + 1
    }
  },

  components: {
    SheZhi1: SheZhi1
  }
}
</script>

<style>
.settingArea {
  margin-left: 30px;
  padding-top: 30px;
}

.settingHead {
  font-size: 50px;
  color: black;
}

.inputTitle {
  font-size: 25px;
  width: 400px;
}
.el-form-item__label {
  text-align: left !important;
  font-size: 30px !important;
}
.autoMargin {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
