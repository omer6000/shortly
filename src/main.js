// import './assets/main.css'
import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp({
//     template: `<h1>Hello World</h1>`
// })
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
