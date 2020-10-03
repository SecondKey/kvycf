import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCustomer: null, //当前用户
    currentOrder: null,
    currentOrder_List: [
    //   {
    //   id:'', //工单id
    //   title: '', //工单标题
    //   state:'', //工单状态，0/1/2 0:完成 1：处理中 2：待处理
    //   client: '', //发起工单的客户的id
    //   category: '', //分类
    //   priority: '', //优先级
    //   createTime: '', //创建时间
    //   convers: [
    //     {
    //       id: 0, //会话的id
    //       service: 1, //接待客服id
    //       msg: [
    //         {
    //           id: 0,
    //           owner: '客户01',
    //           time: '2019.12.05 13:23',
    //           contant: '你好,我的手机坏了，那你能帮帮我吗？'
    //         },
    //         {
    //           id: 1,
    //           owner: '客服房镇',
    //           time: '2019.12.05 13:24',
    //           contant: '你什么配置？'
    //         },
    //         {
    //           id: 2,
    //           owner: '客户01',
    //           time: '2019.12.05 13:25',
    //           contant: '我8G内存'
    //         }
    //       ]
    //     }
    //   ]
    // },
  ],
    //#region 页面布局
    LayOut_EnterPage_NowChoisePage: '1',
    //#endregion

    //#region 信息数据
    //#region 注册
    Data_VerificationCode: '7364',

    Data_SignUp_Company_Progress: 0, //公司注册进度
    Data_SignUp_Company_ID: 0, //公司注册时公司的id

    Data_SignUp_Service_Progress: 0, //客服注册进度
    //#endregion

    //#region 登录
    Data_Login_Conpany: 0,
    Data_Login_Type: 'Admin',
    Data_Login_ID: 1,
    //#endregion

    //#region 模拟数据 加S

    //#region 其他数据

    //#endregion

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
        AutoReply: {
          start: true,
          startMsg: '您好，请问有什么需要帮助的吗？',
          atuo: false,
          autoTime: 20000,
          autoMsg: '正在为您处理，请稍后',
          end: true,
          endText: '这次聊天对你有什么帮助吗？请为本次服务打分'
        },
        KeFuChangYongYu: [
          {
            value: 1,
            label: '你好，请问有什么可以帮你？'
          },
          {
            value: 2,
            label: '正在为您查询相关信息，请稍等'
          },
          {
            value: 3,
            label: '请问您对这次服务满意吗？'
          },
          {
            value: 4,
            label: '再见，祝您生活愉快'
          }
        ],
        admin: [
          {
            id: 0,
            name: 'admin',
            account: '凯文云' + 'admin',
            pwd: '123456',
            email: ''
          },
          {
            id: 1,
            name: '郑凯文',
            account: 'kevin',
            pwd: '238268',
            email: '1725433499@qq.com'
          },
          {
            id: 2,
            name: '余峤枫',
            account: 'qiaofeng',
            pwd: '990519',
            email: '2278228786@qq.com'
          }
        ], //管理员
        service: [
          {
            id: 0,
            name: '小五',
            tName: '古明地觉',
            account: '55555',
            pwd: '555555',
            tel: '555',
            email: '555555@hotmail.com'
          },
          {
            id: 1,
            name: 'VicFang',
            tName: '房镇',
            account: '19980910',
            pwd: '19890202',
            tel: '88888888',
            email: '88888888@qq.com'
          },
          {
            id: 2,
            name: '余峤枫测试客服',
            tName: '余峤枫',
            account: '1825610',
            pwd: '990519',
            tel: '18256104698',
            email: '2278228786@qq.com'
          }
        ], //客服人员
        nService: [], //正在注册的客服人员
        client: [
          {
            id: 0, //k客户编号
            name: '客户00', //客户名称
            tel: '13912345670', //手机
            email: '12345678@qq.com', //邮箱
            position: '北京市', //地址
            rate: 10, //信誉评级
            visitTime: '2020.9.28', //访问时间
            order: [0, 1, 2, 3], //订单
            isBlack: false
          },
          {
            id: 1,
            name: '客户01',
            tel: '13912345671',
            email: '12345678@qq.com',
            position: '北京市',
            rate: 10,
            visitTime: '2020.9.28',
            order: [4, 5, 6],
            isBlack: false
          },
          {
            id: 2,
            name: '客户02',
            tel: '13912345672',
            email: '12345678@qq.com',
            position: '北京市',
            rate: 10,
            visitTime: '2020.9.28',
            order: [7, 8, 9],
            isBlack: false
          },
          {
            id: 3,
            name: '客户03',
            tel: '13912345673',
            email: '12345678@qq.com',
            position: '北京市',
            rate: 10,
            visitTime: '2020.9.28',
            order: [7, 8, 9],
            isBlack: false
          },
          {
            id: 4,
            name: '客户04',
            tel: '1391234567',
            email: '12345678@qq.com',
            position: '北京市',
            rate: 10,
            visitTime: '2020.9.28',
            order: [7, 8, 9],
            isBlack: false
          },
          {
            id: 5,
            name: '客户05',
            tel: '13912345678',
            email: '12345678@qq.com',
            position: '北京市',
            rate: 10,
            visitTime: '2020.9.28',
            order: [7, 8, 9],
            isBlack: false
          }
        ],
        order: [
          {
            id: 0, //工单id
            title: '手机维修', //工单标题
            state: 0, //工单状态，0/1/2 0:完成 1：处理中 2：待处理
            client: 1, //发起工单的客户的id
            category: 0, //分类
            priority: 3, //优先级
            createTime: '2019.12.05', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 1, //接待客服id
                msg: [
                  {
                    id: 0,
                    owner: '客户01',
                    time: '2019.12.05 13:23',
                    contant: '你好,我的手机坏了，那你能帮帮我吗？'
                  },
                  {
                    id: 1,
                    owner: '客服房镇',
                    time: '2019.12.05 13:24',
                    contant: '你什么配置？'
                  },
                  {
                    id: 2,
                    owner: '客户01',
                    time: '2019.12.05 13:25',
                    contant: '我8G内存'
                  }
                ]
              }
            ]
          },
          {
            id: 1, //工单id
            title: '手机维修', //工单标题
            state: 0, //工单状态，工单是否已经完成
            client: 2, //发起工单的客户的id
            category: 0, //分类
            priority: 3, //优先级
            createTime: '2019.12.05', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    talker: 0, //说话的人，0客户，1客服
                    time: '2019.12.05 13:23',
                    contant: '我手机坏了'
                  }
                ]
              }
            ]
          },
          {
            id: 2, //工单id
            title: '手机维修', //工单标题
            state: 1, //工单状态，工单是否已经完成
            client: 3, //发起工单的客户的id
            category: 0, //分类
            priority: 3, //优先级
            createTime: '2019.12.05', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    talker: 0, //说话的人，0客户，1客服
                    time: '2019.12.05 13:23',
                    contant: '我手机坏了'
                  }
                ]
              }
            ]
          },
          {
            id: 3, //工单id
            title: '手机维修', //工单标题
            state: 2, //工单状态，工单是否已经完成
            client: 4, //发起工单的客户的id
            category: 0, //分类
            priority: 3, //优先级
            createTime: '2019.12.05', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    talker: 0, //说话的人，0客户，1客服
                    time: '2019.12.05 13:23',
                    contant: '我手机坏了'
                  }
                ]
              }
            ]
          },
          {
            id: 4, //工单id
            title: '手机维修', //工单标题
            state: 2, //工单状态，工单是否已经完成
            client: 5, //发起工单的客户的id
            category: 0, //分类
            priority: 3, //优先级
            createTime: '2019.12.05', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    talker: 0, //说话的人，0客户，1客服
                    time: '2019.12.05 13:23',
                    contant: '我手机坏了'
                  }
                ]
              }
            ]
          },
          {
            id: 5, //工单id
            title: '手机维修', //工单标题
            state: 2, //工单状态，工单是否已经完成
            client: 6, //发起工单的客户的id
            category: 0, //分类
            priority: 3, //优先级
            createTime: '2019.12.05', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    talker: 0, //说话的人，0客户，1客服
                    time: '2019.12.05 13:23',
                    contant: '我手机坏了'
                  }
                ]
              }
            ]
          }
        ],
        blackList: []
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

    //#region 注册
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
            id: 0,
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
      data.newAdmin.id = state.SData_Company[data.id].admin.length
      state.SData_Company[data.id].admin.push(data.newAdmin)
    },
    //注册一个客服
    Service_SignUp(state, data) {
      state.SData_Company[data.id].nService.push(data.newService)
    },
    //#endregion
    //#region 登录
    Login_AdminLogin(state, data) {
      state.Data_Login_Conpany = data.cid
      state.Data_Login_Type = 'Admin'
      state.Data_Login_ID = data.id
    },
    Login_ServiceLogin(state, data) {
      console.log(data.cid + ' ' + data.id)
      state.Data_Login_Conpany = data.cid
      state.Data_Login_Type = 'Service'
      state.Data_Login_ID = data.id
    },
    //#endregion

    //#region 其他数据

    //#endregion

    //#region 全部数据
    SData_AddConvers(state, newConvers) {
      state.SData_Company[
        state.Data_Login_Conpany
      ].order[0].convers[0].msg.push(newConvers)
    },

    SData_AddChangYongYu(state, newText) {
      state.SData_Company[state.Data_Login_Conpany].KeFuChangYongYu.push({
        value: state.SData_Company[state.Data_Login_Conpany].KeFuChangYongYu,
        label: newText
      })
    },
    //#endregion

    currentCustomer(state, payload) {
      state.currentCustomer = payload
    },

    currentOrder(state, payload) {
      state.currentOrder = payload
    },
    currentOrder_List(state, payload) {
      state.currentOrder_List = payload
    },
   
  },
  actions: {},
  modules: {}
})
