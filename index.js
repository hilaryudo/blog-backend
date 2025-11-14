const dotenv = require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const blogRouter = require('./routes/blogRouter');
const notFound = require('./utils/notFound');
dbConnect()

const app = express();

app.use(express.json());

app.use('/api/v1', authRouter);
app.use('/api/users', userRouter);
app.use('/api/v1/blogs', blogRouter);


app.use(notFound);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}..... and db connected`);
});
