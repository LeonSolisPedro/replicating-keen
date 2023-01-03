<template>
  <router-view />
</template>

<script> //Redirect to index when possible
export default { RedirectToIndex() { return "RedirectToIndex"; }, };
</script>