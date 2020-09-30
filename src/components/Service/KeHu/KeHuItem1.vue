<template>
  
  <!-- 用户列表 -->
    
    
      <!-- 客户资料代码 -->
      <!-- 客户静态数据 -->
      <el-container >
          <el-aside width="400px">
                <i class=" el-icon-s-custom" style="font-size: 300px; color: black;margin: 30px"></i>
                <table style="color: #000;margin: 20px;" :data="tableData">
                  <th>
                    <tr class="KeHu_tr">姓名：<spon >{{}}</spon></tr>
                    <tr class="KeHu_tr">公司：<spon>{{}}</spon></tr>
                    <tr class="KeHu_tr">客户评级：<spon>{{}}</spon></tr>
                  </th>
                </table>
          </el-aside>
      <!-- 客户动态数据 -->
      <el-container>

          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="  ——历史访问时间——" width="180">
              </el-table-column>
              <el-table-column prop="address" label="——上次访问IP地址——" width="180">
              </el-table-column>
              <el-table-column prop="telephone" label="——联系方式——" width="180">
              </el-table-column>
            </el-table>
          </el-main>
          <el-footer height="300px">
          </el-footer>
      </el-container>
        

    </el-container>

</template>

<script>
export default {
   data() {
      const item = {
        date: '2016-05-02',
        address: '192.168.9.251',
        telephone: '8008208820'
      };
      return {
        tableData: Array(30).fill(item),
      }
    }
  }
</script>


<style>
.Index_1st{
 margin-left:50px
}

.KeHu_tr{
  display: block;
  text-align:left;
  font-size: 30px;
  margin: 10px;
}
</style>