import {
  createTodo,
  getAllTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.js";

import express from "express";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;
