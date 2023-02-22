<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title">Todos</h2>
      <div class="card-toolbar">
        <button class="btn btn-flex btn-primary" data-bs-toggle="modal" data-bs-target="#create">Add Todo</button>
      </div>
    </div>

    <div class="card-body">
      <vue-datatable :watchData="lista" class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
        <thead>
          <tr class="fw-bold fs-6 text-gray-800 px-7">
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in lista" :key="todo.id">
            <th>{{ todo.id }}</th>
            <th>{{ todo.title }}</th>
            <th>{{ todo.completed }}</th>
            <th><a href="#" data-bs-toggle="modal" data-bs-target="#update">Editar</a></th>
          </tr>
        </tbody>
      </vue-datatable>
    </div>

    <div class="modal fade" tabindex="-1" id="create">
      <Create></Create>
    </div>

    <div class="modal fade" tabindex="-1" id="update">
      <Update></Update>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: []
    }
  },
  components: {
    Create: () => import("./_Create.vue"),
    Update: () => import("./_Update.vue")
  },
  async beforeRouteEnter(to, from, next) {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
    next(vm => { vm.lista = result.data })
  }
}
</script>