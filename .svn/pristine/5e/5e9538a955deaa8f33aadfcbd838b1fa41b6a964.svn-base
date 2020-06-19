<template>

      <li class="equipment-list-li">
                <p class="equipment-list-title">
                    <img :src="item.imgUrl" class="equipment-list-gaojin"></i>
                    {{item.equipmentName}}</p>
                <p class="equipment-list-time">安装位置：<span>{{item.address?item.address:''+item.areaName}}</span></p>
                <p class="equipment-list-info">
                    <span><span>IMEI：</span>{{item.snNo}}</span>
                    <a  href="javascript:;" class="equipmentk-list-state" @click="leapToDetail(item.id)">
                        <i class="icon-arrow"></i>
                    </a>
                </p>
            </li>
</template>

<script>
import {deviceDetailPagePath,} from '@/consts/path'

export default {
  props: {
     item:{
          type:Object,
          required:true,
          default:()=>{}
      }
  },
  methods: {
       leapToDetail(id) {
          console.log('id: '+id)
          let url = deviceDetailPagePath+'?deviceId='+id
          console.log('leapToDetail...')
          console.log(url)
          mpvue.navigateTo({url})
      },
  },
}
</script>

<style scoped>

.equipment-list-ul .equipment-list-li {
    padding: 0.2rem 0rem;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    font-size: 0.40rem;
    color: #777;
}

.equipment-list-li p{
    padding: 0.05rem 0rem;
}

.equipment-list-li .equipment-list-title {
    color: #2A2A2F;
    font-size: 0.40rem;
    /*font-weight: 600;*/
}

.equipment-list-gaojin{
    width: 1rem;
    height: 0.5rem;
    /* background-image: url("../images/equipment_list1.png"); */
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: -0.1rem;
}

.equipment-list-zaixian{
    width: 1rem;
    height: 0.5rem;
    /* background-image: url("../images/equipment_list2.png"); */
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: -0.1rem;
}

.equipment-list-lixian{
    width: 1rem;
    height: 0.5rem;
    /* background-image: url("../images/equipment_list3.png"); */
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: -0.1rem;
}

.equipmentk-list-state{
    float: right;
}
</style>
