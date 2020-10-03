<template>
  <el-aside width="235px" style="background-color: #ffffff">
    <!--  -->
    <el-menu :default-openeds="['1', '3']">
      <el-menu-item
        :index="c.id"
        v-for="c in customers"
        @click="handleClick(c.id)"
        :key="c.id"
        >{{ c.name }}</el-menu-item
      >
    </el-menu>
  </el-aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      customers: this.$store.state.SData_Company[0].client,
      order_msgs: this.$store.state.SData_Company[0].order
    }
  },
  methods: {
    handleClick: function(id) {
      // 从数组中找出和当前选择的用户的id相同的元素
      let order_msg = null
      for (let i in this.order_msgs) {
        if (this.order_msgs[i].id === id) {
          order_msg = this.order_msgs[i]
          break
        }
      }

      let customer = null
      for (let j in this.customers) {
        if (this.customers[j].id === id) {
          customer = this.customers[j]
          break
        }
      }
      this.$store.commit('currentCustomer', customer) //将找出来的客户提交到state中
      console.log(this.$store.state.currentCustomer)
      this.$store.commit('currentOrder', order_msg) //将找出来的客户提交到state中
      console.log(this.$store.state.currentOrder)
    }
  },

  created() {
    this.$store.state.currentOrder = this.$store.state.SData_Company[0].order[0]
    console.log(this.$store.state.currentOrder)
  },
  created() {
    this.$store.state.currentCustomer = this.$store.state.SData_Company[0].client[0]
  }
}
</script>

<style></style>
