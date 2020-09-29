import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //#region 页面布局
    LayOut_EnterPage_NowChoisePage: '1',
    //#endregion
    //#region 信息数据
    //#region 登录注册
    Data_VerificationCode: '7364',

    //#region 公司注册
    Data_SignUp_Company_Progress: 0, //公司注册进度
    Data_SignUp_Company_ID: 0, //公司注册时公司的id

    Data_SignUp_Service_Progress: 0, //客服注册进度
    //#endregion
    //#region 客服注册
    Data_SignUp_Service_CompanyNum: 0, //要注册的公司
    Data_SignUp_Service_Name: '', //客服真实名称
    Data_SignUp_Service_IDNum: '', //身份证号
    Data_SignUp_Service_NName: '', //客服昵称
    Data_SignUp_Service_Email: '', //邮箱
    Data_SignUp_Service_Tel: '', //电话
    //#endregion
    //#region 申请加入团队
    Data_SignUp_JoinUs_Position: 0, //要应聘的岗位
    Data_SignUp_JoinUs_Name: '', //真实姓名
    Data_SignUp_JoinUs_IDNum: '', //身份证号
    //#endregion
    //#endregion
    //#endregion
    //#region 模拟数据加S
    //#region EnterPage所有数据
    SData_Enter_ServiceInfo: [
      {
        name: '客服数量',
        s1: '30人',
        s2: '100人',
        s3: '不限'
      },
      {
        name: '单客服最大接入用户',
        s1: '5人',
        s2: '10人',
        s3: '30人 '
      },
      {
        name: '管理员数量',
        s1: '3人',
        s2: '10人',
        s3: '100人'
      },
      {
        name: '单日最大工作时长',
        s1: '8h',
        s2: '16h',
        s3: '2h'
      },
      {
        name: '专业客服培训',
        s1: '否',
        s2: '是',
        s3: '是'
      },
      {
        name: '服务器实时维护',
        s1: '30人',
        s2: '100人',
        s3: '不限'
      },
      {
        name: '数据存储空间',
        s1: '50G',
        s2: '500G',
        s3: '10T'
      }
    ],

    SData_Company: [
      {
        id: 0,
        name: '凯文云', //公司名称
        principalName: '郑凯文', //负责人名称
        tel: '1234567', //电话
        email: '12345678@qq.com', //邮箱
        scheme: 3, //选择的服务
        admin: [
          {
            name: 'admin',
            account: '凯文云' + 'admin',
            pwd: '123456',
            email: ''
          }
        ], //管理员
        service: [], //客服人员
        nService: [] //正在注册的客服人员
      }
    ]
    //#endregion
    //#endregion
  },
  mutations: {
    //#region 页面布局
    Layout_EnterPage_ChangeChoisePage(state, index) {
      state.LayOut_EnterPage_NowChoisePage = index
    },
    Layout_SetCompanyProgress(state, index) {
      state.Data_SignUp_Company_Progress = index
    },
    Layout_SetServiceProgress(state, index) {
      state.Data_SignUp_Service_Progress = index
    },
    //#endregion

    //#region 登录注册
    //添加一个公司
    Company_SignUp(state, CompanyInfo) {
      state.Data_SignUp_Company_ID = state.SData_Company.length
      let newCompany = {
        id: state.SData_Company.length,
        name: CompanyInfo.name,
        principalName: CompanyInfo.principalName,
        tel: CompanyInfo.tel,
        email: CompanyInfo.email,
        scheme: 0,
        admin: [
          {
            name: 'admin',
            account: CompanyInfo.name + 'admin',
            pwd: '123456',
            email: ''
          }
        ],
        service: [],
        nService: []
      }
      state.SData_Company.push(newCompany)
    },
    //公司选择了一种服务
    CompanyInfo_SignUp_ChoiseScheme(state, data) {
      state.SData_Company[data.id].scheme = data.card
    },
    //公司添加了一个管理员
    CompanyInfo_SignUp_AddAdmin(state, data) {
      state.SData_Company[data.id].admin.push(data.newAdmin)
    },
    //注册一个管理员
    Service_SignUp(state, data) {
      console.log(state.SData_Company[1])
      state.SData_Company[data.id].nService.push(data.newService)
    }
    //#endregion
  },
  actions: {},
  modules: {}
})
