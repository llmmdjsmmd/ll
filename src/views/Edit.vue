<template>
  <div @drop="dropItem" @dragover.prevent ></div>
</template>

<script>
import Vue from 'vue'
import { TYPE_CONTANINER_ID } from '@/common/itemTypeConstant'
// import BaseObjectItem from '@/components/BaseObjectItem'
import TextInput from '@/components/TextInput'
import NormalContainer from '@/components/NormalContainer'

export default {
  data (){
    return {
    }
  },
  methods: {
    dropItem(e) {
      const type = +e.dataTransfer.getData("text/plain");
      if(type === TYPE_CONTANINER_ID){
        let item = new Vue({
          render: h => h(NormalContainer)
        }).$mount();
        this.$el.appendChild(item.$el);
      }else{
        alert('必须放到容器中');
      }
    }
  },
  components: {
    NormalContainer,
    TextInput
  }
};
</script>
<style scoped>
  div{
    border: #000 solid 1px;
    width: 100%;
    height: 600px;
  }
</style>
