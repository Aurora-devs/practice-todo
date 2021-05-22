import Todo from "../models/todoModel.js";
import asyncHandler from "express-async-handler";

// @desc Creating todo
// @route Create /api
// @access Public
const createTodo = asyncHandler(async (req, res) => {
  const title = req.body.title;

  const todo = new Todo({
    title,
  });

  if (todo) {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } else {
    res.status(400);
    throw new Error("Wrong data");
  }
});

// @desc Get all todos
// @route Get /api
// @access Public
const getAllTodo = asyncHandler(async (req, res) => {
  const allTodo = await Todo.find({});

  if (allTodo) {
    res.json(allTodo);
  } else {
    res.status(404);
    throw new Error("No data");
  }
});

// @desc Get single todo with id
// @route Get /api/:id
// @access Public
const getTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404);
    throw new Error(`todo with id: ${id} not found`);
  }
});

// @desc  update a todo
// @route Put /api/:id
// @access Public
const updateTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const check = req.body.check;
  const todo = await Todo.findById(id);

  if (todo) {
    todo.title = title || todo.title;
    todo.check = check;
  } else {
    res.status(404);
    throw new Error(`Todo with id: ${id} not found`);
  }

  await todo.save();
  res.json(todo);
});

// @desc  delete a todo
// @route Delete /api/:id
// @access Public

const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);

  if (todo) {
    await todo.remove();
    res.json("deleted");
  } else {
    res.status(404);
    throw new Error(`Todo with id: ${id} not found`);
  }
});

export { createTodo, getAllTodo, getTodo, updateTodo, deleteTodo };
