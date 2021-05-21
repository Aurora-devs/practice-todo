<template>
  <div class="item done">
    <p>Buy new sweatshirt</p>
    <input type="checkbox" name="done" checked />
  </div>
  <div class="item done">
    <p>Begin promotional phase</p>
    <input type="checkbox" name="done" checked />
  </div>
  <div class="item">
    <p>Read an article</p>
    <input type="checkbox" name="done" />
  </div>
  <div class="item">
    <p>Watch "Sherlock"</p>
    <input type="checkbox" name="done" />
  </div>
  <div class="item">
    <p>Begin QA for the product</p>
    <input type="checkbox" name="done" />
  </div>
  <div class="item">
    <p>Go for a walk</p>
    <input type="checkbox" name="done" />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
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
