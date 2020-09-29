<template>
  <div>
    <div class="header">
      <el-dropdown>
        <span class="el-dropdown-link">
          全部状态<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="cs in allCustomerServices" :key="cs.id">{{
            cs.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link">
          全部优先级<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="co in allCustomerOrigin" :key="co.id">{{
            co.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
<el-dropdown>
        <span class="el-dropdown-link">
          全部分类<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="cs in allCustomerSort" :key="cs.id">{{
            cs.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown><el-dropdown>
        <span class="el-dropdown-link">
          全部渠道<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="cs in allCustomerRoad" :key="cs.id">{{
            cs.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown><el-dropdown>
        <span class="el-dropdown-link">
          全部客服组<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="cs in allCustomerTeam" :key="cs.id">{{
            cs.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown><el-dropdown>
        <span class="el-dropdown-link">
          全部客服<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="cs in allCustomerService" :key="cs.id">{{
            cs.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </div>
      <div class="search">
        <el-input placeholder="请输入关键词搜索" v-model="input">
          <template slot="append">搜索</template>
        </el-input>
      </div>
        <div class="add">
       <el-button type="text" >批量修改状态</el-button></div>
        <div class="add1">
        <el-button type="text" >导出工单</el-button></div>
<div class="add2">
      <el-button
        type="primary"
        @click="dialogFormVisible = true"
        style="position: relative; top: -105px; left: 550px"
        >添加工单</el-button>
        <el-dialog title="新建工单" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="工单分类" :label-width="formLabelWidth">
        <el-select v-model="form.grade" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="工单标题" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" placeholder="请输入工单标题" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="工单描述" :label-width="formLabelWidth">
      <el-input type="textarea" :rows="4" placeholder="请输入工单描述" v-model="textarea"></el-input>
    </el-form-item>
   <p>添加附件（最多上传5个附件，当个文件最大20M）</p>
    <el-form-item label="抄送人" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="张大仙" value="1"></el-option>
        <el-option label="梦泪" value="2"></el-option>
        <el-option label="一诺" value="3"></el-option>
      </el-select>
    </el-form-item>
     <div class="item2">
            <label for="level">优先级</label>
            <label><input type="radio" id="temp1" name="demo">低</label>
            <label><input type="radio" id="temp2" name="demo">中</label>            
            <label><input type="radio" id="temp3" name="demo">高</label>
            <label><input type="radio" id="temp4" name="demo">紧急</label>          
            </div>
    <el-form-item label="工单状态" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="未分配" value="1"></el-option>
        <el-option label="待处理" value="2"></el-option>
        <el-option label="处理中" value="3"></el-option>
        <el-option label="已解决" value="4"></el-option>
        <el-option label="已关闭" value="5"></el-option>       
      </el-select>
    </el-form-item>
    <el-form-item label="法定客服组" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="客服组一" value="1"></el-option>
        <el-option label="客服组二" value="2"></el-option>
        <el-option label="客服组三" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="法定客服" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="张大仙" value="1"></el-option>
        <el-option label="梦泪" value="2"></el-option>
        <el-option label="一诺" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属客户" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="张大仙" value="1"></el-option>
        <el-option label="梦泪" value="2"></el-option>
        <el-option label="一诺" value="3"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

        </div>
    </div>
    <el-table :data="customers" border style="width: 100%">
      <el-table-column fixed prop="name" label="客户名称" width="140" align="center"> </el-table-column>
      <el-table-column prop="realname" label="真实姓名" width="140" align="center"> </el-table-column>
      <el-table-column prop="tel" label="电话" width="140" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="140" align="center"> </el-table-column>
      <el-table-column prop="level" label="客户等级" width="140" align="center"> </el-table-column>
      <el-table-column prop="origin" label="客户来源" width="140" align="center"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="140" >
        <el-button type="text"  style="float:left">查看详情</el-button>
        <el-button type="text" @click="open1" style="float:left">接单</el-button>
      </el-table-column>
    </el-table>
    <div class="block1">
    
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    
    handleClick(row) {
      console.log(row);
    },
    open1() {
      this.$confirm("是否确定接单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "接单成功!",
          });
        })
        
    },
  },

  data() {
    return {
       options: [{
          value: '选项1',
          label: '请选择'
        }, {
          value: '选项2',
          label: '分类一'
        }, {
          value: '选项3',
          label: '分类二'
        }, {
          value: '选项4',
          label: '分类三'
        },],
        
      dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '100px',
      allCustomerServices: [
        {
          id: 1,
          name: "未分配",
        },
        {
          id: 2,
          name: "待处理",
        },
        {
          id: 3,
          name: "处理中",
        },
        {
          id: 4,
          name: "已解决",
        },
        {
          id: 5,
          name: "已关闭",
        },
      ],
      allCustomerOrigin: [
        {
          id: 1,
          name: "低",
        },
        {
          id: 2,
          name: "中",
        },
        {
          id: 3,
          name: "高",
        },
        {
          id: 4,
          name: "紧急",
        },
      ],
      allCustomerSort: [
        {
          id: 1,
          name: "分类一",
        },
        {
          id: 2,
          name: "分类二",
        },
        {
          id: 3,
          name: "分类三",
        }
      ],
      allCustomerRoad: [
        {
          id: 1,
          name: "手动录入",
        },
        {
          id: 2,
          name: "即时聊天",
        },
        {
          id: 3,
          name: "客户管理",
        },
      ],
      allCustomerTeam: [
        {
          id: 1,
          name: "客服组一",
        },
        {
          id: 2,
          name: "客服组二",
        },
        {
          id: 3,
          name: "客服组三",
        },
      ],
      allCustomerService: [
        {
          id: 1,
          name: "张大仙",
        },
        {
          id: 2,
          name: "梦泪",
        },
        {
          id: 3,
          name: "一诺",
        },
        {
          id: 4,
          name: "上好佳",
        },
      ],
      customers: [
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        },
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
           {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
           {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
           {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
           {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
           {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
           {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        
      ]
    }
  }
  

    // created:function(){
    //     this.$axios.get("http://192.168.9.251:3000/")
    //                 .then(resp=>{
    //                     this.visitors = resp.data.visitors;
    //                 });
    // }
  
}
</script>

<style>
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  height: 40px;
  width: 130px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(242, 242, 242, 1);
  color: #fff;
  border-radius: 2px;
  left: 15px;
  top: 60px;
}

.el-table {
  position: relative;
  top: -10px;
  /* background-color: cornflowerblue; */
}
.add {
  position: absolute;
  left: 660px;
  top: 15px;
  width: 100px;
  background-color: #dcdfe6;
  border-color: #DCDFE6;
  border-radius: 2px;
  color: #ffffff;
  text-align:center;
}
.add1{
  position: absolute;
  left: 770px;
  top: 15px;
  width: 100px;
  background-color: #dcdfe6;
  border-color: #DCDFE6;
  border-radius: 2px;
  color: #ffffff;
  text-align:center;
}
.block {
  position: relative;
  top: 65px;
  left: 15px;
}
.search {
  position: relative;
  top: 25px;
  left: 250px;
  width: 230px;
}
p{
text-indent: 2.5em;
}
.item2{
text-indent: 2.5em;
}
.el-pagination{
  text-align:center ;
}
.allCustomerServices .allCustomerOrigin .allCustomerSort .allCustomerRoad .allCustomerService{
  text-align: left;
  width: 200px;
}
</style>