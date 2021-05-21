<template>
  <AddTodo />
  <main>
    <section class="date">
      <Date />
      <WeekDay />
    </section>
    <TodoList />
    <button class="add-btn">+</button>
  </main>
</template>

<script>
import Date from "@/components/Date.vue";
import WeekDay from "@/components/WeekDay.vue";

export default {
  name: "App",
  components: {
    Date,
    WeekDay,
  },
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
  font-size: 14px;
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
  padding: 2rem;
  width: 400px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
}
.date {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-btn {
  background-color: #6ee7b7;
  color: #047857;
  font-size: 3rem;
  border: none;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-bottom: -4rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.2s;
}
.add-btn:hover {
  background-color: #34d399;
}
</style>
