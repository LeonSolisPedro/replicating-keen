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
						<span class="svg-icon svg-icon-2 rotate-180">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path opacity="0.5"
									d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
									fill="currentColor" />
								<path
									d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
									fill="currentColor" />
							</svg>
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
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
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