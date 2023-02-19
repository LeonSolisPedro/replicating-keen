<template>
	<div id="kt_app_page" class="app-page  flex-column flex-column-fluid ">
		<header id="kt_app_header" class="app-header">
			<div id="kt_app_header_container"
				class="app-container container-fluid d-flex align-items-stretch justify-content-between">
				<div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
					<div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
						<span class="svg-icon svg-icon-1">
							<font-awesome-icon icon="fa-solid fa-bars" />
						</span>
					</div>
				</div>
				<div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 d-lg-none">
					<router-link to="/">
						<img alt="Logo" src="@/assets/media/logos/default-small.svg" class="theme-light-show h-30px" />
						<img alt="Logo" src="@/assets/media/logos/default-small-dark.svg" class="theme-dark-show h-30px" />
					</router-link>
				</div>
				<div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
					<div>
					</div>
					<div class="app-navbar flex-shrink-0">
						<div class="app-navbar-item ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
							<div class="cursor-pointer symbol symbol-35px symbol-md-40px"
								data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
								data-kt-menu-placement="bottom-end">
								<img src="@/assets/media/avatars/300-3.jpg" alt="user" />
							</div>
							<div
								class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
								v-ktmenu data-kt-menu="true">
								<div class="menu-item px-3">
									<div class="menu-content d-flex align-items-center px-3">
										<div class="symbol symbol-50px me-5">
											<img alt="Logo" src="@/assets/media/avatars/300-3.jpg" />
										</div>
										<div class="d-flex flex-column">
											<div class="fw-bold d-flex align-items-center fs-5">Max Smith
												<span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
											</div>
											<a href="#" class="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
										</div>
									</div>
								</div>
								<div class="separator my-2"></div>
								<div class="menu-item px-5">
									<span @click="logout()" class="menu-link px-5">Sign Out</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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

              <!--#region Keen component -->
							<div class="menu-item">
								<router-link to="/" class="menu-link">
								  <span class="menu-icon">
										<font-awesome-icon icon="fa-solid fa-home" />
									</span>
									<span class="menu-title">Dashboard</span>
								</router-link>
							</div>
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<span href="#" class="menu-link">
									<span class="menu-icon">
										<font-awesome-icon icon="fa-solid fa-puzzle-piece" />
									</span>
									<span class="menu-title">Keen components</span>
									<span class="menu-arrow"></span>
								</span>
								<div class="menu-sub menu-sub-accordion">
									<div class="menu-item">
										<router-link to="/components/index" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Overview</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/utilities" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Utilities</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/flexlayouts" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Flex Layouts</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/text" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Text</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/background" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Background</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/borders" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Borders</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/opacity" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Opacity</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/controls" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Controls</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/checksandradios" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Checks And Radios</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/inputgroup" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Input Group</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/floatinglabels" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Floating Labels</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/advancedcontrols" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Advanced Controls</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/buttons" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Buttons</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/accordion" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Accordion</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/alerts" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Alerts</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/badges" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Badges</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/breadcrumps" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Breadcrumps</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/bullets" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Bullets</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/cards" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Cards</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/carousel" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Carousel</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/indicator" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Indicator</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/pageloading" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Page Loading</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/modal" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Modal</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/overlay" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Overlay</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/pagination" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Pagination</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/popovers" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Popovers</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/hover" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Hover</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/pulse" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Pulse</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/rating" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Rating</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/ribbon" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Ribbon</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/rotate" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Rotate</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/separator" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Separator</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/symbol" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Symbol</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/tables" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Tables</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/tabs" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Tabs</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/toasts" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Toasts</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/tooltips" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Tooltips</span>
										</router-link>
									</div>
									<div class="menu-item">
										<router-link to="/components/underline" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Underline</span>
										</router-link>
									</div>
									
								</div>
							</div>
              <!--#endregion -->

							<!--#region Custom plugins -->
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<span href="#" class="menu-link">
									<span class="menu-icon">
										<font-awesome-icon icon="fa-brands fa-vuejs" />
									</span>
									<span class="menu-title">Custom plugins</span>
									<span class="menu-arrow"></span>
								</span>
								<div class="menu-sub menu-sub-accordion">
									<div class="menu-item">
										<router-link to="/plugins/index" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Overview</span>
										</router-link>
										<router-link to="/plugins/normalmode" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Normal Mode</span>
										</router-link>
										<router-link to="/plugins/manualmode" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Manual Mode</span>
										</router-link>
										<router-link to="/plugins/vuelidate" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Vuelidate</span>
										</router-link>
										<router-link to="/plugins/sweetalert2" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">SweetAlert2</span>
										</router-link>
									</div>
								</div>
							</div>
							<!--#endregion -->

              <!--#region Empty Pages -->
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<span href="#" class="menu-link">
									<span class="menu-icon">
										<font-awesome-icon icon="fa-solid fa-file" />
									</span>
									<span class="menu-title">Empty Pages</span>
									<span class="menu-arrow"></span>
								</span>
								<div class="menu-sub menu-sub-accordion">
									<div class="menu-item">
										<router-link to="/emptypages/index" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Overview</span>
										</router-link>
									</div>
									<div class="menu-item">
										
									</div>
								</div>
							</div>
							<!--#endregion -->

              <!--#region Role-Based Sample -->
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<span href="#" class="menu-link">
									<span class="menu-icon">
										<font-awesome-icon icon="fa-solid fa-hand" />
									</span>
									<span class="menu-title">Role-Based Sample</span>
									<span class="menu-arrow"></span>
								</span>
								<div class="menu-sub menu-sub-accordion">
									<div class="menu-item">
										<router-link to="/items/index" class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Overview</span>
										</router-link>
									</div>
								</div>
							</div>
							<!--#endregion -->

						</div>
					</div>
				</nav>
			</aside>
			<main id="kt_app_main" class="app-main flex-column flex-row-fluid">
				<div class="d-flex flex-column flex-column-fluid">
					<section id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
						<div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
							<div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
								<ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
									<li v-for="(match, id) in matchedRoutes" :key="id" class="breadcrumb-item text-muted">
										<router-link :to="match.path" class="text-muted text-hover-primary"> {{ match?.name ?? "PLACEHOLDER"
											}} </router-link>
										<span v-if="id != matchedRoutes.length - 1" class="bullet bg-gray-400 w-5px h-2px ms-2"></span>
									</li>
								</ul>
							</div>
							<div class="d-flex align-items-center">
								<select class="form-select form-select-sm bg-body border-body w-175px">
									<option>Select Campaign</option>
									<option>Twitter Campaign</option>
									<option>Facebook Campaign</option>
								</select>
								<span class="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4">
									<font-awesome-icon icon="fa-solid fa-plus" class="fa-lg" />
								</span>
							</div>
						</div>
					</section>
					<div id="kt_app_content" class="app-content flex-column-fluid">
						<div id="kt_app_content_container" class="app-container container-xxl">
							<router-view />
						</div>
					</div>
				</div>
				<footer id="kt_app_footer" class="app-footer ">
					<div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
						<div class="text-dark order-2 order-md-1">
							Made with <font-awesome-icon class="text-muted" icon="fa-regular fa-heart" /> in <a
								href="https://vuejs.org/" target="_blank">Vue.js</a>
						</div>
					</div>
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
	computed: {
		matchedRoutes(){
			const routes = this.$route.matched.filter(item => { return item.path !== "" })
			const found = routes[routes.length-1]?.path?.match(/\b\w+$/) ?? []
			if(found[0] === "index")
			  routes.pop()
			return routes
		}
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