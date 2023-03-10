<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title"></h2>
      <div class="card-toolbar" style="align-items: flex-start;">
        <router-link to="employeedashboard" class="btn btn-flex btn-light">Employee Dashboard</router-link>
        <router-link to="viewreport" class="btn btn-flex btn-light">View Report</router-link>
        <router-link to="create" class="btn btn-flex btn-primary">Add book</router-link>
      </div>
    </div>

    <div class="card-body text-center d-flex flex-column gap-4 flex-center" style="height: 51.3vh">
      <h3>List of books</h3>
      <img src="@/assets/rolebasedplugin/rolebasedsample1.png" width="340" class="img-fluid theme-light-show">
      <img src="@/assets/rolebasedplugin/rolebasedsample1dark.png" width="340" class="img-fluid theme-dark-show">
      <router-link to="update/1" class="text-center mt-1">Edit Book 1</router-link>
    </div>

  </div>
</template>