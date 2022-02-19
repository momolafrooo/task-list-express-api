import { PrismaClient } from "@prisma/client";
import { hashSync, compareSync } from "bcrypt";
import httpErrors from "http-errors";
import { JWT } from "../config/jwt";
import UserService from "./user.service";

export default class AuthService {
  private static prisma: PrismaClient = new PrismaClient();

  // REGISTER USER
  public static register = async (data: any) => {
    try {
      // ENCRYPT THE PASSWORD
      data.password = hashSync(data.password, 12);

      const userExists = await UserService.getUserByEmail(data.email);
      if (userExists) throw new httpErrors.Conflict(`Email already taken !`);

      // SAVE THE USER
      const user = await this.prisma.user.create({ data });

      return { name: user.name, email: user.email, createdAt: user.createdAt };
    } catch (error) {
      // THROW AN ERROR
      throw error;
    }
  };

  // LOGIN USER
  public static login = async (data: any) => {
    try {
      // FIND THE USER
      const user = await this.prisma.user.findUnique({ where: { email: data.email } });

      if (!user || !compareSync(data.password, user?.password)) throw new httpErrors.Unauthorized();

      const accessToken = await JWT.generateToken(user.email);

      return { accessToken };
    } catch (error) {
      // THROW AN ERROR
      throw error;
    }
  };
}
