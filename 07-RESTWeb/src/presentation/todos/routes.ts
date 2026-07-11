import { Router } from "express";
import { TodosController } from "./controller.js";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.imp.js";
import { TodoRepositoryImpl } from "../../infrastructure/repository/todo.repository.imp.js";

//* Sistema de rutas para los TODOS
export class TodoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl(datasource);

    const todoController = new TodosController(todoRepository);

    //* Aquí solo se definen las rutas y el controlador

    router.get("/", todoController.getTodos);
    router.get("/:id", todoController.getTodoById);

    router.post("/", todoController.createTodo);

    router.put("/:id", todoController.updateTodo);

    router.delete("/:id", todoController.deleteTodo);

    return router;
  }
}
