<template>
  <el-container class="ServicePage_el-container">
    <el-aside class="ServicePage_el-aside" style="overflow:unset">
      <div class="ServicePage_nav-item">
        <i id="icon" class="el-icon-s-home"></i>
        <div class="ServicePage_tip">首页</div>
      </div>
      <div class="ServicePage_nav-item">
        <i id="icon" class="el-icon-s-comment"></i>
        <div class="ServicePage_tip">会话</div>
      </div>
      <div class="ServicePage_nav-item">
        <i id="icon" class="el-icon-s-custom"></i>
        <div class="ServicePage_tip">客户</div>
      </div>
      <div class="ServicePage_nav-item">
        <i id="icon" class="el-icon-s-unfold"></i>
        <div class="ServicePage_tip">历史</div>
      </div>
      <div class="ServicePage_nav-item">
        <i id="icon" class="el-icon-s-order"></i>
        <div class="ServicePage_tip">工单</div>
      </div>
      <div class="ServicePage_nav-item">
        <i id="icon" class="el-icon-s-tools"></i>
        <div class="ServicePage_tip">设置</div>
      </div>
    </el-aside>

    <el-header class="ServicePage_el-header">
      <div class="ServicePage_logo">
        <div class="ServicePage_img">Logo</div>
      </div>

      <div class="ServicePage_customer-info">
        <div class="ServicePage_head">
          <img
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            class="ServicePage_hop"
          />
          <span class="customer-name">凯文客服</span
          ><img src="" class="ServicePage_tip" />
        </div>
        <div class="ServicePage_status">
          <li class="ServicePage_statu">在线</li>
          <li class="ServicePage_statu">离线</li>
        </div>
      </div>
    </el-header>

    <el-main class="ServicePage_main" style="overflow:unset">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import CompanyPage from '@/components/Enter/Company/CompanyPage.vue'
import CompanyPageR1 from '@/components/Enter/Company/CompanyPageR1.vue'
export default {
  name: 'Header',
  components: { CompanyPage, CompanyPageR1 },
  data() {
    return {
      activeIndex: '1',
      currentView: ''
    }
    }
</script>

<style>
.ServicePage_el-container {
  height: 1264px;
  width: 100%;
  background-color: rgb(180, 212, 231);
}
.ServicePage_el-aside {
  width: 64px !important;
  height: 100%;
  background-color: rgb(239, 240, 247);
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
  position: fixed;
  z-index: 999;
}
i {
  border-width: 0px;
  left: 22px;
  top: 116px;
  width: 25px;
  height: 22px;
  display: flex;
}
.ServicePage_nav-item {
  width: 56px;
  height: 56px;
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 35px;
  font-weight: 1200;
  text-align: center;
  line-height: 56px;
  color: rgb(16, 109, 163);
  position: relative;
}

.ServicePage_tip {
  height: 35px;
  width: 40px;
  left: 80px;

  background: rgb(235, 223, 223);
  font-size: 15px;
  line-height: 35px;

  z-index: 999;
  display: none;

  position: absolute;
}
.ServicePage_tip::before {
  content: '';
  width: 0;
  height: 0;
  border: solid 10px;
  border-color: transparent #333 transparent transparent;

  position: absolute;
  top: 5px;
  left: -16px;
}
.ServicePage_tip::before {
  content: '';
  width: 0;
  height: 0;
  border: solid 10px;
  border-color: transparent rgb(235, 223, 223) transparent transparent;

  position: absolute;
  left: -18px;
}

.ServicePage_el-header {
  width: 100%;
  height: 64px;
  background-color: #222d3f;
  color: #333;
  text-align: right;
  font-size: 12px;
  top: 0px;
  position: fixed;
  z-index: 999;
}
.ServicePage_logo {
  width: 60px;
  height: 56px;
  padding-top: 4px;
  margin-left: -10px;
  float: left;
  text-align: center;
  background-color: #222d3f;
}
.ServicePage_img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #e8d2f7;
  color: rgb(86, 130, 252);

  line-height: 48px;
  font-size: 17px;
  font-weight: 700;
  font-family: 'Arial Regular', 'Arial', sans-serif;
}

.ServicePage_customer-info {
  width: 157px;
  height: 60px;
  margin: 0;
  position: relative;
  float: right;
  right: 0;
}
.ServicePage_head {
  width: 110px;
  height: 60px;
  border-width: 0px;
  position: absolute;
  right: -20px;
  top: 0px;
  line-height: 64px;
  background-color: rgb(225, 234, 235);
  border: none;
}
.ServicePage_hop {
  margin-top: 10px;
  width: 35px;
  height: 35px;
}
.customer-name {
  font-size: 17px;
}
.ServicePage_tip {
  font-size: 15px;
  position: relative;
  top: -16px;
}
.ServicePage_status {
  width: 90px;
  margin-top: 60px;
  float: right;
  font-size: 17px;
  background-color: rgb(225, 234, 235);

  z-index: 999;
  display: none;
}
.ServicePage_customer-info:hover .ServicePage_status {
  display: block;
}

.ServicePage_main {
  background-color: rgb(180, 212, 231);
  width: 1500px !important;
  height: 1200px !important;
  position: absolute;
  top: 60px;
  left: 64px;
}
</style>
