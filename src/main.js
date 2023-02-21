import { createApp } from "vue"
import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
import "./index.scss"
import App from "./App.vue"
const app = createApp(App)

app.use(ElementPlus, { autoInsertSpace: true }).mount("#app")
