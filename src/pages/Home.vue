<template>
  <div id="home">
    <div class="container">
      <div class="flex-box flex-align-center border"  v-for="(item, index) in productionLists" :key='index' :class="{ 'mt-10': index>0 }" @click="seeMore(index)">
        <div class="product-li-left">
          <img :src='item.productionImg' class="imgBox"/>
        </div>
        <div class="flex1 ml-10">
          <div class="fs-14 product-txt">{{item.productionDes}}</div>
          <div class="mt-10">
            <span class="fs-12">￥</span>
            <span class="red bold">{{item.productionPrice}}</span>
          </div>
        </div>
      </div>
      <div class="moreBtn" @click="clickTest">{{testTxt}}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  data:()=>{
    return({
      testTxt:'点我看看，我是美女还是帅哥~'
    })
  },
  computed: {
    ...mapGetters(['productionLists','chooseProductIndex'])
  },
  methods:{
    ...mapActions(['chooseIndex']),
    seeMore(index){//查看更多
      this.chooseIndex(index)
      this.$router.push('/production');
    },
    clickTest(){
      this.testTxt='是人！哈哈哈哈'
    }
  }
}

</script>

<style>
@import '../style/base.css';
.product-li-left{
  width: 100px;
  height: 100px;
}
.product-txt{
  line-height: 22px;
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #4b566a;
  height: 44px;
}
.moreBtn{
    background-color: #27a7fe;
    color: #fff;
    padding: 5px;
    text-align: center;
    border-radius: 4px;
    margin-top: 30px;
}
</style>
