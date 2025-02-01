import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      code: 400,
      status: 'error',
      message: 'Erro de validação',
      errors: err.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message
      }))
    });
    return;
  }

  console.error(err);
  res.status(500).json({
    code: 500,
    status: 'error',
    message: 'Erro interno do servidor'
  });
};
