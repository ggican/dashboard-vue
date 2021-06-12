import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./index.css";

import axios from "axios";
import VueAxios from "vue-axios";

// createApp(App).use(router, VueAxios, axios).mount("#app");

// import { createApp } from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
