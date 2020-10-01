var express = require('express');

const app = express();
const port = '3333';
const { User } = require('./database/Database');
const userController = require('./app/controllers/UserController');
require('./database/Database');
const UserRouter = require('./app/routes/userRoutes')
const cors = require('cors');


app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
/*app.get('/users', (req, res) => {
  res.send('Users!');
});*/
app.use('/users', UserRouter);

//app.listen(3000)
app.listen(port, function () {
  console.log(`app listening on port http://localhost:${port}`)
});
