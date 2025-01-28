import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes';
import userRoutes from './routes/userRoutes';
import registrationRoutes from './routes/registrationRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/registrations', registrationRoutes);

// Error handling
app.use(errorHandler);

export default app;