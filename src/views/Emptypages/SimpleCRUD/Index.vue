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
            <th>
              <div class="dropdown">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Actions
                </button>
                <ul class="dropdown-menu">
                  <li><router-link :to="'update/' + todo.id" class="dropdown-item">Edit</router-link></li>
                  <li><button @click="$globalDelete('/todos/', todo.id, 'Todo')" class="dropdown-item">Delete</button></li>
                </ul>
              </div>
            </th>
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
    const result = await axios.get("todos")
    next(vm => { vm.lista = result.data })
  }
}
</script>