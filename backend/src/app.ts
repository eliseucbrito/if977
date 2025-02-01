import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();
app.use(express.json());

app.use("/api", taskRoutes);
app.use(errorMiddleware);


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
