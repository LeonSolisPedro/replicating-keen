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
							<h1 class="text-dark fw-bolder mb-3">SignUp View</h1>
						</div>
						<div class="text-gray-500 text-center fw-semibold fs-6">Already an user?
							<router-link to="/login" class="link-primary">Login Here</router-link> instead
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
  mounted () {
    this.$setupAuthLayout()
  },
  destroyed () {
    this.$destroyAuthLayout()
  }
}
</script>