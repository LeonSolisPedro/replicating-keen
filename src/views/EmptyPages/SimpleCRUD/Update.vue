<template>
  <div class="card card-flush datatable">

    <div class="card-header">
      <h2 class="card-title">Edit Todo</h2>
      <div class="card-toolbar">
        <router-link to="../index" class="btn btn-flex btn-light">Return</router-link>
        <button @click.prevent="update()" class="btn btn-flex btn-primary">Edit</button>
      </div>
    </div>

    <div class="card-body">
      <form class="row mb-4 g-9">
        <input type="hidden" v-model="todo.id" />
        <div class="col-sm-6">
          <label class="required form-label">Title</label>
          <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Buy milk" />
          <span class="invalid-feedback"> {{ v$.todo.title.$errors[0]?.$message }} </span>
        </div>
        <div class="col-sm-6">
          <label class="form-label">Status</label>
          <div class="ms-9 mt-3 form-check form-check-custom form-check-solid">
            <input type="checkbox" v-model="todo.completed" class="form-check-input" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Completed
            </label>
          </div>
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
  async beforeRouteEnter(to, from, next) {
    const result = await axios.get(`todos/${to.params.id}`)
    next(vm => { vm.todo = result.data })
  },
  methods: {
    async update() {
      const valid = await this.v$.$validate()
      if (!valid) return
      const block = new KTBlockUI(this.$el)
      const result = await axios.put(`todos/${this.todo.id}`, this.todo)
      await swal.fire("Success", "Todo edited successfully", "success")
      block.releaseDestroy()
      this.$router.push("../index")
    }
  }
}
</script>