<template>
  <div class="row gy-5 g-xl-10">

    <div class="col-xl-8 mb-xl-10">
      <div class="card card-flush h-xl-100">
        <div
          class="card-header bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start bg-light-success"
          style="height: 134px">
          <h3 class="card-title align-items-start flex-column pt-15">
            <span class="fw-bold fs-2x mb-3">Custom plugins</span>
          </h3>
          <div class="card-toolbar">
            <font-awesome-icon class="text-success" id="cuteicon" icon="fa-brands fa-vuejs" />
          </div>
        </div>
        
        <div class="card-body fs-6  p-10 text-gray-700">
          <div class="pb-10">
            <h1 id="overview" class="anchor fw-bold mb-5"><a href="#overview"></a> Overview</h1>
            <div class="py-5">
              The following components, are plugins that will help you build <router-link to="datatables" target="_blank">cruds</router-link>, <router-link to="ktmenu/index" target="_blank">menus</router-link>, <router-link to="sweetalert2" target="_blank">alerts</router-link> and <router-link to="vuelidate" target="_blank">validations</router-link>.
            </div>
            <div class="py-5">
              These plugins require some <span class="fw-bold text-gray-600">specific configuration</span> in order for them to work properly
            </div>
            <div class="py-5">
              We recommend reading all the documentation, so you can configure each plugin, the correct way.
            </div>
            <div class="py-5">
              There's also <router-link to="legacy/ktdrawer" target="_blank">legacy plugins</router-link>. plugins that do not make sense to use with Vue, but <span class="fw-bold text-gray-600">keen provides</span> in addition to its documentation<br>
            </div>
            <div class="py-5">
              Feel free to implement any plugin you want
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-xl-4 mb-xl-10">
      <div class="card h-md-100">
        <div class="card-body d-flex flex-column flex-center">
          <div class="mb-2">
            <div class="py-10 text-center">
              <img src="@/assets/media/illustrations/easy/4.svg" class="theme-light-show w-175px">
              <img src="@/assets/media/illustrations/easy/4-dark.svg" class="theme-dark-show w-175px">
            </div>
            <h1 class="fw-semibold text-gray-800 text-center lh-lg">
              Advanced, tailored vue plugins that will help you build more complicated stuff, like graphs, menus, cruds and more
            </h1>
          </div>
          <div class="text-center mb-1">
            <router-link to="datatables" class="btn btn-sm btn-light">Explore now!</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
#cuteicon {
    font-size: 59px;
    margin-top: 30px;
    margin-right: 25px;
}
@media screen and ( max-width: 576px ){
    #cuteicon {
    font-size: 31px;
    margin-top: 38px;
    margin-right: 11px;
}
}
</style>