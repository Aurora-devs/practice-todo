<template>
  <div class="container">
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :item="todo"
      @dblclick="deleteTodo(todo._id)"
      @toggleCheck="$emit('toggleCheck', $event)"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    async deleteTodo(id) {
      await fetch(`/api/${id}`, {
        method: "DELETE",
      }).then(async () => {
        this.$emit("deleteTodo");
      });
    },
  },
  emits: ["deleteTodo", "toggleCheck"],
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 1rem 0;
  font-size: 16px;
}
</style>
