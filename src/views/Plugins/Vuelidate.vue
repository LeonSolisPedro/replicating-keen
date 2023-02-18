<template>
  <div class="card card-flush">
    <div class="card-body">
      <h1>Vuelidate Example</h1>
      <br>

      <form>
        <div class="mb-10">
          <label class="required form-label">Email</label>
          <input type="email" v-model="email" class="form-control form-control-solid" placeholder="example@wintercr.com"/>
          <div class="invalid-feedback"> {{ v$.email.$errors[0]?.$message }} </div>
        </div>
        <button @click.prevent="sendForm()" type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>
</template>


<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      email: ""
    }
  },
  validations () {
    return {
      email: {required, email}
    }
  },
  methods: {
    async sendForm(){
      const valid = await this.v$.$validate()
      if (!valid) return
      alert("Submitting form...")
    }
  }
}
</script>