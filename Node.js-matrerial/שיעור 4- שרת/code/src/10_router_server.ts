import express from 'express';
import {router} from '../Users/Controller';

const app = express();
const port = 3000;

app.use(express.json());

// שימוש ב-Router
app.use('/users', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});