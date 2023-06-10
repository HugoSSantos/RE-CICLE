import express from 'express';
import cors from 'cors';
import route from './router/route';


const hostname = "http://localhost:";
const port = "5050";

const app = express();
app.use(express.json());
//app.use(cors({origin: 'http://localhost:5173'}));

app.use(route)

app.listen(port, () => {
    console.log(`The Server is runnig at ${hostname}${port}`);
})