<template>
  <div
    v-for="todo in todoList"
    :key="todo.id"
    class="item"
    :class="todo.check ? 'done' : ''"
  >
    <p>{{ todo.title }}</p>
    <input type="checkbox" name="done" v-model="todo.check" />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      todoList: {},
    };
  },
  async created() {
    const res = await fetch("/api");
    this.todoList = await res.json();
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
}
.item > p {
  margin-right: 10px;
}
.item > input {
  cursor: pointer;
  width: 18px;
  height: 18px;
}
.item.done > p {
  color: #a3a3a3;
  text-decoration: line-through;
}
</style>
