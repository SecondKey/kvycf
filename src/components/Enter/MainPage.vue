<template>
  <div class="mainBackGround">
    <div class="boxOuter">
      <el-carousel
        height="600px"
        class="zmd"
        arrow="never"
        trigger="click"
        number="4000"
      >
        <el-carousel-item class="zmdItem">
          <div class="zmdText">一站式客服管理<br /><br />大容量数据储存</div>
          <el-button
            class="zmdButton"
            type="primary"
            round
            @click="ToCompanyPage"
          >
            获取解决方案
          </el-button>
        </el-carousel-item>
        <el-carousel-item>
          <el-button
            class="zmdButton"
            type="success"
            round
            @click="ToServicePage"
            >成为客服</el-button
          >
        </el-carousel-item>
        <el-carousel-item>
          <el-button
            class="zmdButton"
            type="warning"
            round
            @click="ToJoinUsPage"
            >加入我们</el-button
          >
        </el-carousel-item>
      </el-carousel>
      <div class="loginIntry">
        <img src="../../img/LOGO.png" class="logoImage" />
        <div style="color:#000000" class="enterTitle">欢迎使用</div>
        <div
          style="color:#47c0e8;float:left;margin-left:100px"
          class="enterTitle"
        >
          凯文
        </div>
        <div style="color:#ffb05b;float:left" class="enterTitle">云客服</div>

        <div style="height:30px;margin-top:70px"></div>
        <el-button
          type="primary"
          class="enterButton"
          @click="
            ServiceLoginPage = true
            ServiceAcc = ''
            ServicePwd = ''
            ServiceVerify = ''
          "
        >
          <div class="enterButtonText">
            客服登录<i class="el-icon-right"></i>
          </div>
        </el-button>
        <div style="height:30px"></div>
        <el-button
          type="success"
          class="enterButton"
          @click="
            AdminLoginPage = true
            AdminAcc = ''
            AdminPwd = ''
            AdminVerify = ''
          "
        >
          <div class="enterButtonText">
            管理员登录<i class="el-icon-right"></i>
          </div>
        </el-button>
        <!-- <router-link to="/ServicePage/KeHu">客服跳转</router-link> -->
      </div>
    </div>
    <el-drawer
      title="客服登录"
      :visible.sync="ServiceLoginPage"
      :with-header="false"
      style="z-index:990"
    >
      <div class="loginDIV">
        <img src="../../img/LOGO.png" style="width:255px;height:140px;" />
        <div class="enterTitle" style="font-size:30px">客服登录入口</div>
        <el-input
          class="loginInput"
          v-model="ServiceAcc"
          placeholder="请输入客服账号"
        ></el-input>
        <el-input
          class="loginInput"
          v-model="ServicePwd"
          placeholder="请输入账号密码"
          show-password
        ></el-input>
        <el-input
          class="loginInput"
          v-model="ServiceVerify"
          placeholder="请输入验证码"
        ></el-input>
        <img src="../../img/yzm.png" class="loginYzm" />
        <label class="loginYzmButton"
          >看不清，换一张<i class="el-icon-refresh-left"></i
        ></label>
        <el-button
          type="primary"
          class="enterButton"
          style="margin-top:30px"
          @click="ServiceLogin"
        >
          <div class="enterButtonText">登录</div>
        </el-button>
      </div>
    </el-drawer>
    <el-drawer
      title="管理员登录"
      :visible.sync="AdminLoginPage"
      :with-header="false"
      style="z-index:990"
    >
      <div class="loginDIV">
        <img src="../../img/LOGO.png" style="width:255px;height:140px;" />
        <div class="enterTitle" style="font-size:30px">管理员登录入口</div>
        <el-input
          class="loginInput"
          v-model="AdminAcc"
          placeholder="请输入管理员账号"
        ></el-input>
        <el-input
          class="loginInput"
          v-model="AdminPwd"
          placeholder="请输入账号密码"
          show-password
        ></el-input>
        <el-input
          class="loginInput"
          v-model="AdminVerify"
          placeholder="请输入验证码"
        ></el-input>
        <img src="../../img/yzm.png" class="loginYzm" />
        <label class="loginYzmButton"
          >看不清，换一张<i class="el-icon-refresh-left"></i
        ></label>
        <el-button
          type="success"
          class="enterButton"
          style="margin-top:30px"
          @click="AdminLogin"
        >
          <div class="enterButtonText">登录</div>
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ServiceLoginPage: false,
      ServiceAcc: '',
      ServicePwd: '',
      ServiceVerify: '',

      AdminLoginPage: false,
      AdminAcc: '',
      AdminPwd: '',
      AdminVerify: ''
    }
  },
  methods: {
    ToCompanyPage() {
      this.$router.push('/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR1')
      this.$store.commit('Layout_EnterPage_ChangeChoisePage', '2')
    },
    ToServicePage() {
      this.$router.push('/EnterSignUpPage/EnterServicePage/EnterServicePageR1')
      this.$store.commit('Layout_EnterPage_ChangeChoisePage', '3')
    },
    ToJoinUsPage() {
      this.$router.push('/EnterSignUpPage/EnterJoinUsPage/EnterJoinUsPageR1')
      this.$store.commit('Layout_EnterPage_ChangeChoisePage', '4')
    },
    ServiceLogin() {
      if (this.ServiceVerify == this.$store.state.Data_VerificationCode) {
        for (let comp in this.$store.state.SData_Company) {
          for (let serv in this.$store.state.SData_Company[comp].service) {
            if (
              this.$store.state.SData_Company[comp].service[serv].account ==
                this.ServiceAcc &&
              this.$store.state.SData_Company[comp].service[serv].pwd ==
                this.ServicePwd
            ) {
              this.$message({
                message:
                  '客服' +
                  this.$store.state.SData_Company[comp].service[serv].name +
                  ' 登录成功',
                center: true
              })
              this.$store.commit('Login_ServiceLogin', {
                cid: comp,
                id: serv
              })
              this.$router.push('/ServicePage')
              return
            }
          }
        }
        this.$message.error({
          message: '账号或错误',
          center: true
        })
      } else {
        this.$message.error({
          message: '验证码错误',
          center: true
        })
      }
    },
    AdminLogin() {
      if (this.AdminVerify == this.$store.state.Data_VerificationCode) {
        for (let comp in this.$store.state.SData_Company) {
          for (let admin in this.$store.state.SData_Company[comp].admin) {
            console.log(
              this.$store.state.SData_Company[comp].admin[admin].account +
                ' ' +
                this.AdminAcc +
                ' ' +
                this.$store.state.SData_Company[comp].admin[admin].pwd +
                ' ' +
                this.AdminPwd
            )
            if (
              this.$store.state.SData_Company[comp].admin[admin].account ==
                this.AdminAcc &&
              this.$store.state.SData_Company[comp].admin[admin].pwd ==
                this.AdminPwd
            ) {
              this.$message({
                message:
                  '管理员' +
                  this.$store.state.SData_Company[comp].admin[admin].name +
                  ' 登录成功',
                center: true
              })
              this.$store.commit('Login_AdminLogin', {
                cid: comp,
                id: admin
              })
              this.$router.push('/AdminPage')
              return
            }
          }
        }
        this.$message.error({
          message: '账号或错误',
          center: true
        })
      } else {
        this.$message.error({
          message: '验证码错误',
          center: true
        })
      }
    }
  }
}
</script>

