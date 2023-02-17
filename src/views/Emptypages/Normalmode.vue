<template>
  <div class="card card-flush">
    <div class="card-body">
      <button class="btn btn-primary" @click="addData()">Añadir Datos</button>

      <vue-datatable ref="datatable" class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
        <thead>
          <tr class="fw-bold fs-6 text-gray-800 px-7">
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="people in lista" :key="people.id">
            <th>{{ people.id }}</th>
            <th>{{ people.name }}</th>
            <th>{{ people.status }}</th>
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
      lista: [{
        id: 1,
        name: "Travis Adbeel",
        status: "Unemployment"
      },
      {
        id: 2,
        name: "Diego Janus",
        status: "Unemployment"
      },
      {
        id: 3,
        name: "David Salas",
        status: "Working"
      },
      ]
    }
  },
  watch: {
    lista() {
      this.$refs.datatable.destroyTable()
      this.$nextTick(() => {
        this.$refs.datatable.initTable()
      });
    }
  },
  methods:{
    addData() {
      const data = { id: this.lista.length + 1, name: `CoolName${this.lista.length + 1}`, status: `CoolStatus${this.lista.length + 1}` }
      this.lista.push(data)
    }
  }
}
</script>