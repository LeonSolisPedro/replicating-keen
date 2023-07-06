<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title"></h2>
      <div class="card-toolbar" style="align-items: flex-start;">
        <RouterLink to="employeedashboard" class="btn btn-flex btn-light">Employee Dashboard</RouterLink>
        <RouterLink to="viewreport" class="btn btn-flex btn-light">View Report</RouterLink>
        <RouterLink to="create" class="btn btn-flex btn-primary">Add book</RouterLink>
      </div>
    </div>

    <div class="card-body text-center d-flex flex-column gap-4 flex-center" style="height: 51.3vh">
      <h3>List of books</h3>
      <img src="@/assets/rolebasedplugin/rolebasedsample1.png" width="340" class="img-fluid theme-light-show">
      <img src="@/assets/rolebasedplugin/rolebasedsample1dark.png" width="340" class="img-fluid theme-dark-show">
      <RouterLink to="edit/1" class="text-center mt-1">Edit Book 1</RouterLink>
    </div>

  </div>
</template>