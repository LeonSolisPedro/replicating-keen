<template>
  <div class="card card-flush">
    <div class="card-body">
      <button class="btn btn-primary" @click="addData()">Añadir Datos</button>

      <vue-datatable :watchData="lista" class="table table-row-dashed dt-custom">
        <thead>
          <tr>
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
  methods:{
    addData() {
      const data = { id: this.lista.length + 1, name: `CoolName${this.lista.length + 1}`, status: `CoolStatus${this.lista.length + 1}` }
      this.lista.push(data)
    }
  }
}
</script>