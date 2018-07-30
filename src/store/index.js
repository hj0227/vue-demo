import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './action'
import getters from './getters'

Vue.use(Vuex)
import Product1 from '../images/product1.jpg';
import Product2 from '../images/product2.jpg';
const state = {
  productionLists:[
    {
      "productionImg":Product1,
      "productionDes":"产品详情产品详情产品详情产品详情产品详情",
      "productionPrice":"126",
      "productTitle":"产品1：烤鸭"
    },
    {
      "productionImg":Product2,
      "productionDes":"产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2",
      "productionPrice":"50",
      "productTitle":"产品2：白斩鸡"
    },
    {
      "productionImg":Product1,
      "productionDes":"产品3",
      "productionPrice":"100",
      "productTitle":"产品3：牛肉"
    }
  ],
  chooseProductIndex:0,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})