<style>
.mainBackGround {
  width: 100%;
  height: 100%;
  background-image: url('../../img/EnterBackground.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.boxOuter {
  position: absolute;
  left: 50%;
  margin-left: -700px;
  height: 100%;
  min-width: 1400px;
}

.zmd {
  position: absolute;
  top: 50%;
  margin-top: -300px;
  width: 900px;
}

.el-carousel__item:nth-child(1) {
  background-image: url('../../img/fz15.jpg');
  background-size: cover;
}

.el-carousel__item:nth-child(2) {
  background-image: url('../../img/fz13.jpg');
  background-size: cover;
}
.el-carousel__item:nth-child(3) {
  background-image: url('../../img/fz14.jpg');
  background-size: cover;
}

.zmdButton {
  position: absolute;
  top: 530px;
  left: 570px;
  width: 260px;
  height: 55px;
}

.zmdText {
  position: absolute;
  left: 30px;
  top: 50px;
  opacity: 0.7;

  font-size: 50px;
  font-weight: 900;
  font-style: oblique;
}

.loginIntry {
  position: absolute;
  top: 50%;
  margin-top: -300px;
  margin-left: 950px;
  width: 450px;
  height: 600px;

  border-radius: 20px;
  background-color: #ffffffd3;
  text-align: center;
  align-content: center;
}

.logoImage {
  margin-top: 50px;
  width: 309px;
  height: 168px;
}
.enterTitle {
  height: 60px;
  line-height: 60px;
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  user-select: none;
}
.enterButton {
  margin-top: 30px;
  width: 300px;
  height: 60px;
}
.enterButtonText {
  font-family: NSimSun;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
.loginDIV {
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -260px;
  text-align: center;
  width: 300px;
}
.loginInput {
  margin-top: 30px;
}
.loginYzm {
  margin-top: 10px;
  float: left;
  width: 140px;
  height: 60px;
}
.loginYzmButton {
  margin-top: 10px;
  cursor: pointer;
  height: 60px;
  line-height: 80px;
  user-select: none;
}
</style>
