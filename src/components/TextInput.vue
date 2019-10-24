<template>
  <base-object-item>
    <el-input></el-input>
  </base-object-item>
</template>
<script>
import { TYPE_TEXT_ID } from "@/common/itemTypeConstant";
import BaseObjectItem from "@/components/BaseObjectItem";

export default {
  mixins: [BaseObjectItem],
  data() {
    return {
        width: 6,
        type: TYPE_TEXT_ID
    };
  },
  components: {
    BaseObjectItem
  }
};
</script>