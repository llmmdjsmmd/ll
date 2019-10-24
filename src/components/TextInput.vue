<template>
  <base-object-item :type="type">
    <el-input></el-input>
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
        width: 6,
        type: TYPE_TEXT_ID
    };
  },
  components: {
    BaseObjectItem
  }
};
</script>