<template>
<div class="">
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>基础信息</span>
            <i class="icon-arrow-bottom fr"></i>
        </div>
        <div class="gx-form-card-body">
            <!--在线-->
            <div class="equipment-info-img">
                <!-- <img src="/static/assets/images/list_img.png" class="list-img-bg"> -->
                <img :src="imageUrl" class="list-img-bg">
                <span class="equipment-info-zaixian">{{status}}</span>
            </div>
            <!--告警-->
            <!--<div class="equipment-info-img">-->
                <!--<img src="images/list_img.png" class="list-img-bg">-->
                <!--<span class="equipment-info-gaojing">告警</span>-->
            <!--</div>-->
            <!--离线-->
            <!--<div class="equipment-info-img">-->
                <!--<img src="images/list_img2.png" class="list-img-bg">-->
                <!--<span class="equipment-info-lixian">离线</span>-->
            <!--</div>-->
            <div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">设备名称</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.equipmentName}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">品牌/型号</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.equipmentNo}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">IMEI</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.snNo}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left list-left-bold  fl">安装位置信息</p>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">建筑地址</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.address}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">安装位置</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.areaName}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left list-left-bold  fl">负责人信息</p>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">设备负责人</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.chargeUser}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">联系电话</p>
                    <span class="gx-form-list-right fr">{{deviceDetails.telephone}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>上报数据</span>
        </div>
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix">
                    <div class="gx-form-list-left fl">

                        <div class="form-list-select-box">
                            <p class="form-list-select"><span>全部属性</span><i class="icon-san-bottom"></i></p>
                            <ul class="form-list-select-ul">
                                <li>全部属性</li>
                                <li>部分属性</li>
                            </ul>
                        </div>
                    </div>
                    <div class="gx-form-list-right fr">
                        <div class="form-list-select-box">
                            <p class="form-list-select"><span>2020年4月</span><i class="icon-san-bottom"></i></p>
                            <ul class="form-list-select-ul">
                                <li>2020年4月</li>
                                <li>2020年5月</li>
                                <li>2020年6月</li>
                                <li>2020年7月</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div :item='item' v-for="(item, index) in IndicatorsInfo" :key="index" class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">上报时间：<span>{{item.createTime}}</span></p>
                    <span class="gx-form-list-right fr">数值：<span>{{item.value}}</span></span>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
 
<script>
import * as Api from '@/api/device.js'

export default {
  
  data () {
    return {
      imagePath:'http://localhost:8080',
      imageUrl:'',
      status:'',
      stat:["在线","离线","告警"],
      deviceDetails:{},
      IndicatorsInfo:[{createTime:'2020-4-22 12:00', value:56},
        {createTime:'2020-4-21 12:00', value:60},
        {createTime:'2020-4-21 14:00', value:84},
        {createTime:'2020-4-20 10:00', value:36}]
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
    }
  },

  async onLoad(options){
    let that = this
    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('onLoad...')
    console.log(loginInfo)

    var deviceId = options.deviceId;
    console.log('deviceId: '+deviceId)

    if (deviceId == null || deviceId == 'undefined') {
      deviceId = -1;
    }

    //请求设备详情
    console.log('Detail...')
    let resDetails = await Api.scomEquipmentInfoGetDetailById(loginInfo.token, deviceId)

    if(!resDetails || resDetails.code!="0"){
        wx.showToast({
          title: resDetails.msg,
          icon: 'none'
        })
        return
    }

    that.deviceDetails = resDetails.data
    console.log('device ...')
    console.log(that.deviceDetails)

    let imgSrc = that.deviceDetails.picSrc?that.deviceDetails.picSrc:''
    that.imageUrl = that.imagePath + imgSrc

    let statId = that.deviceDetails.status - 1
    that.status = that.stat[(statId==0||statId==1)?statId:2]

    //请求上报数据
    console.log('IndicatorsInfo...')
    let resIndicators = await Api.scomEquipmentDataGetIndicatorsInfo(loginInfo.token, deviceId)

    if(!resIndicators || resIndicators.code!="0"){
        wx.showToast({
          title: resIndicators.msg,
          icon: 'none'
        })
        return
    }
    
    that.IndicatorsInfo = resIndicators.data
    console.log('Indicators.data...')
    console.log(that.IndicatorsInfo)
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

</style>
