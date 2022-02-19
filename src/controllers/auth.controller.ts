import { Request, Response, NextFunction } from "express";
import { LoginValidation, RegisterValidation } from "../validations/user.validation";
import AuthService from "../services/auth.service";

export default class AuthController {
  // REGISTER USER
  public static register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await RegisterValidation.validateAsync(req.body);
      const user = await AuthService.register(data);
      res.status(201).json(user);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };

  // LOGIN USER
  public static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await LoginValidation.validateAsync(req.body);
      const token = await AuthService.login(data);

      res.json(token);
    } catch (error) {
      // RETURN ERROR
      console.log(error);

      next(error);
    }
  };
}
