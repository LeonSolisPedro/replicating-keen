<template>
  <div class="card card-flush">
    <div class="card-body">
      <h1>SweetAlert2 Example</h1>
      <br>

      <button @click="showAlertSuccess()" class="btn btn-light-success btn-color-dark btn-active-light-success btn-active-color-dark mb-4">Show Success</button><br>
      <button @click="showAlertError()" class="btn btn-light-danger btn-color-dark btn-active-light-danger btn-active-color-dark mb-4">Show Error</button><br>
      <button @click="showAlertWarning()" class="btn btn-light-warning btn-color-dark btn-active-light-warning btn-active-color-dark mb-4">Show Warning</button><br>
      <button @click="showAlertQuestion()" class="btn btn-light-primary btn-color-dark btn-active-light-primary btn-active-color-dark mb-4">Show Question</button><br>

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    showAlertSuccess(){
      swal.fire("Success", "All users have been uploaded", "success")
    },
    showAlertError(){
      swal.fire("Error", "An error has been occured, please try again", "error")
    },
    showAlertWarning(){
      swal.fire("Warning", "There are no users with the given name", "warning")
    },
    showAlertQuestion(){
      swal.fire({
        title: "Are you sure you want to upgrade all users to level: Low?",
        text: "This action will prevent some users from logging in.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Continue",
        cancelButtonText: 'No, cancel'
    });
    }
  }
}
</script>