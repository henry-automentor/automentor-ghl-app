import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import App from "./App.vue";
import { GHL } from "./ghl";
import config from "./formkit.config";

const ghl = new GHL();
window.ghl = ghl;

createApp(App).use(plugin, defaultConfig(config)).mount("#app");
