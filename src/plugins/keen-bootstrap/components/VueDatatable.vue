<template>
  <table>
    <slot></slot>
  </table>
</template>

<style lang="scss">
@import "datatables.net-bs5/css/dataTables.bootstrap5.css";
@import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
@import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
// @import "datatables.net-colreorder-bs5/css/colReorder.bootstrap5.min.css";
// @import "datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css";
// @import "datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css";
// @import "datatables.net-rowreorder-bs5/css/rowReorder.bootstrap5.min.css";
// @import "datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css";
// @import "datatables.net-select-bs5/css/select.bootstrap5.min.css";
// @import "datatables.net-datetime/dist/dataTables.dateTime.min.css";
@import "@/plugins/keen-bootstrap/src/sass/init";
@import "@/plugins/keen-bootstrap/src/sass/vendors/plugins/datatables";
</style>


<script>
import $ from "jquery"
import "datatables.net"
import "datatables.net-bs5"
import "datatables.net-responsive"
import "datatables.net-responsive-bs5"
import "datatables.net-buttons"
import "datatables.net-buttons-bs5"
 import "datatables.net-buttons/js/buttons.html5"
// import "datatables.net-colreorder"
// import "datatables.net-colreorder-bs5"
// import "datatables.net-fixedcolumns"
// import "datatables.net-fixedcolumns-bs5"
// import "datatables.net-fixedheader"
// import "datatables.net-fixedheader-bs5"
// import "datatables.net-rowgroup"
// import "datatables.net-rowgroup-bs5"
// import "datatables.net-rowreorder"
// import "datatables.net-rowreorder-bs5"
// import "datatables.net-scroller"
// import "datatables.net-scroller-bs5"
// import "datatables.net-select"
// import "datatables.net-select-bs5"
// import "datatables.net-datetime"
import "./VueDatatabledefaults"

export default {
  props: {
    manualMode: Boolean,
    watchData: Array
  },

  mounted(){
    if(this.manualMode != true){
      this.initTable()
    }
  },
  watch: {
    watchData: {
      handler(){
        this.destroyTable()
        this.$nextTick(() => {
          this.initTable()
        })
      },
      deep: true
    },
  },
  methods: {
    initTable(){
      const domElement = this.$el;
      $(domElement).DataTable()
    },
    destroyTable(){
      const domElement = this.$el;
      $(domElement).DataTable().destroy();
    }
  },
  beforeDestroy(){
    this.destroyTable()
  }
}
</script>
