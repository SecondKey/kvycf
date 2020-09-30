<template> 
<el-container class="ServicePage_el-container">
  <el-aside class="ServicePage_el-aside"  style="overflow:unset;width: 64px;">
        <div class="ServicePage_nav-item">
           <router-link to="/ServicePage"><i id="icon" class="el-icon-s-home"></i></router-link>
            <div class="ServicePage_tip">首页</div>
        </div>
        <div class="ServicePage_nav-item">
            <router-link to="/ServicePage/HuiHua"><i id="icon" class="el-icon-s-comment"></i></router-link>
            <div class="ServicePage_tip">会话</div>
        </div>
        <div class="ServicePage_nav-item">
            <router-link to="/ServicePage/KeHu"><i id="icon" class="el-icon-s-custom"></i></router-link>
            <div class="ServicePage_tip">客户</div>
        </div>
        <div class="ServicePage_nav-item">
            <router-link to="/ServicePage/LiaoTianJiLu"><i id="icon" class="el-icon-s-unfold"></i></router-link>
            <div class="ServicePage_tip">聊天记录</div>
        </div>
        <div class="ServicePage_nav-item">
            <router-link to="/ServicePage/GongDan"><i id="icon" class="el-icon-s-order"></i></router-link>
            <div class="ServicePage_tip">工单</div>
        </div>
        <div class="ServicePage_nav-item">
            <router-link to="/ServicePage/SheZhi"><i id="icon" class="el-icon-s-tools"></i></router-link>
            <div class="ServicePage_tip"> 设置 </div>
        </div>

  </el-aside>

<el-header class="ServicePage_el-header">
    <div class="ServicePage_logo">
        <div class="ServicePage_img">Logo</div>
    </div>

<div  class="ServicePage_menu-head">
<el-menu :default-active="activeIndex" class="ServicePage_el-menu-demo" mode="horizontal" @select="handleSelect">
 <el-submenu index="1">
    <template slot="title">凯文客服</template>
    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" class="ServicePage_hop">
    <el-menu-item class="ServicePage_el-menu-item" index="2-1" style="width: 20px;">个人中心</el-menu-item>
    <el-menu-item index="2-2">权限管理</el-menu-item>
    <el-menu-item index="2-3">退出</el-menu-item>
    </el-submenu>
</el-menu>
</div>

</el-header>

<el-main class="ServicePage_el-main" style="overflow:unset">

    <router-view></router-view>
</el-main>

</el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
    
</script>

<style>
.ServicePage_el-container{
    height: 1264px;
    width:100%;
    background-color: rgb(180, 212, 231);
    }
  .ServicePage_el-aside {
      height:100%;
      background-color: rgb(239, 240, 247);
      margin-top: 60px;
      padding-top: 20px;
      text-align: center;
      position: fixed;
      z-index:999;
  }
  .ServicePage_nav-item {
    width: 56px;
    height: 56px;
    padding-top: 25px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-size: 40px;
    font-weight: bolder;
    color: rgb(16, 109, 163);
    position: relative;
}
  i{
    width: 25px;
    height: 22px;
    left: 25px;
    margin-left: -7px;
    display: flex;
}

.ServicePage_tip{
    height: 35px;
    width: 45px;
    left: 80px;
    background: rgb(235, 223, 223);
    font-size: 15px;
    line-height: 35px;

    z-index:999;
    display: none;

    position: absolute;
}
.ServicePage_nav-item:hover .ServicePage_tip{
    display: block;

}
.ServicePage_tip::before{
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
      z-index:999;
  }
.ServicePage_logo{
    width: 60px;
    height: 56px;
    padding-top: 4px;
    margin-left: -10px;
    float:left;
    text-align:center;
    background-color:  #222d3f;
  }
  .ServicePage_img{
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

.ServicePage_menu-head{
    width: 224px;
    height: 60px;
    border-width: 0px;
    position: absolute;
    right: -20px;
    top: 0px;
    line-height: 64px;
    background-color: rgb(225, 234, 235) ;
    border: none;
}
  .ServicePage_el-menu-demo{
    width: 224px;
    height: 60px;

    position: absolute;
  }
    .ServicePage_hop{
      width:45px ;
      height:45px ;
    }
  .ServicePage_el-menu-item{
      width: 20px;
  }

.ServicePage_el-main{
    background-color: rgb(180, 212, 231);
    width:1500px!important;
    height:1200px!important;
    position:absolute;
    top:41px;
    left:46px;
}


</style>