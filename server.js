const express = require('express');
const connectDB = require('./config/connectDB');

//connect on DataBase
connectDB();

const app = express();

app.use(express.json());

app.use('/api/level', require('./routes/level'));
app.use('/api/grade', require('./routes/grade'));
app.use('/api/speciality', require('./routes/speciality'));
app.use('/api/situation', require('./routes/situation'));
app.use('/api/city', require('./routes/city'));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));