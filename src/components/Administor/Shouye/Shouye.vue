<template>

    <div class="Shouye-frame">
  <div class="Shouye-block">
    <span class="Shouye-demonstration">通知</span>
    <el-carousel class="Shouye-el-carousel" height="150px">
      <el-carousel-item  class="Shouye-el-carousel-item" v-for="item in 4" :key="item">
        <h4 class="Shouye-small">{{item}}</h4>
      </el-carousel-item>
    </el-carousel>
</div>

<div class="Shouye-count-box">
      <div class="Shouye-count-item" v-for="item in navItems" :key="item.title">
          <div class="Shouye-title">{{item.title}}</div>
          <div class="Shouye-count">{{item.count}}</div>
          <div class="Shouye-perc">较昨日上涨{{item.perc}}</div>
      </div>
  </div>

  <div class="Shouye-monitor">
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

   .Shouye-frame{
    width: 1292px;
    height: 1800px;
    }
  .Shouye-block{
    width: 500px;
    height: 450;
}
  .Shouye-demonstration{
    font-size: 30px;
    display:block;
   text-align:center;
}

.Shouye-el-carousel__item h4 {
    color: #475669;
    font-size: 30px;
    opacity: 0.75;
    line-height: 150px;
    margin-top: 55px;
    text-align:center;
  }

  .Shouye-el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .Shouye-el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


 .Shouye-count-box{
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
    .Shouye-count-item{
        height: 120px;
        width: 500px;
        border: 1px;
        background-color: rgba(91, 148, 223, 0.05);
        font-size: 13px;
        margin: 10px;
        padding-top: 40px;
    }

    .Shouye-title{
        margin: 1px;
        font: 1em sans-serif;
        color: #000;

    }
    .Shouye-count{
        font-size: 2em;
        font-weight: 800;
    }
    .Shouye-perc{
        font-size: 0.8;
        opacity: 0.6;
    }

   .Shouye-monitor{
       width: 1400px;
       height: 1000px;
       margin-top: 10px;
       background-color: rgb(204, 187, 164);
   }

   
</style>