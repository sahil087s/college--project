import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 8080;
import routes from './routes/index.js';

app.use(cors({origin:'*'}));

app.use('/head', routes.headRoute);
app.use('/upperBody', routes.upperBodyRoute);
app.use('/lowerBody', routes.lowerBodyRoute);

app.listen(PORT, () => {
    console.log('listening at ' + PORT);
})