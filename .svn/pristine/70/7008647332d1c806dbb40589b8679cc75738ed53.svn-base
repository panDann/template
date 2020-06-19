<template>
<div class="">
    <div class="gx-form-card">
        <div class="gx-form-card-header flex-row align-center justify-between" @click='isFold = !isFold'  >
            <span class="primary-color">{{title}}</span> <span class="iconfont icon-top transition-all primary-color" :class="!isFold? 'rotate180':''"></span>
        </div>
        <div class="gx-form-card-body transition-all " :class="!isFold&&'height0'"  v-show="!isFold">
               <slot />
        </div>
    </div>
</div>
</template>
<script>
export default {
  props:{
     title:{
          type:String,
          required:false,
          default:'标题'
      },
     initFold:{
          type:Boolean,
          required:false,
          default:false
      },
  },
  data () {
    return {
       isFold:false
    }
  },
  mounted() {
    this.isFold = this.initFold
  },
  methods: {
     
  }
}
</script>

<style scoped>

</style>
