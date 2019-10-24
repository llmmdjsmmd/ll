<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <draggeble @dragstart="dragstart" :type="item.id">
          <component-item :item-info="item" />
        </draggeble>
      </li>
    </ul>
    <!-- <ul>
      <li v-for="item in container_list" :key="item.id">
        <draggeble @dragstart="dragstart" :type="item.id">
          <component-item :item-info="item" />
        </draggeble>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { COMPONENT_LIST, CONTAINER_LIST } from "@/common/itemTypeConstant";
import ComponentItem from "./ComponetItem";
import Draggeble from "./Draggeble";

export default {
  data() {
    return {
      list: COMPONENT_LIST,
      container_list: CONTAINER_LIST
    };
  },
  components: {
    ComponentItem,
    Draggeble
  },
  methods: {
    dragstart(e) {
      e.dataTransfer.setData("text/plain", e.target.getAttribute("type"));
    }
  }
};
</script>