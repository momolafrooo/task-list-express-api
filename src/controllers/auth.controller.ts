import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";

export default class AuthController {
  // REGISTER USER
  public static register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };

  // LOGIN USER
  public static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await AuthService.login(req.body);

      res.json(token);
    } catch (error) {
      // RETURN ERROR
      console.log(error);

      next(error);
    }
  };
}
