<template>
  <div draggable="droppable" @drop.stop="drop" @dragover.prevent @dragstart="dragstart">
    <slot>draggable element</slot>
  </div>
</template>
<script>
// import { type } from "os";
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
      this.$emit('dragstart', event);
    },
    drop(e) {
      this.$emit('drop', event, isCopy);
    }
  }
};
</script>