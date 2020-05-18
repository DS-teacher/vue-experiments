<template>
  <div>
    <h1>实验六</h1>
    <p>
      通过mapState绑定
      <br />
      {{ user.name }} / {{ user.address }}
    </p>
    <p>
      同步更新vuex数据
      <br />
      <input v-model="address" />
      <br />
      <button type="button" @click="change">更新address</button>
    </p>
    <p>
      异步更新，支持网络请求等操作
      <br />
      <br />
      <input v-model="name" />
      <br />
      <button type="button" @click="change2">更新name</button>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    address: null,
    name: null
  }),
  methods: {
    change() {
      this.$store.commit("changeAddress", this.address);
      this.address = null;
    },
    change2() {
      this.$store.dispatch("changeName", this.name);
      this.name = null;
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
