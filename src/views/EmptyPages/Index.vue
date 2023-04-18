<template>
  <div>
    <div class="row gy-5 g-xl-10">
      <div class="col-xl-8 mb-xl-10">
        <div class="card card-flush h-xl-100">
          <div
            class="card-header bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start bg-light-warning"
            style="height: 134px">
            <h3 class="card-title align-items-start flex-column pt-15">
              <span class="fw-bold fs-2x mb-3">Empty pages</span>
            </h3>
            <div class="card-toolbar">
              <font-awesome-icon class="text-warning" id="cuteicon" icon="fa-solid fa-file" />
            </div>
          </div>
          <div class="card-body fs-6  p-10 text-gray-700">
            <div class="pb-10">
              <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
                <a href="#overview"></a>Overview
              </h1>
              <div class="py-5">
                The following pages, are suitable for copying / pasting code:
                <ul>
                  <li><router-link to="simplecrud">Simple CRUD</router-link></li>
                  <li><router-link to="simplecrudmodal">Simple CRUD with Modals</router-link></li>
                </ul>
              </div>
              <div class="py-5">
                Open one of the following files from your code editor to start coping / pasting:
                <ul>
                  <li class="pb-2"><code>src/EmptyPages/SimpleCRUD/Index.Vue</code></li>
                  <li><code>src/EmptyPages/SimpleCRUDmodal/Index.Vue</code></li>
                </ul>
              </div>
              <div class="py-5">
                You can also generate the above code dynamically, by <a href="#usagevscode">following this link</a>
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
                <img src="@/assets/media/illustrations/easy/3.svg" class="theme-light-show w-200px">
                <img src="@/assets/media/illustrations/easy/3-dark.svg" class="theme-dark-show w-200px">
              </div>
              <h1 class="fw-semibold text-gray-800 text-center lh-lg">
                Empty pages for cruds, that will help you copy paste with ease!
              </h1>
              <div class="text-center mb-1">
                <router-link class="btn btn-sm btn-light" to="simplecrud"> Copy Paste Now!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 mt-xl-0 card card-flush">
      <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
        <div class="pb-10">
          <h1 class="anchor fw-bold mb-5" id="usagevscode" data-kt-scroll-offset="50">
            <a href="#usagevscode"></a>Usage with Visual Studio Code
          </h1>
          <div class="py-5">
            You can also use <a href="https://code.visualstudio.com/">Visual Studio Code</a> to generate all of the pages
            above with easy
          </div>
          <div class="py-5">
            Simply type:
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              ozelot:create            (For the create page)
              ozelot:createmodal       (For modals)
              ozelot:index             (For the index page)
              ozelot:indexmodal        (For modals)
              ozelot:edit              (For the edit page)
              ozelot:editmodal         (For modals)
              </pre>
          </div>
          <div class="py-5">
            The generated code, is suitable to quickly create modules without thinking!
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

@media screen and (max-width: 576px) {
  #cuteicon {
    font-size: 31px;
    margin-top: 38px;
    margin-right: 11px;
  }
}
</style>