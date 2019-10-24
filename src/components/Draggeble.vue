<template>
  <div draggable="true" @drop.stop="drop" @dragover.prevent @dragstart="dragstart">
    <slot>draggable element</slot>
  </div>
</template>
<script>
import { type } from "os";
export default {
  data() {
    return {};
  },
  props: {
    droppable: {
      type: Boolean,
      default: false
    },
    isCopy: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dragstart(event) {
      event.dataTransfer.setData("text/html", event.target);
    },
    drop(e) {
      e.target.appendChild(e.relatedTarget);
      !isCopy && e.relatedTarget.parentNode.removeChild(e.relatedTarget);
    }
  }
};
</script>