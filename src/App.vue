<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="route" />
  </div>
</template>
<script>
import sidebar from "@/views/sidebar";
export default {
  components: { sidebar }
};
</script>
<style scoped>
#app {
  border: 1px solid red;
  display: flex;
}
#sidebar {
  width: 250px;
  border: 1px solid red;
}
#route {
  border: 1px solid red;
  flex-grow: 1;
}
</style>
