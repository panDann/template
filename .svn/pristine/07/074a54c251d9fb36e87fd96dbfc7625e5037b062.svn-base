<template>
<div class="textarea-container">
  <div class="textarea-container-title">
    {{title}}
  </div>
  <textarea class="textarea-container-area" v-model="value"></textarea>
  <p class="textarea-container-limit">{{limit}}</p>
</div>
</template>
<script>
export default {
  data () {
    return {
      urls:[]
    }
  },
  props:{
      title:{
          type:String,
          required:false,
          default:"图片"
      },
      value:{
          type:String,
          required:false,
          default:""
      },
       placeholder:{
          type:String,
          required:false,
          default:"请输入"
      },
       limit:{
          type:Number,
          required:false,
          default:0
      },
  },
  mounted () {
    // let app = getApp()
    this.urls = this.imgUrls
  },
  methods: {
    async togglePick () {
        let {tempFiles} = await mpvue.chooseImage()
        this.urls = [...this.urls,...tempFiles.map(el=>el.path)]

        this.$emit("on-image", this.urls)
        
    },
    deleteItem(index){
        this.urls.splice(index,1)
        this.$emit("on-image", this.urls)
    }
  },

}
</script>

<style scoped>
.textarea-container{
  padding: .2rem
}
.textarea-container-title{
  font-size: 14px
}
.textarea-container-area{

  min-height: 100px;
  border: none;
}
.textarea-container-limit{
  text-align: right
}
</style>
