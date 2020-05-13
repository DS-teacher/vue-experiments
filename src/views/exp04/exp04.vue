<template>
  <div>
    <h1>实验四</h1>
    <button type="button" @click="change">改变role属性值</button>
    <table v-if="user.role == 'admin'">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>deadline</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ formatDate(h.deadline) }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: { name: "BO", role: "admin" },
    homeworks: [
      { id: 1, name: "Java基本数据类型", deadline: "2010-04-10T09:00" },
      { id: 2, name: "Java封装", deadline: "2010-05-10T12:00" },
      { id: 3, name: "Java泛型", deadline: "2010-06-10T21:30" }
    ]
  }),
  methods: {
    change() {
      this.user.role = this.user.role == "admin" ? "guest" : "admin";
    }
  },
  computed: {
    formatDate() {
      return date => date.replace("T", " ").substring(0, 16);
    }
  }
};
</script>
