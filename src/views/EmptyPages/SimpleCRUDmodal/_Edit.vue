<template>
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Edit Todo</h3>
      <button class="btn-close btn btn-icon btn-sm btn-active-light-primary me-0" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <div class="modal-body">
      <form class="row mb-3 g-9">
        <input type="hidden" v-model="todo.id" />
        <div class="col-sm-12">
          <label class="required form-label">Title</label>
          <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Buy milk" />
          <span class="invalid-feedback"> {{ v$.todo.title.$errors[0]?.$message }} </span>
        </div>
        <div class="col-sm-12">
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

    <div class="modal-footer">
      <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
      <button @click="edit()" type="button" class="btn btn-primary">Edit</button>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { Modal } from "bootstrap"

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
  validations() {
    return {
      todo: {
        title: { required }
      },
    }
  },
  methods: {
    async edit() {
      const valid = await this.v$.$validate()
      if (!valid) return
      const block = new KTBlockUI(this.$el)
      await axios.put(`todos/${this.todo.id}`, this.todo)
      await swal.fire("Success", "Todo edited successfully", "success")
      block.releaseDestroy()
      this.$emit("refresh")
      Modal.getInstance(this.$el.parentElement.parentElement).hide()
    },
    resetModal() {
      Object.assign(this.$data, this.$options.data())
      this.v$.$reset()
    },
    async openModal(id){
      const result = await axios.get(`todos/${id}`)
      this.todo = result.data
      Modal.getOrCreateInstance(this.$el.parentElement.parentElement).show()
    }
  },
  mounted() {
    const modal = this.$el.parentElement.parentElement
    modal.addEventListener('hidden.bs.modal', () => this.resetModal())
  },
}
</script>