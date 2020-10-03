<template>
  <div class="ShouYe-zujian" ref="line"></div>
  <!-- line为折线图 -->
</template>

<script>
let echarts = require('echarts')
// echarts的引用方式：在组建里面直接使用
export default {
  mounted: function () {
    let myChart = echarts.init(this.$refs.line)
    myChart.setOption(this.option)
  },
  // echarts使用动态数据，在data中定义option,通过在初始化之前，直接改变option对应属性值，数据变化后需要再次调init方法刷线图表
  // echarts库使用json格式来配置
  // option表示使用json数据格式的配置来绘制图表
  data: function () {
    return {
      option: {
        title: {
          text: '订单量来源',
        },
        // 为图表配置标题
        tooltip: {
          trigger: 'axis',
          // 触发类型
        },
        // 提示框
        legend: {
          data: ['京东', '淘宝', '小程序', '微店', '公众号'],
        },
        // 图例数据
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        // 网格
        //left参数：控制左边距离 ，如果设置为center则为居中（left:'center'）
        // right参数：控制右边距离，如果设置为center则为居中（right:'center'）
        // bottom参数：控制底部距离
        // containLabel参数：指的是grid 区域是否包含坐标轴的刻度标签,默认不包含
        toolbox: {
          feature: {
            saveAsImage: {},
            // 保存为图片
          },
        },
        // 工具箱
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        // X轴：配置要在X轴显示的项
        yAxis: {
          type: 'value',
        },
        // Y轴：配置要在Y轴显示的项
        series: [
          {
            name: '京东',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          // 系列列表：每个系列通过type决定自己的图表类型
          {
            name: '淘宝',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '小程序',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: '微店',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '公众号',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    }
  },
}
</script>

<style>

</style>