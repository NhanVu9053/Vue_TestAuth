import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';


const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-snv.us.auth0.com",
    client_id: "WcFsJtjzApACAMeIYJoaE1mNQ3y5QdcF",
    redirect_uri: window.location.origin,
    audience: "http://localhost:3000/",
  })
);

app.mount('#app')
