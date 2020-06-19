<template>
<div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>{{title}}</span>
        </div>
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix" v-for="(item,i) in list" :key="i">

                    <p class="gx-form-list-left fl">{{item.label}}</p>
                    <span class="gx-form-list-right fr" v-if="item.onClick" @click="item.onClick(item)" >{{item.value}}</span>
                    <span class="gx-form-list-right fr" >{{item.value}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
     list:{
          type:Array,
          required:true,
          default:()=>[]
      },
      title:{
          type:String,
          required:true,
          default:'标题'
      },
  },
   mounted() {
    console.log(this);
    
  },
}
</script>