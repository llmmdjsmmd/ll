<template>
  <div type="itemInfo.id">
    <span>{{itemInfo.name}}</span>
    <button @click="del">X</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['itemInfo'],
  methods: {
    del(e) {
      e.target.parentNode.removeChild(e.currentTarget);
    }
  }
};
</script>