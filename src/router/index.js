import Vue from 'vue'
import VueRouter from 'vue-router'

//#region 进入页面，包括登录和注册功能
import EnterPage from '../views/EnterPage'

import EnterMainPage from '../components/Enter/MainPage'
import EnterSignUpPage from '../components/Enter/SignUpPage'

import EnterCompanyPage from '../components/Enter/Company/CompanyPage'
import EnterCompanyPageR1 from '../components/Enter/Company/CompanyPageR1'
import EnterCompanyPageR2 from '../components/Enter/Company/CompanyPageR2'
import EnterCompanyPageR3 from '../components/Enter/Company/CompanyPageR3'
import EnterCompanyPageR4 from '../components/Enter/Company/CompanyPageR4'
import EnterCompanyPageR5 from '../components/Enter/Company/CompanyPageR5'

import EnterServicePage from '../components/Enter/Service/ServicePage'
import EnterServicePageR1 from '../components/Enter/Service/ServicePageR1'
import EnterServicePageR2 from '../components/Enter/Service/ServicePageR2'

import EnterJoinUsPage from '../components/Enter/JoinUs/JoinUsPage'
import EnterJoinUsPageR1 from '../components/Enter/JoinUs/JoinUsPageR1'
import EnterJoinUsPageR2 from '../components/Enter/JoinUs/JoinUsPageR2'
//#endregion
//#region 客服页面
import ServicePage from '../views/ServicePage'

import Service_GongDan from '../components/Service/GongDan/GongDan'
import Service_HuiHua from '../components/Service/HuiHua/HuiHua'
import Service_KeHu from '../components/Service/KeHu/KeHu'
import Service_LiaoTianJiLu from '../components/Service/LiaoTianJiLu/LiaoTianJiLu'
import Service_SheZhi from '../components/Service/SheZhi/SheZhi'
import Service_ShouYe from '../components/Service/ShouYe/ShouYe'
//#endregion'

//#region 管理员页面
import AdminPage from '../views/AdminPage'

import Admin_ShouYe from '../components/Administor/Shouye/Shouye'
import Admin_KeFu from '../components/Administor/KeFu/KeFu'
import Admin_KeHu from '../components/Administor/KeHu/KeHu'
import Admin_GongDan from '../components/Administor/GongDan/GongDan'
import Admin_LiaoTianJiLu from '../components/Administor/LiaoTianJiLu/LiaoTianJiLu'
import Admin_Shezhi from '../components/Administor/Shezhi/Shezhi'

//#endregion

Vue.use(VueRouter)

const routes = [
  //#region EnterPage路由
  {
    path: '/',
    name: 'EnterPage',
    component: EnterPage,
    children: [
      //进入时主业
      {
        path: '/',
        name: 'EnterMainPage',
        component: EnterMainPage
      },
      //进入时登录页面
      {
        path: '/EnterSignUpPage',
        name: 'EnterSignUpPage',
        component: EnterSignUpPage,
        children: [
          //#region 公司注册页面
          {
            path: '/EnterSignUpPage/EnterCompanyPage',
            name: 'EnterCompanyPage',
            component: EnterCompanyPage,
            children: [
              {
                path: '/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR1',
                name: 'EnterCompanyPageR1',
                component: EnterCompanyPageR1
              },
              {
                path: '/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR2',
                name: 'EnterCompanyPageR2',
                component: EnterCompanyPageR2
              },
              {
                path: '/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR3',
                name: 'EnterCompanyPageR3',
                component: EnterCompanyPageR3
              },
              {
                path: '/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR4',
                name: 'EnterCompanyPageR4',
                component: EnterCompanyPageR4
              },
              {
                path: '/EnterSignUpPage/EnterCompanyPage/EnterCompanyPageR5',
                name: 'EnterCompanyPageR5',
                component: EnterCompanyPageR5
              }
            ]
          },
          //#endregion
          //#region 客户注册页面
          {
            path: '/EnterSignUpPage/EnterServicePage',
            name: 'EnterServicePage',
            component: EnterServicePage,
            children: [
              {
                path: '/EnterSignUpPage/EnterServicePage/EnterServicePageR1',
                name: 'EnterServicePageR1',
                component: EnterServicePageR1
              },
              {
                path: '/EnterSignUpPage/EnterServicePage/EnterServicePageR2',
                name: 'EnterServicePageR2',
                component: EnterServicePageR2
              }
            ]
          },
          //#endregion

          //#region 招聘页面
          {
            path: '/EnterSignUpPage/EnterJoinUsPage',
            name: 'EnterJoinUsPage',
            component: EnterJoinUsPage,
            children: [
              {
                path: '/EnterSignUpPage/EnterJoinUsPage/EnterJoinUsPageR1',
                name: 'EnterJoinUsPageR1',
                component: EnterJoinUsPageR1
              },
              {
                path: '/EnterSignUpPage/EnterJoinUsPage/EnterJoinUsPageR2',
                name: 'EnterJoinUsPageR2',
                component: EnterJoinUsPageR2
              }
            ]
          }
          //#endregion
        ]
      }
    ]
  },
  //#endregion

  //#region Service路由
  {
    path: '/ServicePage',
    name: 'ServicePage',
    component: ServicePage,
    children: [
      {
        path: '/ServicePage',
        name: 'Service_ShouYe',
        component: Service_ShouYe
      },
      {
        path: '/ServicePage/GongDan',
        name: 'Service_GongDan',
        component: Service_GongDan
      },
      {
        path: '/ServicePage/HuiHua',
        name: 'Service_HuiHua',
        component: Service_HuiHua
      },
      {
        path: '/ServicePage/KeHu',
        name: 'Service_KeHu',
        component: Service_KeHu
      },
      {
        path: '/ServicePage/LiaoTianJiLu',
        name: 'Service_LiaoTianJiLu',
        component: Service_LiaoTianJiLu
      },
      {
        path: '/ServicePage/SheZhi',
        name: 'Service_SheZhi',
        component: Service_SheZhi
      },
      {
        path: '/ServicePage/GongDan',
        name: 'Service_GongDan',
        component: Service_GongDan
      }
    ]
  },
  //#endregion

  //#region Admin路由
  {
    path: '/AdminPage',
    name: 'AdminPage',
    component: AdminPage,
    children: [
      {
        path: '/AdminPage/ShouYe',
        name: 'Admin_ShouYe',
        component: Admin_ShouYe
      },
      {
        path: '/AdminPage/KeFu',
        name: 'Admin_KeFu',
        component: Admin_KeFu
      },
      {
        path: '/AdminPage/KeHu',
        name: 'Admin_KeHu',
        component: Admin_KeHu
      },
      {
        path: '/AdminPage/GongDan',
        name: 'Admin_GongDan',
        component: Admin_GongDan
      },
      {
        path: '/AdminPage/LiaoTianJiLu',
        name: 'Admin_LiaoTianJiLu',
        component: Admin_LiaoTianJiLu
      },
      {
        path: '/AdminPage/Shezhi',
        name: 'Admin_Shezhi',
        component: Admin_Shezhi
      }
    ]
  }
  //#endregion
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
