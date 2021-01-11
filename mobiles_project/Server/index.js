import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import mobileRouter from './routes/mobile.js';

const app = express();

app.use(bodyParser.json({ limit : '30mb', extended : true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true}));
app.use(cors);

app.use('/mobile', mobileRouter);

app.get('/', (req,res) => {
    res.send('some html');
})

const CONNECTION_URL = 'mongodb+srv://Tabar:Tabar123@cluster0.87yy5.mongodb.net/DbTest?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
        .then(() => app.listen(PORT,() => console.log(`Server is listening on port : ${PORT}`)))
        .catch(err => console.log(err.message) );

mongoose.set('useFindAndModify', false);





