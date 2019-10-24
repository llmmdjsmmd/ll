<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/preview">About</router-link>
    </div>
    <el-container>
      <el-aside>
        <component-list />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
      <el-aside></el-aside>
    </el-container>
  </div>
</template>
<script>
import ComponentList from "./components/ComponentList";
export default {
  components: {
    ComponentList
  }
};
</script>
<style lang="scss">

</style>
