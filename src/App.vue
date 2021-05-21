<template>
  <AddTodo />
  <main>
    <h1>Todo</h1>
    <section class="date">
      <Date />
      <WeekDay />
    </section>
    <TodoList />
    <button class="add-btn">+</button>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
  background: #f0efe9;
  color: #555555;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
}
.add-btn {
  background-color: #6ee7b7;
  color: #059669;
  font-size: 3rem;
  border: none;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-bottom: -3rem;
}
</style>
