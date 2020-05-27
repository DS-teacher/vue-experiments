import axios from "axios";
import store from "@/store/index";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

// 响应拦截器
axios.interceptors.response.use(
  resp => resp,
  error => {
    let resp = error.response;
    if (resp) {
      switch (resp.status) {
        case 404:
          store.commit("getException", { message: "数据不存在" });
          break;
      }
    }

    return Promise.reject();
  }
);

export default axios;
