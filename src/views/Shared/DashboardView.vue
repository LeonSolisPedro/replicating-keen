<template>
	<div id="kt_app_page" class="app-page  flex-column flex-column-fluid ">
		<header id="kt_app_header" class="app-header">
			<a @click="logout()" href="#">Logout</a>
		</header>
		<div id="kt_app_wrap" class="app-wrapper  flex-column flex-row-fluid ">
			<aside id="kt_app_sidebar" class="app-sidebar flex-column" v-ktdrawer data-kt-drawer="true"
				data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}"
				data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start"
				data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
				<div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
					<router-link to="/">
						<img alt="Logo" src="@/assets/media/logos/default-dark.svg" class="h-30px app-sidebar-logo-default" />
					</router-link>
					<div id="kt_app_sidebar_toggle" class="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate" v-kttoggle
						data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
						data-kt-toggle-name="app-sidebar-minimize">
						<span class="svg-icon rotate-180">
							<font-awesome-icon icon="fa-solid fa-angles-left" />
						</span>
					</div>
				</div>
				<nav class="app-sidebar-menu overflow-hidden flex-column-fluid">
					<div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper hover-scroll-overlay-y my-5" v-ktscroll
						data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto"
						data-kt-scroll-dependencies="#kt_app_sidebar_logo" data-kt-scroll-wrappers="#kt_app_sidebar_menu"
						data-kt-scroll-offset="5px">
						<div class="menu menu-column menu-rounded menu-sub-indention fw-semibold px-3" id="#kt_app_sidebar_menu"
							v-ktmenu data-kt-menu="true" data-kt-menu-expand="false">

              <!--#region Admin dashboard -->
							<div class="menu-item">
								<router-link to="/" class="menu-link">
									<span class="menu-icon">
										<font-awesome-icon icon="fa-solid fa-house" />
									</span>
									<span class="menu-title">Dashboard</span>
								</router-link>
							</div>
							<div class="menu-item">
								<router-link to="/items" class="menu-link">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">Items</span>
								</router-link>
							</div>
							<!--#endregion -->

						</div>
					</div>
				</nav>
			</aside>
			<main id="kt_app_main" class="app-main flex-column flex-row-fluid">
				<div class="d-flex flex-column flex-column-fluid">
					<router-view />
				</div>
				<footer id="kt_app_footer" class="app-footer ">
					<p>footer</p>
				</footer>
			</main>
		</div>
	</div>
</template>

<script>
export default {
  mounted () {
    this.$setupTemplate()
  },
  destroyed () {
    this.$destroyTemplate()
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      this.$router.push({ path: "/login" });
    },
  },
  //We are redirecting to corresponding dashboards
  RedirectToDashboards() {
    return "RedirectToDashboards";
  },
};
</script>