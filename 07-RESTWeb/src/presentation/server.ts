import express, { Router } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

interface Options {
  port: number;
  public_path?: string;
  routes: Router;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = "public" } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  async start() {
    //* Middlewares -> funciones que se ejecutan cada vez que una petición pase por una ruta

    //Parsea a json
    this.app.use(express.json());
    //Parsea x-www-form-urlencoded
    this.app.use(express.urlencoded({ extended: true }));

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use(this.routes);

    //* SPA Cualquier ruta no definida pasará por aquí
    this.app.get("/{*path}", (req, res) => {
      const indexPath = path.join(
        __dirname,
        `../../${this.publicPath}/index.html`,
      );
      res.sendFile(indexPath);
    });

    this.app.listen(3000, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
