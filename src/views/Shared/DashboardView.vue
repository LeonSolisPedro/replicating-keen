<template>
  <div>
    <nav>
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/items">Items</router-link> |
      <a @click="logout()" href="#">Logout</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("roles")
      this.$router.push({path: "/login"})
    }
  },
  //We are redirecting to corresponding dashboards
  RedirectToDashboards() { return "RedirectToDashboards"; },
}
</script>