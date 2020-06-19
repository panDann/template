<template>
<div class="gx-login-container">
    <img src="/static/assets/images/login_logo.png" class="gx-logo" alt="" srcset="">
    <div class="gx-login-form">
        <div>
            <label class="login-form-label">手机号码</label>
            <div class="login-form-item">
                <input type="number" v-model="form.phone" placeholder="请输入手机号码" id="login-input-name">
            </div>
        </div>
        <div>
            <label  class="login-form-label">验证码</label>
            <div class="login-form-item">
                <input type="number" v-model="form.code" placeholder="请输入验证码" id="login-input-pwd">
                <a href="javascript:;" class="login-btn-code" @click="getCode">获取验证码</a>
            </div>
        </div>
        <a href="javascript:;" class="gx-login-btn_new" @click="login2Server">登录</a>
    </div>

</div>

</template>

<script>
import * as Api from '@/api/login.js'
import { Validator } from  '@/utils/validator.js'
export default {
  data () {
    return {
      form:{
        phone:'',
        code:'',
        verifyToken:'',
      },
      rules:[
        {
          phone:[
            {require:true,message:'请输入手机号'},
            {validator:/^1\d{10}$/,message:'手机号不规范'},
            ]
        }
      ],
      rules2:[
        {
          phone:[
            {require:true,message:'请输入手机号'},
            {validator:/^1\d{10}$/,message:'手机号不规范'},
            ],
          code:[
            {require:true,message:'请输入验证码'},
            {validator:/^\d{6}$/,message:'验证码不规范'},
          ]
        }
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },


  mounted() {
      // fetch('/login')
  },
  methods: {
 
    async getCode() {
      let { rules,form } = this
      console.log('getCode==========>>')
      if(!Validator(form,rules))return

          wx.showLoading({
            title:'加载中' ,
            mask: true,
            duration:3000
          });
          let {phone} = this.form
          
         let res = await Api.getCode(phone)
         console.log(res)
         if(res.code=="0"){
           form.verifyToken = res.data;
           console.log('verifyToken: '+form.verifyToken);
         }else{
           from.verifyToken = '';
         }
    },

    async login2Server() {
      console.log('loginToServer==========>>')

      let { rules2,form } = this
      if(!Validator(form,rules2))return

      //获取微信code
      let wxres = await wx.login();
      console.info('获取code');
      console.info(wxres);
      if(wxres.errMsg!='login:ok'){
        wx.showToast({
          title: wxres.errMsg,
          icon: 'none'
        })
        return
      }

      let data = {
        phone: form.phone,
        verifyCode: form.code,
        verifyToken: form.verifyToken,
        wechatCode: wxres.code
      }
      console.log(data);

      let res = await Api.login(data)
      console.log(res);
      if(res.code!="0"){
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
        return
      }

      console.log('StorageSync...');
      wx.setStorageSync("loginInfo", res.data)
      console.log(wx.getStorageSync("loginInfo"))

      wx.reLaunch({url: '../first/main'})
    },

  },

  created () {
    // let app = getApp()
  }
}

function JSON_to_URLEncoded(element,key,list){
  var list = list || [];
  if(typeof(element)=='object'){
    for (var idx in element)
      JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
  } else {
    list.push(key+'='+encodeURIComponent(element));
  }
  return list.join('&');
}

</script>

<style scoped>

@import './index.css';
</style>
