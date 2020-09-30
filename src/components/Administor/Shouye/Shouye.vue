<template>

    <div class="ShouYe-frame">
  <div class="ShouYe-block">
    <span class="ShouYe-demonstration">通知</span>
    <el-carousel class="ShouYe-el-carousel" height="150px">
      <el-carousel-item  class="ShouYe-el-carousel-item" v-for="item in 4" :key="item">
        <h4 class="ShouYe-small">{{item}}</h4>
      </el-carousel-item>
    </el-carousel>
</div>

<div class="ShouYe-count-box">
      <div class="ShouYe-count-item" v-for="item in navItems" :key="item.title">
          <div class="ShouYe-title">{{item.title}}</div>
          <div class="ShouYe-count">{{item.count}}</div>
          <div class="ShouYe-perc">较昨日上涨{{item.perc}}</div>
      </div>
  </div>

  <div class="ShouYe-monitor">
<div>

</div>

</div>

</div>
</template>

<script>
export default {
    data:function(){
        return {
            navItems:[
                {
                    title:'总会话量',
                    count:230,
                    perc:'10%'
                },
                {
                    title:'处理中的会话数量',
                    count:200,
                    perc:'10%'
                },
                {
                    title:'在线客服数',
                    count:30,
                    perc:'10%'
                },
                {
                    title:'今日消息数',
                    count:2300,
                    perc:'10%'
                }
            ]
        }
    }
}
</script>

<style>

   .ShouYe-frame{
    width: 1292px;
    height: 1800px;
    }
  .ShouYe-block{
    width: 500px;
    height: 450;
}
  .ShouYe-demonstration{
    font-size: 30px;
    display:block;
   text-align:center;
}

.ShouYe-el-carousel__item h4 {
    color: #475669;
    font-size: 30px;
    opacity: 0.75;
    line-height: 150px;
    margin-top: 55px;
    text-align:center;
  }

  .ShouYe-el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .ShouYe-el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


 .ShouYe-count-box{
        height: 203px;
        width: 1292px;
        background: rgb(142, 169, 199);
        border-radius: 4px;
        margin-top: 30px;

        box-sizing: border-box;
        padding: 14px 20px;

        display: flex;
        justify-content:space-between;
    }
    .ShouYe-count-item{
        height: 120px;
        width: 500px;
        border: 1px;
        background-color: rgba(91, 148, 223, 0.05);
        font-size: 13px;
        margin: 10px;
        padding-top: 40px;
    }

    .ShouYe-title{
        margin: 1px;
        font: 1em sans-serif;
        color: #000;

    }
    .ShouYe-count{
        font-size: 2em;
        font-weight: 800;
    }
    .ShouYe-perc{
        font-size: 0.8;
        opacity: 0.6;
    }

   .ShouYe-monitor{
       width: 1400px;
       height: 1000px;
       margin-top: 10px;
       background-color: rgb(204, 187, 164);
   }

   
</style>