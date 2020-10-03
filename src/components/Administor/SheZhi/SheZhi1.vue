<template>
  <div
    style="background: white;
      border-left: solid black 1px;
      width: calc(100% - 401px);
      margin-left: 400px;
      text-align: left;
      padding-top:30px;
      height:663px;
      overflow:auto"
    id="123"
    @scroll="onScroll"
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
              $store.state.SData_Company[$store.state.Data_Login_Conpany].admin[
                $store.state.Data_Login_ID
              ].id
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].admin[
                $store.state.Data_Login_ID
              ].name
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="账号" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].admin[
                $store.state.Data_Login_ID
              ].account
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].admin[
                $store.state.Data_Login_ID
              ].pwd
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].admin[
                $store.state.Data_Login_ID
              ].email
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
      <div class="settingHead">企业信息</div>
      <el-divider></el-divider>
      <el-form
        ref="form"
        label-width="80px"
        style="width:500px;text-align:left;text-align: left;"
      >
        <el-form-item label="企业名称" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].name
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="公司联系人" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany]
                .principalName
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="公司账户" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].email
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" style="margin-top:40px">
          <el-input
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].tel
            "
          ></el-input>
        </el-form-item>
        <el-form-item label="公司地址" style="margin-top:40px">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="备注信息" style="margin-top:40px">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item label="当前服务" style="margin-top:40px">
          <el-input
            disabled
            v-model="
              $store.state.SData_Company[$store.state.Data_Login_Conpany].scheme
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

    <div class="settingArea" id="setting3">
      <el-divider></el-divider>
      <div class="settingHead">通知公告</div>
      <el-divider></el-divider>
      <el-table :data="allNotice" style="width: 100%" :show-header="false">
        <el-table-column prop="notice" width="500"> </el-table-column>
        <el-table-column prop="time" width="500"> </el-table-column>
      </el-table>
      <el-input
        style="width:400px"
        v-model="noticeText"
        placeholder="添加公告"
      ></el-input>
      <el-button
        @click="AddNotise"
        type="success"
        style="width:100px; margin-left:20px"
      >
        添加
      </el-button>
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

    <div class="settingArea" id="setting6">
      <el-divider></el-divider>
      <div class="settingHead">
        对话规则
      </div>
      <el-divider></el-divider>

      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        超时自动结束会话
        <el-switch v-model="value"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">超过</div>
          <input
            type="text"
            placeholder="10"
            style=" margin-left:10px;width:50px"
          />
          <div style="display:inline">分钟未响应自动结束会话</div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        访客离开自动结束会话
        <el-switch v-model="value1"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">访客离线超过</div>
          <input
            type="text"
            placeholder="10"
            style=" margin-left:10px;width:50px"
          />
          <div style="display:inline">分钟自动结束对话</div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        客服离线自动转接
        <el-switch v-model="value2"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">访客发送消息后</div>
          <input
            type="text"
            placeholder="10"
            style=" margin-left:10px;width:50px"
          />
          <div style="display:inline">秒客服一直没有在线则自动转接</div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        进入会话窗口自动开始对话
        <el-switch v-model="value3"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">
            开启后顾客进入对话窗时客服就会立即接入对话，客服可以主动与顾客沟通。关闭则必须顾客发送首条消息时客服才接入对话
          </div>
        </div>
      </div>
    </div>

    <div class="settingArea" id="setting7">
      <el-divider></el-divider>
      <div class="settingHead">
        分配规则
      </div>
      <el-divider></el-divider>

      <el-radio-group
        v-model="radio"
        style="
        background-color: aliceblue;
        padding-top:30px;
        padding-bottom:30px;
        padding-left: 10px;"
      >
        <el-radio :label="0">
          <div style="float:right">
            <div>按排序轮流分配</div>
            <div>
              设定一个客服排序, 新的对话按此排序, 在可分配的客服间轮流分配,
              从排序最靠前的开始
            </div>
          </div>
        </el-radio>

        <el-divider></el-divider>
        <div></div>
        <el-radio :label="1">
          <div style="float:right">
            <div>按排序优先分配</div>
            <div>
              设定一个客服排序, 优先给排序靠前的客服分配到对话数量上限,
              才会分配给排序下一位的客服
            </div>
          </div></el-radio
        >

        <el-divider></el-divider>
        <el-radio :label="2">
          <div style="float:right">
            <div>按平均分配</div>
            <div>
              根据每位客服的对话量维持一个平均的工作量分配。
            </div>
          </div></el-radio
        >
      </el-radio-group>

      <el-divider></el-divider>
      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        回头客分配
        <el-switch v-model="value4"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">
            优先把回头客分配给上一次和他对话的客服
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        客户排队超时优先
        <el-switch v-model="value5"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">
            客户发起咨询排队时，如排队等待超过设置的时间，系统将优先接入
          </div>
        </div>
      </div>
    </div>

    <div class="settingArea" id="setting8">
      <el-divider></el-divider>
      <div class="settingHead">
        工单设置
      </div>
      <el-divider></el-divider>
      <div class="autoMargin" style="margin-top:30px;margin-bottom:30px">
        通知工单创建人
        <el-switch v-model="value6"> </el-switch>
        <div style="margin-top:30px">
          <div style="display:inline">
            工单被更新时，同步通知工单创建人
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        工单回复可见范围
        <el-radio v-model="radio" label="1">仅客服可见</el-radio>
        <el-radio v-model="radio" label="2">所有人可见</el-radio>
      </div>
      <el-divider></el-divider>
    </div>

    <div class="settingArea" id="setting9">
      <el-divider></el-divider>
      <div class="settingHead">
        添加管理员
      </div>
      <el-divider></el-divider>
      <el-form
        style="width:500px;text-align:left;text-align: left;"
        label-width="120px"
        :rules="rules"
        :model="formData"
        ref="ruleForm"
      >
        <el-form-item label="管理员名称" prop="adminName">
          <el-input v-model="formData.adminName"></el-input>
        </el-form-item>
        <el-form-item label="输入账号" prop="adminAcc">
          <el-input v-model="formData.adminAcc"></el-input>
        </el-form-item>
        <el-form-item label="输入密码" prop="adminPwd">
          <el-input v-model="formData.adminPwd"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="adminEmail">
          <el-input v-model="formData.adminEmail"></el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="width:350px;margin-top:50px"
        @click="ShowInfo"
        >提交</el-button
      >
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeText: '',

      sortList: [1, 2, 3, 4],
      allNotice: [
        {
          notice: 'WCT-24新品上线',
          time: '2020/10/3 上午10:00:14'
        },
        {
          notice: 'WCT-24新品上线',
          time: '2020/10/3 上午10:00:14'
        },
        {
          notice: 'WCT-24新品上线',
          time: '2020/10/3 上午10:00:14'
        },
        {
          notice: 'WCT-24新品上线',
          time: '2020/10/3 上午10:00:14'
        },
        {
          notice: 'WCT-24新品上线',
          time: '2020/10/3 上午10:00:14'
        },
        {
          notice: 'WCT-24新品上线',
          time: '2020/10/3 上午10:00:14'
        }
      ],
      value: true,
      value1: true,
      value2: true,
      value3: true,

      radio: 0,
      value4: true,
      value5: true,

      value6: true,
      radio1: 0,
      posList: [],

      clauseVisible: false,
      formData: {
        adminName: '',
        adminAcc: '',
        adminPwd: '',
        adminEmail: ''
      },
      rules: {
        adminName: [{ required: true, message: '管理员姓名', trigger: 'blur' }],
        adminAcc: [{ required: true, message: '管理员账户', trigger: 'blur' }],
        adminPwd: [{ required: true, message: '管理员密码', trigger: 'blur' }],
        adminEmail: [{ required: true, message: '管理员邮箱', trigger: 'blur' }]
      }
    }
  },
  methods: {
    AddNotise() {
      let myDate = new Date()
      let n = {
        notice: this.noticeText,
        time: myDate.toLocaleString()
      }
      this.allNotice.push(n)
      this.allNotice.sort()
      this.noticeText = ''
    },
    onScroll(event) {
      let pos = 0
      for (let i in this.posList) {
        if (document.getElementById('123').scrollTop < this.posList[i] - 70) {
          pos = i
          break
        }
      }

      this.$parent.PageScroll(Number(pos))
    },
    ShowInfo() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.formData.adminName = ''
          this.formData.adminAcc = ''
          this.formData.adminPwd = ''
          this.formData.adminEmail = ''
          this.$message({
            message: '添加管理员成功',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  updated: function() {
    let t = document.getElementById('setting1').getBoundingClientRect().top - 90
    this.posList = []
    this.posList.push(
      document.getElementById('setting2').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting3').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting4').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting5').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting6').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting7').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting8').getBoundingClientRect().top - t
    )
    this.posList.push(
      document.getElementById('setting9').getBoundingClientRect().top - t
    )
    console.log(this.posList)
  }
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
  font-size: 13px !important;
}
.autoMargin {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
