import {fetch} from '@/utils/fetch.js'


export const getCode = (phone)=>{
    console.log('-------ccc--------'+phone)
    return fetch(`sendCode/${phone}`,{},'GET')
}

export const login = (data)=>{
    return fetch(`login`,data,'POST',{'content-type':'application/x-www-form-urlencoded'})
}

export const checkToken = (token, tenantsId)=>{
    return fetch(`data/qeury/warnStatisitics`,{"tenantId": tenantsId}, 'POST' ,{"Authorization":token, "Content-Type":"application/json"})
}

export const updateMobilePhone = (token, userid, phone)=>{
    console.log('-------ccc--------')
    let param = {}
    param.id = userid
    param.mobilePhone = phone
    console.log(param)
    return fetch(`system/sys_user/update`,param,'POST',{"Authorization":token, 'content-type':'application/json'})
}