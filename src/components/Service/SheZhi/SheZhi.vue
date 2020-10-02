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
          <span slot="title">账户</span>
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
          <span slot="title">客户设置</span>
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
    <div
      style="background: white;
      height: 5000px;
      border-left: solid black 1px;
      width: calc(100% - 401px);
      margin-left: 400px;
      text-align: left;
      padding-top:30px"
    >
      <div class="settingArea">
        <el-divider></el-divider>
        <div class="settingHead">账户设置</div>
        <el-divider></el-divider>
        <el-form
          ref="form"
          label-width="80px"
          style="width:500px;text-align:left;text-align: left;"
        >
          <el-form-item label="工号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="昵称" style="margin-top:40px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="姓名" style="margin-top:40px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="账号" style="margin-top:40px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码" style="margin-top:40px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="电话" style="margin-top:40px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-top:40px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item style="margin-top:40px">
            <el-button
              type="success"
              style="width:500px;height:50px;float:right;"
            >
              保存
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="settingArea">
        <el-divider></el-divider>
        <div class="settingHead">常用语设置</div>
        <el-divider></el-divider>
        <el-table
          :data="
            this.$store.state.SData_Company[
              this.$store.state.Data_Login_Conpany
            ].KeFuChangYongYu
          "
          style="width: 100%"
          :show-header="false"
        >
          <el-table-column prop="label" width="500"> </el-table-column>
        </el-table>
        <el-input
          style="width:400px"
          v-model="nowChangYongYu"
          placeholder="添加常用语"
        ></el-input>
        <el-button
          @click="AddChangYongYu"
          type="success"
          style="width:100px; margin-left:20px"
        >
          添加
        </el-button>
      </div>

      <div class="settingArea">
        <el-divider></el-divider>
        <div class="settingHead">自动回复设置</div>
        <el-divider></el-divider>
        <el-form
          ref="form"
          label-width="80px"
          style="width:500px;text-align:left;text-align: left;"
        >
          <el-form-item label="工号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="昵称" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="账号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="密码" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="电话" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item style="margin-top:40px">
            <el-button
              type="success"
              style="width:500px;height:50px;float:right;"
            >
              保存
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="settingArea">
        <el-divider></el-divider>
        <div class="settingHead">客户设置</div>
        <el-divider></el-divider>
        <el-form
          ref="form"
          label-width="80px"
          style="width:500px;text-align:left;text-align: left;"
        >
          <el-form-item label="工号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="昵称" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="账号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="密码" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="电话" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item style="margin-top:40px">
            <el-button
              type="success"
              style="width:500px;height:50px;float:right;"
            >
              保存
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="settingArea">
        <el-divider></el-divider>
        <div class="settingHead">黑名单</div>
        <el-divider></el-divider>
        <el-form
          ref="form"
          label-width="80px"
          style="width:500px;text-align:left;text-align: left;"
        >
          <el-form-item label="工号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="昵称" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="账号" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="密码" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="电话" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-top:40px">
            <el-input disabled></el-input>
          </el-form-item>
          <el-form-item style="margin-top:40px">
            <el-button
              type="success"
              style="width:500px;height:50px;float:right;"
            >
              保存
            </el-button>
          </el-form-item>
        </el-form>
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
      nowStep: 0,

      nowChangYongYu: '',

      sortList: [1, 2, 3, 4]
    }
  },
  methods: {
    ChangeSelect(index) {
      this.nowStep = Number(index) - 1
    },
    AddChangYongYu() {
      this.$store.commit('SData_AddChangYongYu', this.nowChangYongYu)
      this.nowChangYongYu = ''
      this.sortList.sort()
    }
  }
  // components: {
  //   SheZhiItem1: SheZhiItem2,
  //   SheZhiItem2: SheZhiItem2
  // }
}
</script>

<style scoped>
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
</style>
