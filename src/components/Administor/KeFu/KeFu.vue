<template>
  <div>
    <el-container>
      <el-header> </el-header>
      <el-main>
        <el-table
          :data="this.$store.state.SData_Company[0].service"
          max-height="500px"
          style="width:1010px"
        >
          <el-table-column prop="id" label="客服ID" width="100" align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="客服昵称"
            width="130"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="tName"
            label="客服姓名"
            width="130"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="account"
            label="客服账户"
            width="150"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pwd"
            label="客服密码"
            width="150"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="tel"
            label="客服电话"
            width="150"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="email"
            label="客服邮箱"
            width="200"
            align="center"
          >
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <div>
          <el-table
            :data="this.$store.state.SData_Company[0].nService"
            style="width:1010px"
            max-height="500px"
          >
            <el-table-column
              prop="name"
              label="客服昵称"
              width="120"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="tName"
              label="客服姓名"
              width="120"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="account"
              label="客服账户"
              width="140"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="pwd"
              label="客服密码"
              width="140"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="tel"
              label="客服电话"
              width="140"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="email"
              label="客服邮箱"
              width="190"
              align="center"
            >
            </el-table-column>
            <el-table-column label="操作" width="160" align="center">
              <template slot-scope="scope">
                <el-button type="success" size="mini">接受</el-button>
                <el-button type="warning" size="mini">拒绝</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      nService: []
    }
  },
  methods: {
    accept() {},
    refuse() {}
  }
}
</script>

<style></style>
