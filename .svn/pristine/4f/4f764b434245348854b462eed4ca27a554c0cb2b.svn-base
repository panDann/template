<template>
<div class="gx-container gx-work-con">
   <div class="gx-top-search flex-row justify-start">
            <picker mode='date' class="gx-select-title">
              2020.05
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
              </picker>
             <picker mode='date' class="gx-select-title">
                烟雾告警
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
              </picker>
    </div>
    <!-- <div class="gx-top-search flex" v-if="userType1==0">
            <picker mode='selector' class="gx-select-title" @bindchange="bindPickerChange" :value='index' :range="basePatrolType">
              {{basePatrolTypeName}}
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
              </picker>
            <picker mode='selector' class="gx-select-title" @bindchange="bindPickerChange" :value='index' :range="basePatrolCycle">
              {{basePatrolCycleName}}
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
            </picker>
        <div class="gx-search">
            <div class="gx-search-con flex">
                <img class="icon-search" src="/static/assets/images/icon_search.png" />
                <input  type="text" placeholder="搜索..." class="gx-search-input">
                <img class="icon-del-btn" src="/static/assets/images/icon_close.png" />
            </div>
        </div>
            <span class="gx-search-close">检索</span>
    </div> -->

    <div id="tabContent" class="gx-tab-content">
        <div>
            <ul class="work-list-ul">
                <Card type='inspection' :usertype='userType1' :item='item' v-for="(item, index) in allList" :key="index" />
            </ul>
            <div class="list-bottom-img"></div>
        </div>
    </div>
</div>

</template>

<script>

import * as Api from '@/api/order.js'
import Card from '@/components/card/card.vue'

export default {
  data () {
    return {
      userType1:'',
      basePatrolTypeName:'',
      basePatrolType:['网络巡检', '基础巡检', '自报警巡检'],
      basePatrolCycleName:'',
      basePatrolCycle:['全部', '每月','每周', '每日', '非周期'],
      activeKey:0,
      tabList: [
          {
              label:'全部',
              count:'10',
              key:0
          },
          {
              label:'待处理',
              count:'10',
              key:1
          },
          {
              label:'已完成',
              count:'10',
              key:2
          },
      ],
      allList:[
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    Card,
  },

  methods: {
  
    leapToDetail(planId) {


      console.log('userType: '+this.userType1)
      if(this.userType1==3){
        let url =inspectionDetailPagePath
        mpvue.navigateTo({url})
      }else if(thisw.userType1==0){
        let url ='/pages/inspection/plan/main?planId='+1
        mpvue.navigateTo({url})
      }

    },
    async tabChange(index) {

        let that = this
        let loginInfo = wx.getStorageSync("loginInfo")
        console.log(index);
        this.activeKey=index
        console.log('tttttttt...')

        if(loginInfo.sysUserType==3){
            //请求巡检工单
            console.log('patrolOrder...')
            let resPatrolTask = await Api.scomPatrolTask(loginInfo.token, loginInfo.id, index)
            console.log(resPatrolTask)
            if(resPatrolTask.code!="0"){
                wx.showToast({
                    title: resPatrolTask.msg,
                    icon: 'none'
                })
            }

            if(index==1){
                that.allList = [
                    {
                      id:1,
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          }
                ]
            }else if(index==2){
                that.allList = [
                    {
                      id:1,
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
            id:2,
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
            id:3,
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
                ]
            }else{
                that.allList = [
                    {
                      id:1,
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          },{
            id:2,
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
            id:3,
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
            id:4,
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          }
                ]
            }
        }
        console.log('aaaaaaaaa...')

    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },

    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        basePatrolTypeName: basePatrolType[e.detail.value]
      })
    },
  },

  async onLoad(){
    let that = this

    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('inspection/main/onLoad...')
    console.log(loginInfo)

    that.userType1 = loginInfo.sysUserType
    // that.userType1 = 0

    console.log('userType: '+that.userType1)

    if(that.userType1==3){
      //巡检员
      wx.setNavigationBarTitle({
        title: '巡检工单' 
      })

      //请求巡检工单
      console.log('patrolOrder...')
      let resPatrolTask = await Api.scomPatrolTask(loginInfo.token, loginInfo.id, 0)
      console.log(resPatrolTask)
      if(resPatrolTask.code!="0"){
        wx.showToast({
          title: resPatrolTask.msg,
          icon: 'none'
        })
      }

        that.allList = [
                    {
              id:1,
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          },{
              id:2,
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
            id:3,
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
            id:4,
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          }
                ]

    }else if(that.userType1==0){
      //管理员
      wx.setNavigationBarTitle({
        title: '巡检计划' 
      })

      that.basePatrolTypeName = that.basePatrolType[0]
      that.basePatrolCycleName = that.basePatrolCycle[0]
      console.log('basePatrolTypeName: '+that.basePatrolTypeName)

      //请求巡检计划
      console.log('PatrolPlan...')
      let resPatrolPlan = await Api.scomPatrolPlan(loginInfo.token, loginInfo.tenantId)
      console.log(resPatrolPlan)
      if(resPatrolPlan.code!="0"){
        wx.showToast({
          title: resPatrolPlan.msg,
          icon: 'none'
        })
      }

      that.allList = [
                    {
              id:1,
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          },{
              id:2,
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          }
                ]
    }else{

    }

  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.gx-top-search{
    font-size:13px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:18px;
    padding: .3rem 0;
    border-bottom: 1px #e8e5e5 solid
}

.gx-select-title{
 margin: 0 .1rem
}
.icon-arrow-bottom {
    width: 19rpx;
    height: 10rpx;
    display: inline-block;
}


</style>
