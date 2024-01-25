const  express =require('express'); //inport
const  mongoose=require('mongoose');
const  bodyParser =require('body-parser');
const  cors =require('cors');
const  dotenv =require('dotenv');
dotenv.config();



const  app=express(); //invoked express
app.use(cors());
app.use(bodyParser.json());

const  PORT=8000;

const  URL=process.env.MONGODB_URL;

mongoose.connect(URL);
const connection=mongoose.connection;

connection.once("open",()=>{
    console.log("Connection Success..!");
});

let  userRoute=require('./routes/Users.js');
app.use('/user',userRoute);

let reservationRoute=require('./routes/Reservations.js');
app.use('/reservation',reservationRoute);

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
});


