import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCustomer: null, //当前用户
    currentOrder: null,
    currentOrder_List: [],
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
        nService: [
          {
            id:3,
            name: '何锦涛',
            tName: '123',
            pwd: '123',
            account: '123',
            tel: '13',
            email: '1725@qq.com'
          }
        ], //正在注册的客服人员
        client: [
          {
            id: 0, //k客户编号
            name: '你最珍贵（姜总）', //客户名称
            tel: '19119820801', //手机
            email: '419436@qq.com', //邮箱
            position: '大理', //地址
            rate: '8星', //信誉评级
            history:[
            {
            VisitTime:'2020.9.28', //访问时间
            VisitIp:'192.168.9.113',
            VisitEq:'pc',
            order: [0], //订单
            },
            {
              VisitTime:'2020.9.29', //访问时间
              VisitIp:'192.168.9.152',
              VisitEq:'pc',
              order: [0], //订单
            },
            {
                VisitTime:'2020.10.2', //访问时间
                VisitIp:'192.168.9.123',
                VisitEq:'pc',
                order: [0], //订单
            },
            {
                  VisitTime:'2020.10.28', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'pc',
                  order: [0], //订单
            },{
              VisitTime:'2020.11.2', //访问时间
              VisitIp:'192.168.9.113',
              VisitEq:'pc',
              order: [0], //订单
              },
              {
                VisitTime:'2020.11.3', //访问时间
                VisitIp:'192.168.9.152',
                VisitEq:'pc',
                order: [0], //订单
              },
              {
                  VisitTime:'2020.11.22', //访问时间
                  VisitIp:'192.168.9.123',
                  VisitEq:'pc',
                  order: [0], //订单
              },
              {
                    VisitTime:'2020.12.28', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'pc',
                    order: [0], //订单
              },{
                VisitTime:'2021.11.2', //访问时间
                VisitIp:'192.168.9.113',
                VisitEq:'pc',
                order: [0], //订单
                },
                {
                  VisitTime:'2021.11.3', //访问时间
                  VisitIp:'192.168.9.152',
                  VisitEq:'pc',
                  order: [0], //订单
                },
                {
                    VisitTime:'2021.11.22', //访问时间
                    VisitIp:'192.168.9.123',
                    VisitEq:'pc',
                    order: [0], //订单
                },
                {
                      VisitTime:'2021.12.28', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'pc',
                      order: [0], //订单
                },
              
          ],
            isBlack: false
          },
          {
            id: 1,
            name: '马云',
            tel: '8832969',
            email: '8848@163.com',
            position: '杭州市',
            rate: '10星',
           history:[
            {
            VisitTime:'2020.9.28', //访问时间
            VisitIp:'192.168.9.113',
            VisitEq:'web',
            order: [1], //订单
            },
            {
              VisitTime:'2020.9.29', //访问时间
              VisitIp:'192.168.9.152',
              VisitEq:'pc',
              order: [1], //订单
            },
            {
                VisitTime:'2020.10.2', //访问时间
                VisitIp:'192.168.9.123',
                VisitEq:'ios',
                order: [1], //订单
            },
            {
                  VisitTime:'2020.10.28', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'pc',
                  order: [1], //订单
            },{
              VisitTime:'2020.11.2', //访问时间
              VisitIp:'192.168.9.113',
              VisitEq:'pc',
              order: [1], //订单
              },
              {
                VisitTime:'2020.11.3', //访问时间
                VisitIp:'192.168.9.152',
                VisitEq:'ios',
                order: [1], //订单
              },
              {
                  VisitTime:'2020.11.22', //访问时间
                  VisitIp:'192.168.9.123',
                  VisitEq:'pc',
                  order: [1], //订单
              },
              {
                    VisitTime:'2020.12.28', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'pc',
                    order: [1], //订单
              },{
                VisitTime:'2021.11.2', //访问时间
                VisitIp:'192.168.9.113',
                VisitEq:'web',
                order: [1], //订单
                },
                {
                  VisitTime:'2021.11.3', //访问时间
                  VisitIp:'192.168.9.152',
                  VisitEq:'pc',
                  order: [1], //订单
                },
                {
                    VisitTime:'2021.11.22', //访问时间
                    VisitIp:'192.168.9.123',
                    VisitEq:'mac',
                    order: [1], //订单
                },
                {
                      VisitTime:'2021.12.28', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'pc',
                      order: [1], //订单
                },
              
          ],
            isBlack: false
          },
          {
            id: 2,
            name: '马化腾',
            tel: '12344321',
            email: 'QQ@qq.com',
            position: '深圳',
            rate: 10,
            rate: '10星',
            history:[
              {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [2], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [2], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [2], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [2], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [2], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [2], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [2], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [2], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [2], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [2], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [2], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [2], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [1], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [1], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [1], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [1], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [1], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [1], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [1], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [1], //订单
                },
            ],
            isBlack: false
          },
          {
            id: 3,
            name: '李彦宏',
            tel: '12121212',
            email: '2233@qq.com',
            position: '北京市',
            rate: '6星',
            history:[
              {
              VisitTime:'2020.9.24', //访问时间
              VisitIp:'192.168.9.113',
              VisitEq:'web',
              order: [3], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.152',
                VisitEq:'web',
                order: [3], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.123',
                  VisitEq:'web',
                  order: [3], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'web',
                    order: [3], //订单
              },
              {
                VisitTime:'2020.9.24', //访问时间
                VisitIp:'192.168.9.113',
                VisitEq:'web',
                order: [3], //订单
                },
                {
                  VisitTime:'2020.9.29', //访问时间
                  VisitIp:'192.168.9.152',
                  VisitEq:'web',
                  order: [3], //订单
                },
                {
                    VisitTime:'2020.10.2', //访问时间
                    VisitIp:'192.168.9.123',
                    VisitEq:'web',
                    order: [3], //订单
                },
                {
                      VisitTime:'2020.10.28', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'web',
                      order: [3], //订单
                },
                {
                  VisitTime:'2020.9.24', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'web',
                  order: [3], //订单
                  },
                  {
                    VisitTime:'2020.9.29', //访问时间
                    VisitIp:'192.168.9.152',
                    VisitEq:'web',
                    order: [3], //订单
                  },
                  {
                      VisitTime:'2020.10.2', //访问时间
                      VisitIp:'192.168.9.123',
                      VisitEq:'web',
                      order: [3], //订单
                  },
                  {
                        VisitTime:'2020.10.28', //访问时间
                        VisitIp:'192.168.9.113',
                        VisitEq:'web',
                        order: [3], //订单
                  },
            ],
            
            isBlack: false
          },
          {
            id: 4,
            name: '吉良吉影',
            tel: '1391234567',
            email: '12345678@qq.com',
            position: '杜王町',
            rate: '9星',
            history:[
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [2], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [2], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [2], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [2], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [2], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [2], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [2], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [2], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [2], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [2], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [2], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [1], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [1], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [1], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [1], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [1], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [1], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [1], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [1], //订单
                },
            ],
            isBlack: false
          },
          {
            id: 5,
            name: '盖兹',
            tel: '13912345678',
            email: '12345678@qq.com',
            position: '北京市',
            history:[
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [4], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [4], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [4], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [4], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [4], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [4], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [4], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [4], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [4], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [4], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [4], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [4], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [4], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [4], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [4], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [4], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [4], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [4], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [4], //订单
                },
            ],
            isBlack: false
          },
          {
            id: 6,
            name: '古加',
            tel: '152236513685',
            email: '125143521@qq.com',
            position: '南京市',
            history:[
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [5], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [5], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [5], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [5], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [5], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [5], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [5], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [5], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [5], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [5], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [5], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [5], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [5], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [5], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [5], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [5], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [5], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [5], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [5], //订单
                },
            ],
            isBlack: false
          },
          {
            id: 7,
            name: '铠武',
            tel: '113412565489',
            email: '21053615@qq.com',
            position: '中山市',
            history:[
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [6], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [6], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [6], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [6], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [6], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [6], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [6], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [6], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [6], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [6], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [6], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [6], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [6], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [6], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [6], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [6], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [6], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [6], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [6], //订单
                },
            ],
            isBlack: false
          },
          {
            id: 8,
            name: '埃克塞德',
            tel: '152365152415',
            email: '32611562@qq.com',
            position: '哈尔滨市',
            history:[
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [7], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [7], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [7], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [7], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [7], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [7], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [7], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [7], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [7], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [7], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [7], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [7], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [7], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [7], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [7], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [7], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [7], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [7], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [7], //订单
                },
            ],
            isBlack: false
          },
          {
            id: 9,
            name: '陈明珠',
            tel: '125254113651',
            email: '25123204@qq.com',
            position: '无锡市',
            history:[
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [8], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [8], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [8], //订单
              },
              {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [8], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [8], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [8], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [8], //订单
                },
                {
                  VisitTime:'2022.9.28', //访问时间
                  VisitIp:'192.168.9.13',
                  VisitEq:'QQweb',
                  order: [8], //订单
                  },
                  {
                    VisitTime:'2022.9.29', //访问时间
                    VisitIp:'192.168.9.52',
                    VisitEq:'QQ',
                    order: [8], //订单
                  },
                  {
                      VisitTime:'2022.10.2', //访问时间
                      VisitIp:'192.168.9.113',
                      VisitEq:'TIM',
                      order: [8], //订单
                  },
                  {
                        VisitTime:'2022.10.28', //访问时间
                        VisitIp:'192.168.9.103',
                        VisitEq:'Wechat',
                        order: [8], //订单
                  },
               {
              VisitTime:'2020.9.28', //访问时间
              VisitIp:'192.168.9.13',
              VisitEq:'QQweb',
              order: [8], //订单
              },
              {
                VisitTime:'2020.9.29', //访问时间
                VisitIp:'192.168.9.52',
                VisitEq:'QQ',
                order: [8], //订单
              },
              {
                  VisitTime:'2020.10.2', //访问时间
                  VisitIp:'192.168.9.113',
                  VisitEq:'TIM',
                  order: [8], //订单
              },
              {
                    VisitTime:'2020.10.28', //访问时间
                    VisitIp:'192.168.9.103',
                    VisitEq:'Wechat',
                    order: [8], //订单
              }, {
                VisitTime:'2021.9.28', //访问时间
                VisitIp:'192.168.9.13',
                VisitEq:'QQweb',
                order: [8], //订单
                },
                {
                  VisitTime:'2021.9.29', //访问时间
                  VisitIp:'192.168.9.52',
                  VisitEq:'QQ',
                  order: [8], //订单
                },
                {
                    VisitTime:'2021.10.2', //访问时间
                    VisitIp:'192.168.9.113',
                    VisitEq:'TIM',
                    order: [8], //订单
                },
                {
                      VisitTime:'2021.10.28', //访问时间
                      VisitIp:'192.168.9.103',
                      VisitEq:'Wechat',
                      order: [8], //订单
                },
            ],
            isBlack: false
          },
          
        ],
        order: [
          {
            id: 0, //工单id
            title: '手机维修', //工单标题
            state: 0, //工单状态，0/1/2 0:完成 1：处理中 2：待处理
            client: 1, //发起工单的客户的id
            category: '维修工单', //分类
            priority: '紧急', //优先级
            createTime: '2020.12.05', //创建时间
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
                    contant: '我华为畅享'
                  }
                ]
              }
            ]
          },
          {
            id: 1, //工单id
            title: '更换电池', //工单标题
            state: 0, //工单状态，工单是否已经完成
            client: 2, //发起工单的客户的id
            category: '维修工单', //分类
            priority: '中', //优先级
            createTime: '2020.05.23', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    id: 0,
                    owner: '客户01',
                    time: '2019.12.05 13:23',
                    contant: '你好,你们这提供电池更换的服务嘛？'
                  },
                  {
                    id: 1,
                    owner: '客服房镇',
                    time: '2019.12.05 13:24',
                    contant: '你的电池什么型号？'
                  },
                  {
                    id: 2,
                    owner: '客户01',
                    time: '2019.12.05 13:25',
                    contant: '华为mate9专用电池'
                  }
                ]
              }
            ]
          },
          {
            id: 2, //工单id
            title: '更换新机', //工单标题
            state: 1, //工单状态，工单是否已经完成
            client: 3, //发起工单的客户的id
            category: '新购工单', //分类
            priority: '高', //优先级
            createTime: '2020.06.15', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    id: 0,
                    owner: '客户02',
                    time: '2019.12.05 13:23',
                    contant: '你好,我需要购买你们的新机'
                  },
                  {
                    id: 1,
                    owner: '客服房镇',
                    time: '2019.12.05 13:24',
                    contant: '你需要哪种价位的？'
                  },
                  {
                    id: 2,
                    owner: '客户02',
                    time: '2019.12.05 13:25',
                    contant: '最贵的'
                  }
                ]
              }
            ]
          },
          {
            id: 3, //工单id
            title: '手机贴膜', //工单标题
            state: 2, //工单状态，工单是否已经完成
            client: 4, //发起工单的客户的id
            category: '服务工单', //分类
            priority: '低', //优先级
            createTime: '2020.09.21', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    id: 0,
                    owner: '客户03',
                    time: '2019.12.05 13:23',
                    contant: '你好,我昨天从你们公司收购了一批设备存在问题'
                  },
                  {
                    id: 1,
                    owner: '客服房镇',
                    time: '2019.12.05 13:24',
                    contant: '请问您的历史单号？'
                  },
                  {
                    id: 2,
                    owner: '客户03',
                    time: '2019.12.05 13:25',
                    contant: '2019-11-11'
                  }
                ]
              }
            ]
          },
          {
            id: 4, //工单id
            title: '购买充电器', //工单标题
            state: 2, //工单状态，工单是否已经完成
            client: 5, //发起工单的客户的id
            category: '新购工单', //分类
            priority: '中', //优先级
            createTime: '2020.11.25', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    id: 0,
                    owner: '客户04',
                    time: '2019.12.05 13:23',
                    contant: '你好,我想购买充电器？'
                  },
                  {
                    id: 1,
                    owner: '客服房镇',
                    time: '2019.12.05 13:24',
                    contant: '你什么配置？'
                  },
                  {
                    id: 2,
                    owner: '客户04',
                    time: '2019.12.05 13:25',
                    contant: 'oneplus'
                  }
                ]
              }
            ]
          },
          {
            id: 5, //工单id
            title: '保修摄像头', //工单标题
            state: 2, //工单状态，工单是否已经完成
            client: 6, //发起工单的客户的id
            category: '维修工单', //分类
            priority: '中', //优先级
            createTime: '2020.07.16', //创建时间
            convers: [
              {
                id: 0, //会话的id
                service: 0, //接待客服id
                msg: [
                  {
                    id: 0,
                    owner: '客户04',
                    time: '2019.12.05 13:23',
                    contant: '你好,你们的手机摄像头发生了故障可以保修嘛？'
                  },
                  {
                    id: 1,
                    owner: '客服房镇',
                    time: '2019.12.05 13:24',
                    contant: '麻烦请提供保修卡？'
                  },
                  {
                    id: 2,
                    owner: '客户04',
                    time: '2019.12.05 13:25',
                    contant: 'xx-xx-xx'
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
      console.log(state.LayOut_EnterPage_NowChoisePage)
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
      console.log(state.SData_Company[0].nService)
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
    }
  },
  actions: {},
  modules: {}
})
