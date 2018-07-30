<template>
  <div id="production">
    <div class="container">
      <!-- <img :src='item.productionImg' class="imgBox"/> -->
      <div>{{productionLists[chooseProductIndex].productTitle}}</div>
      <div>{{productionLists[chooseProductIndex].productionDes}}</div>
    </div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'production',
  data:()=>{
    return({})
  },
  computed: {
    ...mapGetters(['productionLists','chooseProductIndex'])
  },
  methods:{
    
  }
}
</script>


<style>
</style>
