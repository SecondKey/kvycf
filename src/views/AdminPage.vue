<template> 
<el-container class="AdminPage_el-container">
  <el-aside class="AdminPage_el-aside"  style="overflow:unset">
        <div class="AdminPage_nav-item">
            <router-link to="/ShouYe"><i id="icon" class="el-icon-s-home"></i></router-link>
            <div class="AdminPage_tip">首页</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/KeHu"><i id="icon" class="el-icon-s-custom"></i></router-link>
            <div class="AdminPage_tip">客户</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/LiaoTianJiLu"><i id="icon" class="el-icon-s-unfold"></i></router-link>
            <div class="AdminPage_tip">聊天记录</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/GongDan"><i id="icon" class="el-icon-s-order"></i></router-link>
            <div class="AdminPage_tip">工单</div>
        </div>
        <div class="AdminPage_nav-item">
            <router-link to="/SheZhi"><i id="icon" class="el-icon-s-tools"></i></router-link>
            <div class="AdminPage_tip"> 设置 </div>
        </div>

  </el-aside>
      
<el-header class="AdminPage_el-header">
    <div class="AdminPage_logo">
        <div class="AdminPage_img">Logo</div>
        </div>
  <div class="AdminPage_customer-info">
        <div class="AdminPage_head">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165135370,3673158281&fm=15&gp=0.jpg" class="AdminPage_hop">
            <span class="customer-name">凯文管理员</span><img src="" class="AdminPage_tip">
        </div>
        <div class="AdminPage_status">
            <li class="AdminPage_statu">在线</li>
            <li class="AdminPage_statu">离线</li>
        </div>
    </div>
    </el-header>

<el-main class="AdminPage_main" style="overflow:unset">

    <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
import CompanyPage from '@/components/Enter/Company/CompanyPage.vue'
import CompanyPageR1 from '@/components/Enter/Company/CompanyPageR1.vue'
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
  .AdminPage_nav-item {
    width: 56px;
    height: 56px;
    left: 5px;
    margin-bottom: 25px;
    margin-top: 20px;
    font-size: 38px;
    text-align: center;
    line-height: 56px;
    color: rgb(6, 81, 100);
  position: relative;
}
.AdminPage_tip{
    height: 35px;
    width: 53px;
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
      background-color: #5388dd;
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
    background-color: #5388dd;
  }
  .AdminPage_img{
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-color: #ae37fd;
      color: rgb(245, 247, 252);

    line-height: 48px;
    font-size: 17px;
    font-weight: 700;
    font-family: 'Arial Regular', 'Arial', sans-serif;
}
  .AdminPage_customer-info{
            width: 130px;
            height:60px;
            float: right;
            position: relative;
            }
  .AdminPage_head{
    width: 140px;
    height: 60px;
    border-width: 0px;
    position: absolute;
    right: -20px;
    top: 0px;
    line-height: 64px;
    background-color: rgb(150, 191, 196) ;
    border: none;
        }
    .AdminPage_hop{
        margin-top: 10px;
        width: 39px;
        height: 39px;
        border-radius: 50%;
    }
    .customer-name{
        font-size: 17px;
    }
      .AdminPage_status{
          width:120px;
          margin-top: 60px;
          float:right;
          font-size: 17px;
          background-color: rgb(225, 234, 235);
          
          z-index:999;
          display:none;
    }
    .AdminPage_customer-info:hover .AdminPage_status{
       display: block;
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
