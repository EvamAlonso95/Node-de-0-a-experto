// Definición de las rutas
import { Router } from "express";
import { AuhtController } from "./controller";
import { AuthService, EmailService } from "../services";
import { envs } from "../../config";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.SEND_EMAIL,
    );

    const authService = new AuthService(emailService);

    const controller = new AuhtController(authService);
    // Definir las rutas
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);

    router.get("/validate-email/:token", controller.validateEmail);

    return router;
  }
}
