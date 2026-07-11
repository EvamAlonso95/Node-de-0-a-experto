import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoEntity, TodoRepository } from "../../domain";

// const todos = [
//   {
//     id: 1,
//     text: "Buy milk",
//     completedAt: new Date(),
//   },
//   {
//     id: 2,
//     text: "Buy bread",
//     completedAt: null,
//   },
//   {
//     id: 3,
//     text: "Buy eggs",
//     completedAt: new Date(),
//   },
// ];

export class TodosController {
  //* Dependency Injection
  constructor(private readonly todoRepository: TodoRepository) {}

  // METHODS

  public getTodos = async (req: Request, res: Response) => {
    //* Sin Clean Architecture
    // const todos = await prisma.todo.findMany();
    // return res.json(todos);

    const todos = await this.todoRepository.getAll();
    return res.json(todos);
  };

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const todo = await this.todoRepository.findById(id);
      res.json(todo);
    } catch (error) {
      res.status(400).json({ error: `TODO with id ${id} not found` });
    }

    //* Sin Clean Architecture
    // if (isNaN(id))
    //   return res.status(400).json({ error: "ID argument is not a number" });

    // const todo = await prisma.todo.findFirst({
    //   where: { id },
    // });

    // todo
    //   ? res.json(todo)
    //   : res.status(404).json({ error: `TODO with id ${id} not found` });
  };

  public createTodo = async (req: Request, res: Response) => {
    // const { text } = req.body ?? {};
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error)
      return res.status(400).json({ error: "Text property is required" });

    //*Sin Clean Architecture

    // const todo = await prisma.todo.create({
    //   data: createTodoDto!,
    // });

    const todo = await this.todoRepository.create(createTodoDto!);

    return res.json(todo);
  };

  public updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is not a number" });

    const updatedTodo = await this.todoRepository.updateById(updateTodoDto!);
    res.json(updatedTodo);

    //*Sin Clean Architecture
    // const todo = await prisma.todo.findFirst({
    //   where: { id },
    // });
    // if (!todo)
    //   return res.status(404).json({ error: `TODO with ${id} not found` });

    // const updatedTodo = prisma.todo.update({
    //   where: { id },
    //   data: updateTodoDto!.values,
    // });

    // res.json(updatedTodo);
    // if (text === undefined && completedAt === undefined) {
    //   return res.status(400).json({
    //     error: "Request body must include text or completedAt",
    //   });
    // }

    // todo.text = text ?? todo.text;
    // completedAt === "null"
    //   ? (todo.completedAt = null)
    //   : (todo.completedAt = new Date(completedAt || todo.completedAt));

    //! OJO, referencia
    // todos.forEach((todo, index) => {
    //   if (todo.id === id) {
    //     todos[index] = todo;
    //   }
    // });

    // return res.json(todo);
  };

  public deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const deletedTodo = await this.todoRepository.deleteById(id);
      res.json(deletedTodo);
    } catch (error) {
      res.status(400).json({ error: `Todo with id ${id} not found` });
    }

    //* Sin Clean architecture
    // const todo = await prisma.todo.findFirst({
    //   where: { id },
    // });

    // if (!todo)
    //   return res.status(404).json({ error: `TODO with ${id} not found` });

    // const deleted = await prisma.todo.delete({
    //   where: { id },
    // });

    // deleted
    //   ? res.json(deleted)
    //   : res.status(400).json({ error: `Todo with id ${id} not found` });
  };
}
