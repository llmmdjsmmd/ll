<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <draggeble>
        <component-item :item-info="item" />
      </draggeble>
    </li>
  </ul>
</template>
<script>
import { COMPONENT_LIST } from "../common/constant";
import ComponentItem from "./ComponetItem";
import Draggeble from "./Draggeble";

export default {
  data() {
    return {
      list: COMPONENT_LIST
    };
  },
  components: {
    ComponentItem,
    Draggeble
  }
};
</script>