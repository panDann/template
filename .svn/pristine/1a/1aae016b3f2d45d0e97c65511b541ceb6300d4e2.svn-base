<template>
<page-meta
  root-font-size="16px"
>
 <div class="gx-container gx-home">
        <div class="gx-home-card">
            <a href="javascript:;" @click="deviceList" class="gx-home-card-title"><span>设备情况</span><i class="icon-arrow"></i></a>
            <ul class="gx-home-card-ul">
                <li class="gx-home-card-list" v-for="(item, index) in deviceData" :key="index">
                    <img :src="item.imgUrl" class="gx-home-card-list-img">
                    <p class="gx-home-card-list-title">{{item.label}}</p>
                    <p class="gx-home-card-list-unm">{{item.count}}</p>
                </li>
            </ul>
        </div>
    <div class="gx-home-card">
        <a class="gx-home-card-title"><span>今日警告</span></a>
        <ul class="gx-home-card-ul">
            <li class="gx-home-card-list" v-for="(item, index) in todayWarningData" :key="index">
                <img :src="warningIcon[item.id]" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">{{item.name}}</p>
                <p class="gx-home-card-list-unm">{{item.count}}</p>
            </li>
        </ul>
    </div>
    <map id="map" longitude="113.324520"
     class="map"
     :markers="markers"
     display="ALWAYS"
     latitude="23.099994" scale="14"  show-location ></map>
</div> 
</page-meta>

</template>
 
<script>
import * as Api from '@/api/first.js'

export default {
 
  data () {
    return {
      today:'',
      sysUserType:0,
      activeTab:1,
      totalTask: 0,
      totalTitle: '',
      markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      callout:{
        content:'tip',
        fontSize:12,
        color:'#666',
        anchorY:-40,
        borderRadius:4,
        padding:10
      }
    }],
      deviceData: [
      {
        label:'设备总数',
        imgUrl:'/static/assets/images/home_list1.png',
        count:0
      },
      {
        label:'在线设备',
        imgUrl:'/static/assets/images/home_list2.png',
        count:0
      }, {
        label:'离线设备',
        imgUrl:'/static/assets/images/home_list3.png',
        count:0
      },
    ],
     todayWarningData:[
       {
                id: 20,
                name: "烟雾告警",
                count: 56
        },
        {
                id: 21,
                name: "防拆告警",
                count: 8
        },
        {
                id: 22,
                name: "烟感故障",
                count: 8
        },
        {
                id: 23,
                name: "低电量告警",
                count: 16
        }

     ],
      warningIcon: {
        '20':'/static/assets/images/home_list5.png',
        '21':'/static/assets/images/home_list6.png',
        '22':'/static/assets/images/home_list7.png',
        '23':'/static/assets/images/home_list4.png',
      }
    }
  },

  mounted() {
    
  },
  methods: {

    deviceList(){
      console.log("deviceList...")
      wx.navigateTo({
        url: '/pages/device/main'
      })
    },
  },

  

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.gx-home-card-title:active {
    pointer-events: auto;
}
.map {
  position: absolute;
  width: 100%; 
  height: 40vh;
  bottom: 0;
}
</style>
