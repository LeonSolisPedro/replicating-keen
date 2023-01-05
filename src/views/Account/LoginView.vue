<template>
  <div>
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label>Email</label>
        <input v-model="loginForm.email" type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="loginForm.password" type="password" class="form-control" />
      </div>
      
      <small>Not an user? <router-link to="/signup">Sign Up Here</router-link></small>
      <br>
      <button @click.prevent="login()" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  data(){
    return {
      loginForm: {
        email: null,
        password: null
      }
    }
  },

  methods: {
    login(){
      if(this.loginForm.email === "admin@admin.com" && this.loginForm.password === "admin"){
        localStorage.setItem("token", "true")
        localStorage.setItem("roles", JSON.stringify(["Administrator"]))
        return this.redirect()
      }
      if(this.loginForm.email === "employee@wintercr.com" && this.loginForm.password=== "employee"){
        localStorage.setItem("token", "true")
        localStorage.setItem("roles", JSON.stringify(["Employee"]))
        return this.redirect()
      }
      alert("Incorrect Password")
    },
    
    redirect(){
      const returnUrl = this?.$router?.currentRoute?.query?.returnUrl
      if(returnUrl)
        this.$router.push({ path: returnUrl })
      else
        this.$router.push({ path: '/' })
    }
  }
}
</script>




