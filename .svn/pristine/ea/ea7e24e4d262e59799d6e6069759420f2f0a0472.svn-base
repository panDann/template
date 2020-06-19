<template>
  <div class>
    <div class="gx-form-card">
      <div class="gx-form-card-body">
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">设备名称</p>
            <span class="gx-form-list-right fr">{{}}</span>
          </div>
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">IMEI</p>
            <span
              class="gx-form-list-right fr"
            >{{}}</span>
          </div>
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">告警类型</p>
            <span class="gx-form-list-right fr">{{}}</span>
          </div>
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">告警时间</p>
            <span class="gx-form-list-right fr">{{}}</span>
          </div>
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">状态</p>
            <span class="gx-form-list-right fr">
              <span class="warning">待处理</span>
              <span class="light-blue">完成</span>
            </span>
          </div>
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">地址</p>
            <span class="gx-form-list-right fr">{{}}</span>
          </div>
          <div class="gx-form-card-list clearfix">
            <p class="gx-form-list-left fl">安装位置</p>
            <span class="gx-form-list-right fr">{{}}</span>
          </div>
      </div>
    </div>
      <div class="bottom">
             <button class="submit" >已经检查确认处理</button>
      </div>
  </div>
</template>
 
<script>
import * as Api from "@/api/order.js";

export default {
  data() {
    return {
      taskDetails: {},
      taskType: ["基础巡检", "网路巡检", "自报警巡检"],
      taskCycle: ["每日", "每周", "每月", "非周期"],
      deviceStat: ["", "未巡检", "已巡检"],
      StatColor: ["", "gx-textOrange", "gx-textBlue"],
      orderDeviceList: []
    };
  },

  mounted() {},
  methods: {},

  async onLoad(options) {
    let that = this;
    let loginInfo = wx.getStorageSync("loginInfo");
    console.log("PatrolPlanDetails/main/onLoad...");
    console.log(loginInfo);
    console.log(options);

    var planId = options.planId;
    console.log("planId: " + planId);

    if (planId == null || planId == "undefined") {
      planId = -1;
    }

    //请求巡检工单详情
    console.log("TaskDetail3...");
    let resDetails = await Api.scomPatrolTaskDetails(loginInfo.token, planId);

    if (!resDetails || resDetails.code != "0") {
      wx.showToast({
        title: resDetails.msg,
        icon: "none"
      });
      return;
    }
    console.log("++++++++++++3");
    console.log(resDetails.data);
    that.taskDetails = resDetails.data;

    //请求巡检工单设备列表
    console.log("TaskDeviceList...");
    let resDeviceList = await Api.getTaskEquipmentById(loginInfo.token, planId);

    if (!resDeviceList || resDeviceList.code != "0") {
      wx.showToast({
        title: resDeviceList.msg,
        icon: "none"
      });
      return;
    }
    console.log("++++++++++++4");
    console.log(resDeviceList.data);
    that.orderDeviceList = resDeviceList.data;

    that.orderDeviceList = [
      { equipmentName: "设备名称1", name: "西塔13楼1301房", status: 1 },
      { equipmentName: "设备名称2", name: "西塔13楼1302房", status: 2 },
      { equipmentName: "设备名称3", name: "西塔13楼1303房", status: 2 }
    ];
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.bottom{
    margin: .5rem 0.6rem .5rem;
    bottom: 1rem;
    
}

.bottom .submit{
    width: 100%;
    height: .8rem;
    background: #FF8C01;
    color: #fff;
    outline: none;
    border-radius: 0.05rem;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
