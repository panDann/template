<template>
    <div  class="gx-tab-box flex-row">
        <div
        class="gx-title-tab " 
        :class="(activeKey==item.key&&' active')" 
        v-for="(item, index) in list" 
        :key="index"
        @click="$emit('tab-change',activeKey=item.key)"
        >
        <div class="count">{{item.count}}</div>
            <span class="tab-title">{{item.label}}</span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeKey: 0,
    }
  },
  props:{
      list:{
          type:Array,
          required:true,
          default:()=>[]
      }
  },
//   created () {
//     // let app = getApp()
//   },
//   methods: {
//   },

}
</script>

<style scoped>

.gx-tab-box{
    border-bottom: 1px solid #EDEDED;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    height: 1.2rem;
    font-size: 0.44rem;
    line-height: 1.3rem;
}

.gx-title-tab {
    color: #666666;
    padding: 0rem 0rem 0.05rem 0rem;
    margin-right: 0.05rem;
    cursor: pointer;
    font-size: 0.44rem;
    width: 32%;
    float: left;
    position: relative;
    display: inline-block;
    text-align: center;
}
.count {
    position: absolute;
    top: -10px;
    font-size: .3rem;
    right: 10px;
}
.tab-title{
    padding:0.2rem 0.1rem;

}

.active{
    color: #FF8C01;
    /* border-bottom: 0.12rem solid #FF8C01; */
}

</style>
