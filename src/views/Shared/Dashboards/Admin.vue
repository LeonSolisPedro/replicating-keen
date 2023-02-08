<template>
  <div class="card">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15">
      <div class="px-md-10 pt-md-10 pb-md-5">
        <div class="text-center mb-20">
          <h1 class="fs-2tx fw-bold mb-8">Welcome <span class="d-inline-block position-relative ms-2">
              <span class="d-inline-block mb-2">
                Administrador </span>
              <span
                class="d-inline-block position-absolute h-8px bottom-0 end-0 start-0 bg-success translate rounded"></span>
            </span></h1>
          <div class="fw-semibold fs-2 text-gray-500 mb-10">
            Follow the links below to explore keen 3.0.2 on Vue 2!
          </div>
        </div>
        <div class="row g-0">
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-primary bg-opacity-90 mb-10">
                <font-awesome-icon class="fa-2xl text-primary" icon="fa-solid fa-puzzle-piece" />
              </div>
              <h1 class="mb-5">Keen components</h1>
              <div class="fs-4 text-gray-600 py-3">
                Core keen components that will help you build forms, inputs, cards and more...
              </div>
              <router-link to="/" class="btn btn-lg btn-flex btn-link btn-color-primary">
                Browse now <font-awesome-icon class="ms-3 fa-xs" icon="fa-solid fa-arrow-right" />
              </router-link>
            </div>
          </div>
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-success bg-opacity-90 mb-10">
                <font-awesome-icon class="fa-2xl text-success" icon="fa-brands fa-vuejs" />
              </div>
              <h1 class="mb-5">Custom plugins</h1>
              <div class="fs-4 text-gray-600 py-3">
                Advanced, tailored vue plugins that will help you build more complicated stuff, like menus, cruds, graphs and more
              </div>
              <router-link to="/" class="btn btn-lg btn-flex btn-link btn-color-success">
                Browse now <font-awesome-icon class="ms-3 fa-xs" icon="fa-solid fa-arrow-right" />
              </router-link>
            </div>
          </div>
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-warning bg-opacity-90 mb-10">
                <font-awesome-icon class="fa-2xl text-warning" icon="fa-solid fa-file" />
              </div>
              <h1 class="mb-5">Empty pages</h1>
              <div class="fs-4 text-gray-600 py-3">
                Empty pages for cruds, that will help you copy paste with ease!
              </div>
              <router-link to="/" class="btn btn-lg btn-flex btn-link btn-color-warning">
                Copy paste now <font-awesome-icon class="ms-3 fa-xs" icon="fa-solid fa-arrow-right" />
              </router-link>
            </div>
          </div>
          <div class="col-md-6 mb-10">
            <div class="bg-light bg-opacity-50 rounded-3 p-10 mx-md-5 h-md-100">
              <div class="d-flex flex-center w-60px h-60px rounded-3 bg-light-danger bg-opacity-90 mb-10">
                <font-awesome-icon class="fa-2xl text-danger" icon="fa-solid fa-hand" />
              </div>
              <h1 class="mb-5">Role-Based Sample</h1>
              <div class="fs-4 text-gray-600 py-3">
                Custom role-based authentication plugin that allows, certain accounts to see specific pages
              </div>
              <router-link to="/" class="btn btn-lg btn-flex btn-link btn-color-danger">
                Learn more now <font-awesome-icon class="ms-3 fa-xs" icon="fa-solid fa-arrow-right" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>