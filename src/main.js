import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import router from "./router";

library.add(faUserSecret, faAnglesLeft);

createApp(App)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app");
