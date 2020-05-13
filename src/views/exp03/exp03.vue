<template>
  <div>
    <h1>实验三</h1>
    <p>{{ message }}</p>
    <p>
      欢迎{{ student.class }}的 {{ student.name }}同学回来
      <br />
      你的注册日期是 {{ date(student.insertTime) }}
    </p>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "hello world",
    student: { name: "SUN", class: "软件1班", insertTime: "2020-05-10T10:15" }
  }),
  computed: {
    date() {
      return d => d.replace("T", " ");
    }
  }
};
</script>
