// Capas: db -> controller -> handler -> routes -> Postman
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;

import userRoutes from './routes/users';

app.use('/api', userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));