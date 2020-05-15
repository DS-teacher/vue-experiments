<template>
  <div>
    <h1>实验五</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`lab-${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="{ id: c.id }"
            :key="`ch-${index}`"
          />
          {{ c.name }}
        </label>
        <br :key="`br-${index}`" />
      </template>
      <button @click="submit" type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <br />
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: null,
      sex: null,
      courses: [],
      title: null
    },
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "副教授" },
      { id: 3, name: "教授" }
    ],
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    submit() {
      console.log(this.user);
    }
  }
};
</script>
