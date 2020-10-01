<template>
  <div style="width:100%;o">
    <div
      style="
      margin-left:1px;
      height:100%;
      width:300px;
      background:white;
      position: fixed;
      border-left: solid black 1px;
      border-right: solid black 1px;"
    >
      <div
        style="padding-top:20px;
        padding-bottom:20px;
        padding-left:16px;
        border-bottom: solid black 0.2px;"
      >
        客服设置
      </div>
      <el-menu
        :default-active="nowPos"
        class="el-menu-vertical-demo"
        style="height:100%;width:230px;position: absolute;border:none"
        @select="ChangeSelect"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">账户设置</span>
        </el-menu-item>

        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">常用语</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">自动回复</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">客户设置</span>
        </el-menu-item>
        <el-menu-item index="5">
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
    <div style="" class="test">
      <div>
        <div class="settingHead">账户设置</div>
      </div>
    </div>
  </div>
</template>

<script>
// import SheZhiItem1 from './SheZhiItem1'
// import SheZhiItem2 from './SheZhiItem2'
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
    }
  }
  // components: {
  //   SheZhiItem1: SheZhiItem2,
  //   SheZhiItem2: SheZhiItem2
  // }
}
</script>

<style>
.test {
  background: white;
  height: 2000px;
  border-left: solid black 1px;
  width: calc(100% - 301px);
  margin-left: 300px;
  text-align: left;
}

.settingArea {
  margin-left: 30px;
  margin-top: 30px;
}

.settingHead {
  font-size: 50px;
  color: black;
}
</style>
