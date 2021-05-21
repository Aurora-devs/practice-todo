<template>
  <div class="screen">
    <div class="container">
      <h3>Add todo item</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
};
</script>

<style scoped>
.screen {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  backdrop-filter: brightness(40%);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.container {
  background-color: white;
  padding: 1rem;
}
</style>
