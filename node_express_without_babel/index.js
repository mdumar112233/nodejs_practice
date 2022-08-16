import express from 'express';
import student from './routes/student.js';
import teacher from './routes/teacher.js';
import home from './routes/home.js';
import { myLogged } from './middlewares/application.js';
import {createDoc, getAllDoc, getSpecificDoc, updateDocument, deleteDoc} from './models/Student.js';
import './models/Student.js';
import {join} from 'path';
import cookieParser from 'cookie-parser';
import cookie from './routes/cookieRoute.js';

const app = express();
const port = process.env.PORT || 5000;

// mongoose connect
import connectDB from './db/connectdb.js';
import user from './routes/userRouter.js';
connectDB();

// Cookie parser
app.use(cookieParser())

// body-parser ulternative
app.use(express.urlencoded({extended: true}));

// create and save document with mongoose 
// createDoc();

// get all retrieve document
// getAllDoc();

// get all specific document
// getSpecificDoc();

// update document 
// updateDocument();

// delete document
// deleteDoc();

// mongoose.connect('mongodb://localhost:27017/test')
// .then(() => console.log('connect'))

// static files
// app.use(express.static(join(process.cwd(), 'public')));
// app.use('/static', express.static(join(process.cwd(), 'public')));

// for single static file load into html
// app.use('/css', express.static(join(process.cwd(), 'public/css')));

// load static dot file 
// const options = {
//     dotfiles: 'allow',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.set('x-timestamp', Date.now());
//     }
// }

// app.use(express.static(join(process.cwd(), 'public'), options));

// setup the template engine to use
app.set('view engine', 'ejs');

app.use(myLogged)

// student router
app.use('/', home);
app.use('/', user)
app.use('/cookie', cookie)
app.use('/student', student);
app.use('/teacher', teacher);

// app.get('/', (req, res) => {
//     res.send('start over again')
// })

// app.all('/all', (req, res) => {
//     res.send('all method')
// })

// If any path not found
// app.all('*', (req, res) => {
//     res.send('page not found')
// })


app.listen(port, () => {
    console.log('app is ruing')
})