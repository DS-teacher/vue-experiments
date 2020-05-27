<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="route" />
    <alert />
  </div>
</template>
<script>
import sidebar from "@/views/sidebar";
import alert from "@/components/alertdialog";
export default {
  components: { sidebar, alert }
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
