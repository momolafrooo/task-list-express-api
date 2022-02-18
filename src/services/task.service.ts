import { PrismaClient } from "@prisma/client";

export default class TaskService {
  private static prisma: PrismaClient = new PrismaClient();

  // SAVE TASK
  public static saveTask = async (data: any) => {
    try {
      return await this.prisma.task.create({
        data,
      });
    } catch (error) {
      throw error;
    }
  };

  // GET ALL TASKS
  public static getAllTasks = async () => {
    try {
      return await this.prisma.task.findMany({});
    } catch (error) {
      throw error;
    }
  };

  // GET TASK BY ID
  public static getTaskById = async (id: number) => {
    try {
      return await this.prisma.task.findUnique({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  };

  // UPDATE TASK BY ID
  public static updateTaskById = async (id: number, data: any) => {
    try {
      return await this.prisma.task.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw error;
    }
  };

  // DELETE TASK BY ID
  public static deleteTaskById = async (id: number) => {
    try {
      return await this.prisma.task.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  };
}
