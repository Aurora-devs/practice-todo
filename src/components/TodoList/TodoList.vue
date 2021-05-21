<template>
  <div class="container">
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 1rem 0;
  font-size: 16px;
}
</style>
