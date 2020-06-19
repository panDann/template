import {fetch} from '@/utils/fetch.js'

export const scomEquipmentInfoGetList = (token, tenantsId, status, pageNum, pagesize)=>{
    let param = {}
    param.tenantsId = tenantsId
    if(status){
        param.status = status
    }
    if(pageNum){
        param.pageNum = pageNum
    }
    if(status){
        param.PageSize = pagesize
    }
    return fetch(`system/scomEquipmentInfo/getList`,{"tenantsId": tenantsId}, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}

export const scomEquipmentInfoGetDetailById = (token, deviceId)=>{
    return fetch(`system/scomEquipmentInfo/getDetailById`,{"id": deviceId}, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}

export const scomEquipmentDataGetIndicatorsInfo = (token, deviceId, indicatorsId, updateTime)=>{
    let param = {}
    param.equipmentId = deviceId
    if(indicatorsId){
        param.indicatorsId = indicatorsId
    }
    if(updateTime){
        param.updateTime = updateTime
    }
    return fetch(`system/scomEquipmentData/getIndicatorsInfo`,param, 'POST' ,{"Authorization":token, "Content-Type":"application/x-www-form-urlencoded"})
}