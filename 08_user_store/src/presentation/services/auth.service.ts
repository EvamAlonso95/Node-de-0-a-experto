// Se encarga de manejar el trabajo pesado

import { userInfo } from "os";
import { bcryptAdapter, envs, JwtAdapter } from "../../config";
import { UserModel } from "../../data";
import {
  CustomError,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from "../../domain";
import { error } from "console";
import { EmailService } from "./email.service";

export class AuthService {
  //DI
  constructor(private readonly emailService: EmailService) {
    //DI - Email Service
  }

  public async registerUser(registerUserDto: RegisterUserDto) {
    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if (existUser) throw CustomError.badRequest("Email already exist");

    try {
      const user = new UserModel(registerUserDto);

      //Encriptar la pass
      user.password = bcryptAdapter.hash(registerUserDto.password);
      await user.save();

      // JWT <--- para la autenticación del user

      // Email de confirmacion
      this.sendEmailValidationLink(user.email);

      //No queremos devolver la contraseña

      const { password, ...userEntity } = UserEntity.fromObject(user);
      return { user: userEntity, token: "Abc" };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async loginUser(loginUserDto: LoginUserDto) {
    // FindOne para verificar que el user. email existe
    const user = await UserModel.findOne({ email: loginUserDto.email });
    if (!user) throw CustomError.badRequest("Email not exist");

    const isMatch = bcryptAdapter.compare(loginUserDto.password, user.password);

    if (!isMatch) throw CustomError.badRequest("Password invalid");

    const { password, ...rest } = UserEntity.fromObject(user);

    const token = await JwtAdapter.generateToken({ id: user.id });
    if (!token) throw CustomError.internalServer("Error while creating JWT");

    return {
      user: { ...user },
      token: token,
    };
  }

  private sendEmailValidationLink = async (email: string) => {
    const token = await JwtAdapter.generateToken({ email });
    if (!token) throw CustomError.internalServer("Error getting token");

    const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
    const html = `
      <h1>Validate your email</h1>
      <p>Click on the following link to validate your email</p>
      <a href="${link}">Validate your email: ${email}</a>
    `;

    const options = {
      to: email,
      subject: "Validate your email",
      htmlBody: html,
    };

    const isSent = await this.emailService.sendEmail(options);
    if (!isSent) throw CustomError.internalServer("Error sending email");

    return true;
  };

  public validateEmail = async (token: string) => {
    const payload = await JwtAdapter.validateToken(token);
    console.log(payload);
    if (!payload) throw CustomError.unauthorized("Token not valid");

    const { email } = payload as { email: string };
    if (!email) throw CustomError.internalServer("Email not in token");

    const user = await UserModel.findOne({ email });
    if (!user) throw CustomError.internalServer("Email not exist");

    user.emailValidated = true;

    await user.save();

    return true;
  };
}
