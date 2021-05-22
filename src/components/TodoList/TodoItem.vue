<template>
  <div class="item" :class="item.check && 'done'">
    <p>{{ item.title }}</p>
    <input type="checkbox" name="done" :checked="item.check" />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
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
