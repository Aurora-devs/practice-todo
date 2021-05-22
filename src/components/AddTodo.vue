<template>
  <span
    class="overlay"
    @click="$emit('closeForm')"
    :class="formVisibility ? '' : 'hide'"
  ></span>
  <div class="container" :class="formVisibility ? '' : 'hide'">
    <h2>Add todo item</h2>
    <input type="text" placeholder="Task title..." v-model="taskTitle" />
    <button class="add" @click="addNewTodo(taskTitle)">Add</button
    ><button class="close" @click="$emit('closeForm')">Close</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: {
    formVisibility: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      taskTitle: "",
    };
  },
  methods: {
    async addNewTodo(title) {
      if (!title) {
        console.error("Task title is required");
      } else {
        await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title }),
        }).then(() => {
          this.$emit("addNewTask");
        });
      }
    },
  },
  emits: ["closeForm", "addNewTask"],
};
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  /* display: none; */
}
.container {
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  width: 500px;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container > input {
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid gray;
}
.container > button {
  padding: 0.625rem 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.add {
  background-color: #10b981;
  color: #d1fae5;
}
.add:hover {
  background-color: #059669;
}
.close {
  background-color: #ef4444;
  color: #fee2e2;
}
.close:hover {
  background-color: #dc2626;
}
.hide {
  display: none;
}
</style>
