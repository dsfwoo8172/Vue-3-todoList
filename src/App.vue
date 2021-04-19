<template>
  <div id="app">
    <div class="container">
      <h1>ToDo List Manager</h1>
      <h5>Powered by: Vue 3 | Vuex 4 | Axios | Ruby on Rails | PostgreSQL</h5>
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodos from "@/components/FilterTodos.vue";
export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
body {
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0px 2rem;
}
</style>
