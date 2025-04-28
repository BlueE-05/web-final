import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Importación de rutas
import userRoutes from './routes/users';

// Rutas de la API
app.use('/api', userRoutes);

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
