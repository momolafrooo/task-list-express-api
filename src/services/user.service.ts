import { PrismaClient } from "@prisma/client";

export default class UserService {
  private static prisma: PrismaClient = new PrismaClient();

  // GET USER BY EMAIL
  public static getUserByEmail = async (email: string) => {
    try {
      // GET THE USER
      return await this.prisma.user.findUnique({ where: { email } });
    } catch (error) {
      // THROW AN ERROR
      throw error;
    }
  };
}
