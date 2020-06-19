<template>
<div class="img-pick">
 <div class="img-pick-title">{{title}}</div>
 <div class="flex-row flex-wrap justify-start">
        <div class="img-pick-item"  v-for="(item,i) in urls" :key="i">
          <img :src="item"  alt="" class="img-pick-item-img"   />
        <p class="delete-icon" @click="deleteItem(i)" v-show="isShowAdd">X</p>
        </div>
        <div class="img-pick-item add" v-show="isShowAdd" @click="togglePick">
            +
        </div>
</div>
</div>
    
</template>
<script>
export default {
  data () {
    return {
      activeKey: 0,
      urls:[]
    }
  },
  props:{
      title:{
          type:String,
          required:false,
          default:"图片"
      },
      isShowAdd:{
          type:Boolean,
          default:true
      },
      imgUrls:{
          type:Array,
          required:true,
          default:()=>[]
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
.img-pick {
 margin: .2rem .4rem
}
.img-pick-title {
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
}
.img-pick-item {
    height: 80px;
    width: 20%;
    position: relative;
    margin: .2rem .2rem .2rem 0;
    border-radius: .1rem
}
.img-pick-item-img {
    width: 100%;
    height: 100%;
}
.delete-icon {
    position: absolute;
    height: 20rpx;
    width: 20rpx;
    font-size: 10px;
    margin: 40rpx;
    top: -55rpx;
    right: -50rpx;
    background: rgb(247, 242, 242);
    color: black;
    border-radius: 50%;
    text-align: center;
    padding: 5px;
    opacity: .8;

}
.add {
    font-size: 1.2rem;
    text-align: center;
    line-height: 80px;
    border: solid .5px #666 dashed ;
    background: rgb(247, 242, 242);
    color: white;
}
</style>
