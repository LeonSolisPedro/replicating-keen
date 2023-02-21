<template>
  <div class="card card-flush">

    <div class="card-header py-5"> <!-- Here-->
      <h2 class="card-title fw-bold">Create Todo</h2>
      <div class="card-toolbar"> <!-- Here-->
        <router-link to="index" class="btn btn-flex btn-light me-4">Return</router-link>
        <button @click.prevent="create()" class="btn btn-flex btn-primary">Create</button>
      </div>
    </div>

    <div class="card-body pt-0"> <!-- Here-->
      <form class="row mb-4 g-9">
        <input type="hidden" v-model="todo.id" />
        <div class="col-sm-6">
          <label class="required form-label">Title</label>
          <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Buy milk" />
        </div>
        <div class="col-sm-6">
          <label class="required form-label">Title</label>
          <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Buy milk" />
        </div>
        <div class="col-sm-6">
          <label class="required form-label">Title</label>
          <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Buy milk" />
        </div>
        <div class="col-sm-6">
          <label class="required form-label">Title</label>
          <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Buy milk" />
        </div>
        
      </form>
    </div>

  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      todo: {
        id: 0,
        title: "",
        title2: "",
        title3: "",
        title4: "",
        completed: false
      },
    }
  },
  validations(){
    return {
      todo: {
        title: {required}
      },
    }
  },
  methods: {
    async create() {
      const valid = await this.v$.$validate()
      if (!valid) return
      alert("Creating...")
    }
  }
}
</script>