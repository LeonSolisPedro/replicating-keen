<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title">Todos</h2>
      <div class="card-toolbar">
        <router-link to="create" class="btn btn-flex btn-primary">Add Todo</router-link>
      </div>
    </div>

    <div class="card-body">
      <vue-datatable :watchData="lista" class="table table-row-dashed dt-custom">
        <thead>
          <tr>
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
            <th><router-link :to="'update/'+todo.id">Editar</router-link></th>
          </tr>
        </tbody>
      </vue-datatable>
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
  async beforeRouteEnter(to, from, next) {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
    next(vm => { vm.lista = result.data })
  }
}
</script>