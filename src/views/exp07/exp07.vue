<template>
  <div>
    <h1>实验七</h1>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>email</td>
        <td>address</td>
        <td>phone</td>
        <td>website</td>
        <td>company</td>
      </tr>
      <tr v-for="(u, index) in users" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.address.street }}</td>
        <td>{{ u.phone }}</td>
        <td>{{ u.website }}</td>
        <td>{{ u.company.name }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>
