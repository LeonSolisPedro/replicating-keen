<template>
  <h1>Update {{$route.params.id}}</h1>
</template>

<script>
export default {
  data(){
    return {
      todo: null
    }
  },
  async beforeRouteEnter(to, from, next) {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${to.params.id}`)
    next(vm => { vm.todo = result.data })
  },
}
</script>