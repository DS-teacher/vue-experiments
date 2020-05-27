<template>
  <div>
    <h1>实验八</h1>
    <p>创建Axios拦截器，响应全局http异常状态码</p>
    <button type="button" @click="onClick">异常提交</button>
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
export default {
  methods: {
    onClick() {
      this.$store.dispatch("getException");
    }
  }
};
</script>
