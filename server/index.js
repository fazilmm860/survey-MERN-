const express = require(`express`);
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const connection = require('./database/Db')

const userRouter = require('./routers/userRoutes')

const app = express()

dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 6000

connection()

app.use('/api/feedback', userRouter)

app.listen(port, () => {
    console.log(`Server Started with Port :${port}`);
})