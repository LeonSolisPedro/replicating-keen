<template>
  <div class="card card-flush">
    <div class="card-body">
      <button class="btn btn-primary" @click="addData()">Añadir Datossss</button>

      <vue-datatable :manualMode="true" @hook:mounted="initDatatables" id="kt_datatable_dom_positioning" class="table table-striped table-row-bordered gy-5 gs-7 border rounded">
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
import $ from "jquery"

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
      $('#kt_datatable_dom_positioning').DataTable().destroy();
      this.$nextTick(() => {
        this.initDatatables()
      });
    }
  },
  methods: {
    initDatatables() {
      $("#kt_datatable_dom_positioning").DataTable({
        "language": {
          "lengthMenu": "Show _MENU_",
        },
        "dom":
          "<'row'" +
          "<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
          "<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
          ">" +

          "<'table-responsive'tr>" +

          "<'row'" +
          "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
          "<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
          ">"
      });
    },
    addData() {
      const data = { id: this.lista.length + 1, name: `CoolName${this.lista.length + 1}`, status: `CoolStatus${this.lista.length + 1}` }
      this.lista.push(data)
    },
  },
}
</script>




