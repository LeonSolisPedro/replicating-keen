<template>
  <div class="row gy-5 g-xl-10">

    <div class="col-xl-8 mb-xl-10">
      <div class="card card-flush h-xl-100">
        <div
          class="card-header bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start bg-light-primary"
          style="height: 134px">
          <h3 class="card-title align-items-start flex-column pt-15">
            <span class="fw-bold fs-2x mb-3">Keen components</span>
          </h3>
          <div class="card-toolbar">
            <font-awesome-icon class="text-primary" id="cuteicon" icon="fa-solid fa-puzzle-piece" />
          </div>
        </div>
        
        <div class="card-body fs-6  p-10 text-gray-700">
          <div class="pb-10">
            <h1 id="overview" class="anchor fw-bold mb-5"><a href="#overview"></a> Overview</h1>
            <div class="py-5">
              In the following pages, you will explore keen components that will help you build <router-link to="inputgroup" target="_blank">inputs</router-link>, <router-link to="modal" target="_blank">modals</router-link>, <router-link to="alerts" target="_blank">alerts</router-link>, and <router-link to="toasts" target="_blank">toasts</router-link>
            </div>
            <div class="py-5">
              These components have been <span class="fw-bold text-gray-600">heavily modified</span>, so they will look and feel different.
            </div>
            <div class="py-5">
              You can use these components to build basic things, or use these components to build more sophisticated ones.
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
              <img src="@/assets/media/illustrations/easy/2.svg" class="theme-light-show w-200px">
              <img src="@/assets/media/illustrations/easy/2-dark.svg" class="theme-dark-show w-200px">
            </div>
            <h1 class="fw-semibold text-gray-800 text-center lh-lg">
              Core keen components that will help you build forms, inputs, cards and more...
            </h1>
          </div>
          <div class="text-center mb-1">
            <router-link to="utilities" class="btn btn-sm btn-light">Explore now!</router-link>
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