<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title">Todos</h2>
      <div class="card-toolbar">
        <button class="btn btn-flex btn-primary" data-bs-toggle="modal" data-bs-target="#create">Add Todo</button>
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
                  <li><button class="dropdown-item" @click="$refs.edit.openModal(todo.id)">Edit</button></li>
                  <li><button @click="$globalDelete('/todos/', todo.id, 'Todo')" class="dropdown-item">Delete</button></li>
                </ul>
              </div>
            </th>
          </tr>
        </tbody>
      </vue-datatable>
    </div>

    <div class="modal fade" tabindex="-1" id="create">
      <div class="modal-dialog"><Create @refresh="refresh()"/></div>
    </div>

    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog"><Edit @refresh="refresh()" ref="edit"/></div>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
export default {
  data() {
    return {
      lista: []
    }
  },
  components: {
    Create: defineAsyncComponent(() => import("./_Create.vue")),
    Edit: defineAsyncComponent(() => import("./_Edit.vue"))
  },
  methods: {
    async refresh() {
      const result = await axios.get("todos")
      this.lista = result.data
    }
  },
  async beforeRouteEnter(to, from, next) {
    const result = await axios.get("todos")
    next(vm => { vm.lista = result.data })
  }
}
</script>