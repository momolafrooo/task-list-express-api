import { PrismaClient } from "@prisma/client";
import httpErrors from "http-errors";

export default class TaskService {
  private static prisma: PrismaClient = new PrismaClient();

  // SAVE TASK
  public static saveTask = async (data: any) => {
    try {
      const task = await this.prisma.task.findUnique({ where: { name: data.name } });
      if (task) throw new httpErrors.Conflict(`The task '${data.name}' already exists !`);

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

  // GET ALL TASKS BY USER_ID
  public static getAllTasksByUserId = async (authorId: number) => {
    try {
      return await this.prisma.task.findMany({ where: { authorId } });
    } catch (error) {
      throw error;
    }
  };

  // GET TASK BY ID
  public static getTaskById = async (id: number) => {
    try {
      const task = await this.prisma.task.findUnique({ where: { id } });

      if (!task) throw new httpErrors.NotFound(`Task Not Found !`);

      return task;
    } catch (error) {
      throw error;
    }
  };

  // UPDATE TASK BY ID
  public static updateTaskById = async (id: number, data: any) => {
    try {
      await this.getTaskById(id);
      const task = await this.prisma.task.findFirst({
        where: {
          name: data.name,
          NOT: {
            id,
          },
        },
      });

      if (task) throw new httpErrors.Conflict(`The task '${data.name}' already exists !`);

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
      await this.getTaskById(id);
      return await this.prisma.task.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  };
}
