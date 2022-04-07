<template>
  <div>
    <h2>User Profile</h2>
    <button @click="login">Log in</button>
    <button @click="logout">Log out</button>
    <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();  
          console.log(this.$auth0);     
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
        },
        user,
        isAuthenticated
      };
    }
  };
</script>