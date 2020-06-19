<template>
<div class="gx-login-container">
    <div class="gx-login-form">
        <div class="margin-top30">
            <label class="login-form-label">手机号码</label>
            <div class="login-form-item">
                <input type="number" v-model="form.phone" placeholder="请输入手机号码" id="login-input-name">
            </div>
        </div>
        <a href="javascript:;" class="gx-login-btn-new" @click="modifyPhone">修改</a>
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

    async modifyPhone(){
      console.log('modifyPhone...')
      let { rules,form } = this
      if(!Validator(form,rules))return

      console.log(form.phone)
      let loginInfo = wx.getStorageSync("loginInfo")
      let res = await Api.updateMobilePhone(loginInfo.token, loginInfo.id, form.phone)
      console.log(res);
      if(res.code!="0"){
        wx.showToast({
          title: res.msg,
          icon: 'none'
        })
        return
      }else{
        wx.showToast({
          title: '您的电话已经修改',
          icon: 'none'
        })
        loginInfo.phone = form.phone
        console.log(loginInfo);
        wx.setStorageSync("loginInfo", loginInfo)
        var pages = getCurrentPages(); //当前页面
        var beforePage = pages[pages.length - 2]; //前一页
        wx.navigateBack({
          success: function () {
            beforePage.onLoad(); // 执行前一个页面的onLoad方法
          }
        });
      }
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
/* @import '../../login/index.css'; */
.gx-login-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: bgSize 8s infinite ease-in-out alternate;
    background-attachment: fixed;
    padding: 0.72rem 1.15rem 0;
}
.gx-login-container .gx-login-form {
    font-size: 0.4rem;
}

.gx-login-container .gx-login-form .login-form-label{
    font-size: 0.35rem;
    color: #333;
}

.gx-login-container .gx-login-form .login-form-item {
    border-bottom: 1px solid #DCE2F0;
    margin-bottom: 0.40rem;
    display: flex;
    align-items: center;
}

.gx-login-container .gx-login-form .login-form-item i {
    color: #333;
    width: 0.94rem;
    text-align: center;
    font-size: .44rem;
}

.gx-login-container .gx-login-form .login-form-item input {
    padding: 0.2rem 0;
    color: #333;
    flex-grow: 1;
}
input::placeholder{
  font-size: 50%;
}

.gx-login-container .gx-login-form .login-form-item .del-btn {
    padding-left: 0.4rem;
    display: none;
}

.gx-login-container .gx-login-form .login-form-item .del-btn:before {
    font-family: "CTwing";
    content: "\ebbd";
    color: #fff;
    font-size: .48rem;
}

.gx-login-container .gx-login-form .login-form-item .login-btn-code {
    color: #FF8C01;
}

.login-btn-code:active, .login-btn-code:hover, .login-btn-code:focus{
    color: #d97501;
}

.gx-login-container .gx-login-form .gx-login-btn {
    width: 100%;
    height: 1rem;
    background-color: #FF8C01;
    font-size: 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 0.05rem;
    margin-top: 0.84rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.08rem;
    pointer-events: none;
}

.gx-login-btn:active, .gx-login-btn:hover {
    background-color: #dd7601;
    color: #fff;
    pointer-events: auto;
}

.gx-login-btn-new {
    width: 100%;
    height: 0.8rem;
    background-color: #FF8C01;
    font-size: 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 0.05rem;
    margin-top: 0.84rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.08rem;
}

.gx-login-btn-new:active {
    background-color: #dd7601;
    color: #fff;
    pointer-events: auto;
}
</style>
