<template> 
<el-container class="AdminPage_el-container">
  <el-aside class="AdminPage_el-aside"  style="overflow:unset">
        <div class="AdminPage_nav-item">
            <router-link to="/AdminPage/ShouYe"><i id="icon" class="el-icon-s-home"></i></router-link>
            <div class="AdminPage_tip">首页</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/AdminPage/KeHu"><i id="icon" class="el-icon-s-custom"></i></router-link>
            <div class="AdminPage_tip">客户</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/AdminPage/LiaoTianJiLu"><i id="icon" class="el-icon-s-unfold"></i></router-link>
            <div class="AdminPage_tip">聊天记录</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/AdminPage/GongDan"><i id="icon" class="el-icon-s-order"></i></router-link>
            <div class="AdminPage_tip">工单</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/AdminPage/Shezhi"><i id="icon" class="el-icon-s-tools"></i></router-link>
            <div class="AdminPage_tip"> 设置 </div>
        </div>

  </el-aside>
      
<el-header class="AdminPage_el-header">
      <div class="AdminPage_logo">
        <div class="AdminPage_img">Logo</div>
    </div>

<div  class="AdminPage_menu-head">
<el-menu :default-active="activeIndex" class="AdminPage_el-menu-demo" mode="horizontal" @select="handleSelect">
 <el-submenu index="1">
    <template slot="title">凯文客服</template>
    <div class="AdminPage_el-submenu">
    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" class="AdminPage_hop">
    <el-menu-item index="2-1" style="width: 20px;">个人中心</el-menu-item>
    <el-menu-item index="2-2">权限管理</el-menu-item>
    <el-menu-item index="2-3">退出</el-menu-item></div>
    </el-submenu>
</el-menu>
</div>
</el-header>

<el-main class="AdminPage_main" style="overflow:unset">

    <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
export default {
    name:'Header',
    components:{CompanyPage,CompanyPageR1},
    data(){
        return{
            activeIndex: '1',
            currentView:''
        }
    },
    methods:{
        tabChange(tabItem) {
            this.currentView = tabItem;
        }
    }
}

</script>

<style>
.AdminPage_el-container{
    height: 1264px;
    width:100%;
    background-color: rgb(159, 202, 226);
    }
  .AdminPage_el-aside {
      width: 64px!important;
      height:100%;
      background-color: rgb(210, 214, 243);
      margin-top: 60px;
      padding-top: 20px;
      text-align: center;
      position: fixed;
      z-index:999;
  }
   .AdminPage_el-aside {
      height:100%;
      background-color: rgb(239, 240, 247);
      margin-top: 60px;
      padding-top: 20px;
      text-align: center;
      position: fixed;
      z-index:999;
  }
  .AdminPage_nav-item {
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

.AdminPage_tip{
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

.AdminPage_nav-item:hover .AdminPage_tip{
    display: block;

}
.AdminPage_tip::before{
    content: '';
    width: 0;
    height: 0;
    border: solid 10px;
    border-color: transparent rgb(235, 223, 223) transparent transparent;

    position: absolute;
    left: -18px;
}
  
    .AdminPage_el-header {
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
.AdminPage_logo{
    width: 60px;
    height: 56px;
    padding-top: 4px;
    margin-left: -10px;
    float:left;
    text-align:center;
    background-color:  #222d3f;
  }
  .AdminPage_img{
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

.AdminPage_menu-head{
    width: 150px;
    height: 60px;
    border-width: 0px;
    position: absolute;
    right: -20px;
    top: 0px;
    line-height: 64px;
    background-color: rgb(225, 234, 235) ;
    border: none;
}
  .AdminPage_el-menu-demo{
    width: 150px;
    height: 60px;

    position: absolute;
  }
    .AdminPage_hop{
      width:45px ;
      height:45px ;
    }
  .AdminPage_el-menu-item{
      width: 20px;
  }

.AdminPage_main{
    background-color: rgb(180, 212, 231);
    width:1500px!important;
    height:1200px!important;
    position:absolute;
    top:60px;
    left:64px;
}

 
</style>
