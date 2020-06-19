<template>
<div class="">
    <div class="gx-form-card">
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检计划</p>
                    <span class="gx-form-list-right fr">{{planDetails.topic}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检任务</p>
                    <span class="gx-form-list-right fr">{{planType[planDetails.patrolTaskType?planDetails.patrolTaskType:0]}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检区域</p>
                    <span class="gx-form-list-right fr">该字段接口暂未提供</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检周期</p>
                    <span class="gx-form-list-right fr">{{planCycle[planDetails.cycle?planDetails.cycle:0]}}{{planDetails.cycleDay?(planDetails.cycleDay+'日'):''}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检开始时间</p>
                    <span class="gx-form-list-right fr">{{planDetails.startTime}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检结束时间</p>
                    <span class="gx-form-list-right fr">{{planDetails.endTime}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-my-return">
        <button class="gx-btn-return" @click="queryWorkOrder">查看已下发巡检工单</button>
    </div>
</div>

</template>
 
<script>

import * as Api from '@/api/order.js'

export default {

  data () {
    return {
       planDetails:{},
       planType:['基础巡检','网路巡检','自报警巡检'],
       planCycle:['每日','每周','每月','非周期']
    }
  },

  mounted() {
    
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },

    queryWorkOrder(){

    }
  },

  async onLoad(options){
    let that = this
    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('PatrolPlanDetails/main/onLoad...')
    console.log(loginInfo)
    console.log(options)
    let planId = options.planId
    console.log('planId: '+planId)

    if (planId == null || planId == 'undefined') {
      planId = -1;
    }

    //请求巡检计划详情
    console.log('PlanDetail...')
    let resDetails = await Api.scomPatrolPlanDetails(loginInfo.token, planId)
    console.log(resDetails)

    //跟接口规范不一致。接口规范code=0成功
    if(resDetails.code!="1"){
        wx.showToast({
          title: resDetails.msg,
          icon: 'none'
        })
        return
    }
    console.log('++++++++++++')
    console.log(resDetails.result)

    that.planDetails = resDetails.result
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.gx-my-return{
    margin: 0rem 0.6rem 0rem;
    position: fixed;
    bottom: 1rem;
    left: 0;
    right: 0;
}

.gx-my-return .gx-btn-return{
    width: 100%;
    height: .8rem;
    background: #FF8C01;
    color: #fff;
    outline: none;
    border-radius: 0.05rem;
    font-size: 0.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
