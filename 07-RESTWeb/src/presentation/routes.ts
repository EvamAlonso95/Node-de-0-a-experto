import { Router } from "express";
import { TodoRoutes } from "./todos/routes.js";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //* Aquí solo se definen las rutas y el controlador
    router.use("/api/todos", TodoRoutes.routes);
    // router.get("/api/todos", (req, res) => {
    //   return res.json([
    //     {
    //       id: 1,
    //       text: "Buy milk",
    //       createdAt: new Date(),
    //     },
    //     {
    //       id: 2,
    //       text: "Buy bread",
    //       createdAt: new Date(),
    //     },
    //     {
    //       id: 3,
    //       text: "Buy eggs",
    //       createdAt: new Date(),
    //     },
    //   ]);
    // });

    // router.get("/api/todos", todoController.getTodos);

    return router;
  }
}
