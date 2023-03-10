<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title"></h2>
      <div class="card-toolbar">
        <router-link to="../index" class="btn btn-flex btn-light">Return</router-link>
      </div>
    </div>

    <div class="card-body text-center d-flex flex-column gap-5 flex-center" style="height: 54.5vh">
      <h3>Update Book {{ $route.params.id }}</h3>
      <img src="@/assets/rolebasedplugin/rolebasedsample3.png" width="340" class="img-fluid theme-light-show">
      <img src="@/assets/rolebasedplugin/rolebasedsample3dark.png" width="340" class="img-fluid theme-dark-show">
    </div>

  </div>
</template>