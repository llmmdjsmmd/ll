<template>
  <div @drop="dropItem" @dragover.prevent ></div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    dropItem(e) {
      e.target.appendChild(e.dataTransfer.getData("text/html"));
    }
  },
  components: {}
};
</script>
<style scoped>
  div{
    border: #000 solid 1px;
    width: 100%;
    height: 600px;
  }
</style>
