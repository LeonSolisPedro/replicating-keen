<template>
	<div class="d-flex flex-column flex-lg-row flex-column-fluid">
		<aside id="loginimagebackground" class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center">
			<div class="d-flex flex-column flex-center p-6 p-lg-10 w-100">
				<a href="#" class="mb-0 mb-lg-20">
					<img alt="Logo" src="@/assets/media/logos/default-white.svg" class="h-40px h-lg-50px" />
				</a>
				<img class="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20"
					src="@/assets/media/misc/auth-screens.png" alt="" />
				<h1 class="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7">Modern, Fresh and Awesome</h1>
			</div>
		</aside>
		<aside class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
			<div class="d-flex flex-center flex-column flex-lg-row-fluid">
				<div class="w-lg-500px p-10">
					<form class="form w-100">
						<div class="text-center mb-11">
							<h1 class="text-dark fw-bolder mb-3">Login</h1>
							<div class="text-gray-500 fw-semibold fs-6">With your Email Address</div>
						</div>
						<div class="fv-row mb-8">
							<input type="text" placeholder="Email" v-model="loginForm.email" class="form-control bg-transparent" />
						</div>
						<div class="fv-row mb-3">
							<input type="password" placeholder="Password" v-model="loginForm.password"
								class="form-control bg-transparent" />
						</div>
						<div class="d-grid mb-10">
							<button @click.prevent="login()" type="submit" class="btn btn-primary">
								<span class="indicator-label">Sign In</span>
							</button>
						</div>
						<div class="text-gray-500 text-center fw-semibold fs-6">Not an user?
							<router-link to="/signup" class="link-primary">Sign Up Here</router-link>
						</div>
					</form>
				</div>
			</div>
			<footer class="d-flex flex-center flex-wrap px-5">
				<div class="d-flex fw-semibold text-primary fs-base">
					<a href="#" class="px-5">Link 1</a>
					<a href="#" class="px-5">Link 2</a>
					<a href="#" class="px-5">Link 3</a>
				</div>
			</footer>
		</aside>
	</div>
</template>

<style>
#loginimagebackground {
	background-image: url('@/assets/media/misc/auth-bg.png')
}
</style>

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

  mounted () {
    this.$setupBlankPage()
  },
  destroyed () {
    this.$destroyBlankPage()
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