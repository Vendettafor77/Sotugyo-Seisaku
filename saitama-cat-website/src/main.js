import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vue アプリケーションの作成
const app = createApp(App);

// Vue Router の使用
app.use(router);

// DOM にマウント
app.mount("#app");

// 開発環境での設定
if (import.meta.env.DEV) {
  console.log("🐱 埼玉保護猫サイト - 開発モード");
  console.log("Vue.js version:", app.version);
}
