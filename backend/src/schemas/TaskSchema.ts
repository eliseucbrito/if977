import { z } from 'zod';

export const TaskSchema = z.object({
  titulo: z.string().min(1, 'Título é obrigatório'),
  descricao: z.string().optional(),
  status: z.enum(['pendente', 'realizando', 'concluída']),
  data_vencimento: z.coerce
    .date()
    .optional()
    .refine(
      date => !date || date > new Date(),
      'Data de vencimento deve ser futura'
    )
    .optional()
});

export const IdSchema = z.number().int().positive({ message: 'ID inválido' });

export type TaskType = z.infer<typeof TaskSchema>;
