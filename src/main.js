// import './assets/main.css'
import './styles/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// const app = createApp({
//     data() {
//         return {
//             count: 0,
//             title: 'Hello World',
//             show: true
//         }
//     },
//     methods: {
//         increment() {
//             this.count++
//         }
//     },
// })
  


// app.use(createPinia())
// app.use(router)

app.mount('#app')
