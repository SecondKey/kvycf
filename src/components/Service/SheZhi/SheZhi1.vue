<template>
  <div
    id="sDiv"
    style="background: white;
      border-left: solid black 1px;
      width: calc(100% - 401px);
      margin-left: 400px;
      text-align: left;
      padding-top:30px;
      height:100%"
  >
    <div class="settingArea" id="setting1">
      <el-divider></el-divider>
      <a id="to0"></a>
      <div class="settingHead">账户设置</div>
      <el-divider></el-divider>
      <el-form
        ref="form"
        label-width="80px"
        style="width:500px;text-align:left;text-align: left;"
      >
        <el-form-item label="工号" style="margin-top:40px">
          <el-input
            disabled
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].id
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].id
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].tName
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="账号" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].account
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].pwd
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].tel
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .service[$store.state.Data_Login_ID].email
            "
          ></el-input>
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

    <div class="settingArea" id="setting2">
      <el-divider></el-divider>
      <div class="settingHead">常用语设置</div>
      <el-divider></el-divider>
      <el-table
        :data="
          this.$store.state.SData_Company[this.$store.state.Data_Login_Conpany]
            .KeFuChangYongYu
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

    <div class="settingArea" style="width:500px" id="setting3">
      <el-divider></el-divider>
      <div class="settingHead">自动回复设置</div>
      <el-divider></el-divider>
      <div class="autoMargin">
        欢迎消息
        <el-switch
          v-model="
            $store.state.SData_Company[$store.state.Data_Login_Conpany]
              .AutoReply.start
          "
        >
        </el-switch>
      </div>
      <el-input
        class="autoMargin"
        type="textarea"
        :rows="5"
        v-model="
          $store.state.SData_Company[$store.state.Data_Login_Conpany].AutoReply
            .startMsg
        "
      ></el-input>
      <div class="autoMargin">
        自动回复
        <el-switch
          v-model="
            $store.state.SData_Company[$store.state.Data_Login_Conpany]
              .AutoReply.atuo
          "
        >
        </el-switch>
        <input
          type="text"
          :value="
            $store.state.SData_Company[$store.state.Data_Login_Conpany]
              .AutoReply.autoTime
          "
          style=" margin-left:10px;width:50px"
        />
        <div style="display:inline">ms</div>
      </div>
      <el-input
        class="autoMargin"
        type="textarea"
        :rows="5"
        v-model="
          $store.state.SData_Company[$store.state.Data_Login_Conpany].AutoReply
            .autoMsg
        "
      ></el-input>
      <div class="autoMargin">
        结束语
        <el-switch
          v-model="
            $store.state.SData_Company[$store.state.Data_Login_Conpany]
              .AutoReply.end
          "
        >
        </el-switch>
      </div>
      <el-input
        class="autoMargin"
        type="textarea"
        :rows="5"
        v-model="
          $store.state.SData_Company[$store.state.Data_Login_Conpany].AutoReply
            .endText
        "
      ></el-input>
    </div>

    <div class="settingArea" id="setting4">
      <el-divider></el-divider>
      <div class="settingHead">客户信息</div>
      <el-divider></el-divider>
      <el-table
        :data="
          $store.state.SData_Company[$store.state.Data_Login_Conpany].client
        "
        style="max-width:1000px"
      >
        <el-table-column prop="name" label="客户姓名" width="180">
        </el-table-column>
        <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="position" label="地址"> </el-table-column>
        <el-table-column prop="rate" label="等级"> </el-table-column>
        <el-table-column prop="visitTime" label="历史访问时间">
        </el-table-column>
      </el-table>
    </div>

    <div class="settingArea" id="setting5">
      <el-divider></el-divider>
      <div class="settingHead">黑名单</div>
      <el-divider></el-divider>
      <el-table
        :data="
          $store.state.SData_Company[$store.state.Data_Login_Conpany].blackList
        "
        style="max-width:1000px"
      >
        <el-table-column prop="name" label="客户姓名" width="180">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="180">
        </el-table-column>
        <el-table-column prop="reason" label="拉黑原因"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowChangYongYu: '',

      sortList: [1, 2, 3, 4]
    }
  },
  methods: {
    AddChangYongYu() {
      this.$store.commit('SData_AddChangYongYu', this.nowChangYongYu)
      this.nowChangYongYu = ''
      this.sortList.sort()
    },
    onScroll(e) {
      console.log(e.srcElement.scrollTop)
      console.log('123')
    }
  },
  mounted() {
    window.addEventListener(
      'scroll',
      () => {
        console.log(document.documentElement.scrollTop)
      },
      true
    )
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
