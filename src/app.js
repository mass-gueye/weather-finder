import express from 'express';
import 'ejs';
import dotenv from 'dotenv';
dotenv.config();
import router from './router.js';

const app = express();
const port = process.env.PORT || 3000;


// Apply middlewares
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static("public"));

app.use("/", router)



// listening to the given port
app.listen(port, () => console.log(`Running on http://localhost:${port}`));