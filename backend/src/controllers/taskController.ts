import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { IdSchema, TaskSchema } from 'src/schemas/TaskSchema';

const prisma = new PrismaClient();

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskData = TaskSchema.parse(req.body);
    const task = await prisma.task.create({
      data: {
        ...taskData,
        data_vencimento: taskData.data_vencimento || null
      }
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status } = req.query;
    const tasks = await prisma.task.findMany({
      where: status ? { status: String(status) } : {}
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = IdSchema.parse(Number(req.params.id));
    const task = await prisma.task.findUnique({
      where: { id }
    });

    if (!task) {
      res.status(404).json({
        code: 404,
        status: 'error',
        message: 'Tarefa não encontrada'
      });
      return;
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = IdSchema.parse(Number(req.params.id));
    const taskData = TaskSchema.partial().parse(req.body);
    const task = await prisma.task.update({
      where: { id },
      data: taskData
    });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = IdSchema.parse(Number(req.params.id));
    await prisma.task.delete({
      where: { id }
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
