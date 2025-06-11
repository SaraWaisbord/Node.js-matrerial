import express from 'express';

const app = express();

// Middlewares
app.use(express.json());

// נתיבי ה-API
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/calendar', calendarRoutes);

// אפשרות לטיפול בשגיאות כלליות
app.use((err, req, res, next) => {
    res.status(500).send('משהו השתבש!');
});

export default app;