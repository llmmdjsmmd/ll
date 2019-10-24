<template>
  <base-object-item :type="type" @dropInContainer="drop">
    <div :class="innerClass"></div>
  </base-object-item>
</template>
<script>
import { TYPE_TEXT_ID } from "@/common/itemTypeConstant";
import BaseObjectItem from "@/components/BaseObjectItem";
import baseProperty from "@/mixins/baseProperty";

export default {
  mixins: [baseProperty],
  data() {
    return {
        innerClass:{},
        width: 6,
        type: TYPE_TEXT_ID
    };
  },
  components: {
    BaseObjectItem
  },
  mounted (){
      console.log(this.data);
  },
  methods:{
      drop(){
          debugger;
      }
  }
};
</script>