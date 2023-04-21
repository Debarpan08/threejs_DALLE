import express  from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express(); // set up the express application

app.use(cors()); //set up middlewares
app.use(express.json({ limit: "50mb"})) // set the size of the payloasd we want to send

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req,res) =>{
    res.status(200).json({message : "Hello from DALL.E"})
})

app.listen(8080, ()=> console.log("Server has started"))