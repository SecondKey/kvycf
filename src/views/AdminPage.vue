<template>
  <el-container class="AdminPage_el_container">
    <el-header style="padding:0px">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="black"
        text-color="#fff"
        router
        active-text-color="#fff"
        :default-active="nowChoisePage1"
      >
        <img class="logo" src="../img/LOGO.png" />
        <el-submenu
          index="1"
          style="color:#ffffff;float:right;margin-right:20px;font-size:25px;width:200px"
          :show-timeout="0"
          :hide-timeout="0"
        >
          <template slot="title">
            <img
              src="../img/head.png"
              style="width:40px;height:40px;margin-right:10px"
            />
            凯文管理员
          </template>
          <el-menu-item index="1" route="/ServicePage/SheZhi"
            >设置</el-menu-item
          >
          <el-menu-item index="2" route="/">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>

    <el-aside
      style="z-index:1000 ;width:60px;height:calc(100% - 60px);position:fixed;margin-top:60px; min-height: 500px;
      overflow:visible"
    >
      <el-menu
        style="width:60px;height:100%;max-width: 70px;"
        active-text-color="#ffb05b"
        :default-active="nowChoisePage"
        router
      >
        <el-menu-item
          style="margin-top:30px"
          class="CeBianLanItem"
          index="1"
          route="/ServicePage"
        >
          <i class="el-icon-s-home" style="font-size:40px;margin-top:-20px"></i>
          <div class="ServicePage_tip">首页</div>
        </el-menu-item>

        <el-menu-item
          class="CeBianLanItem"
          index="2"
          route="/ServicePage/HuiHua"
        >
          <i
            class="el-icon-s-comment"
            style="font-size:40px;margin-top:-20px"
          ></i>
          <div class="ServicePage_tip">会话</div>
        </el-menu-item>

        <el-menu-item class="CeBianLanItem" index="3" route="/ServicePage/KeHu">
          <i
            class="el-icon-s-custom"
            style="font-size:40px;margin-top:-20px"
          ></i>
          <div class="ServicePage_tip">客户</div>
        </el-menu-item>

        <el-menu-item
          class="CeBianLanItem"
          index="4"
          route="/ServicePage/LiaoTianJiLu"
        >
          <i
            class="el-icon-s-unfold"
            style="font-size:40px;margin-top:-20px"
          ></i>
          <div class="ServicePage_tip">历史</div>
        </el-menu-item>

        <el-menu-item
          class="CeBianLanItem"
          index="5"
          route="/ServicePage/GongDan"
        >
          <i
            class="el-icon-s-order"
            style="font-size:40px;margin-top:-20px"
          ></i>
          <div class="ServicePage_tip">工单</div>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-main class="ServicePage_el_main">
      <router-view style="text-align:center"></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      nowChoisePage: '1',
      nowChoisePage1: '1'
    }
  }
}
</script>

<style>
.CeBianLanItem {
  max-width: 70px;
  height: 70xp;
  margin-top: 10px;
  margin-bottom: 10px;
}

.ServicePage_tip {
  position: relative;
  top: -47px;
  left: 50px;

  background: #333333;
  text-align: center;
  font-size: 15px;
  color: white;

  width: 60px;
  line-height: 45px;
  height: 45px;
  border-radius: 4px;

  z-index: 999;
  display: none;
}

.ServicePage_tip::before {
  content: '';
  width: 0;
  height: 0;
  border: solid 10px;
  border-color: transparent #333333 transparent transparent;

  position: absolute;
  left: -20px;
  top: 10px;
}

.CeBianLanItem:hover .ServicePage_tip {
  display: block;
}

.ServicePage_el_main {
  background-color: rgb(180, 212, 231);
  padding: 0px !important;
  margin-left: 60px;
  width: calc(100% - 60px);
  position: relative;
  text-align: center;
}

/* 子元素要使用的样式*/

.containedDiv {
  position: relative;
  margin: 0 auto;
  width: 1410px;
  min-height: 100%;
  background: #ffffff77;
}
</style>
