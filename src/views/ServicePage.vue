<template>
  <el-container class="ServicePage_el-container">
    <el-aside class="ServicePage_el-aside" style="overflow:unset">
      <div class="ServicePage_logo">
        <div class="ServicePage_img">Logo</div>
      </div>
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
      <div class="ServicePage_customer-info">
        <div class="ServicePage_head">
          <img src="u94.svg" class="ServicePage_hop" />
          <span class="customer-name">凯文客服</span>
          <img src="u93.svg" class="ServicePage_tip" />
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
  },
  methods: {
    tabChange(tabItem) {
      this.currentView = tabItem
    }
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
  text-align: center;
  position: fixed;
}
.ServicePage_logo {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 64px;
  height: 64px;
  background-color: rgb(239, 240, 247);
}
.ServicePage_img {
  margin-left: 8px;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: #e8d2f7;
  color: rgb(86, 130, 252);

  text-align: center;
  line-height: 48px;

  font-family: 'Arial Regular', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 700;
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
  left: 0px;
  top: 0px;
  width: 64px;
  height: 56px;
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 1200;
  text-align: center;
  line-height: 56px;
  color: #fff;
  position: relative;
}
#icon {
  width: 35px;
  height: 35px;
  font-size: 1.5em;
  color: rgb(31, 36, 34);
}
.ServicePage_main {
  color: azure;
}
.ServicePage_tip {
  position: absolute;
  left: 72px;
  top: 13px;
  height: 30px;
  width: 36px;
  border-radius: 2px;

  background: #333;
  font-size: 10px;
  line-height: 30px;

  display: none;
}
.ServicePage_nav-item:hover .ServicePage_tip {
  display: block;
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

.ServicePage_el-header {
  width: 100%;
  height: 100%px;
  margin-left: 64px;
  padding-right: 150px;
  background-color: #222d3f;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
  top: 0px;
  position: fixed;
  z-index: 999;
}
.ServicePage_customer-info {
  margin: 0;
  position: relative;
  width: 157px;
  height: 60px;
  float: right;
  right: 0;
}
.ServicePage_head {
  width: 100px;
  height: 60px;
  margin-right: 64px;
  border-width: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  line-height: 64px;
  background-color: rgb(225, 234, 235);
  border: none;
}
.hop .ServicePage_tip {
  font-size: 15px;
  position: relative;
  top: -16px;
}
.ServicePage_status {
  width: 80px;
  margin-top: 60px;
  display: none;
  padding-right: 40px;
  background-color: #fff;
  z-index: 999;
  margin-left: -20px;
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

.ServicePage_el-header {
  background-color: #bcd1f3;
  color: #333;
  line-height: 60px;
  width: 743px;
  height: 64px;
  text-align: right;
  font-size: 12px;
  position: fixed;
  top: 0px;
  left: 64px;
}
.customer-info {
  margin: 0;
  position: relative;
  width: 157px;
  height: 64px;
  float: right;
  right: 0;
}
.head {
  border-width: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 130px;
  height: 64px;
  line-height: 64px;
  background-color: rgb(225, 234, 235);
  border: none;
  border-radius: 2px;
}
.hop .tip {
  font-size: 15px;
  position: relative;
  top: -16px;
}
.status {
  display: none;
  background-color: #fff;
  position: absolute;
  width: 120px;
  top: 65px;
  padding-right: 10px;
  right: 0;
}
.customer-info:hover .status {
  display: block;
}

.mainen {
  background-color: rgb(160, 206, 233);
}
</style>
