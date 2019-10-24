<template>
  <div type="itemInfo.id">
    <span>{{itemInfo.name}}</span>
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