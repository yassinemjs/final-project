const express = require("express");
const connectDB = require("./config/connectDB");

const cors= require('cors')

//connect on DataBase
connectDB();

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/level', require('./routes/level'));
app.use('/api/grade', require('./routes/grade'));
app.use('/api/speciality', require('./routes/speciality'));
app.use('/api/situation', require('./routes/situation'));
app.use('/api/city', require('./routes/city'));
app.use('/api/post', require('./routes/posts'));
app.use('/api/prof', require('./routes/enseignant'));
app.use('/api/prof/me', require('./routes/loginEnsaignant'));
app.use('/api/admin', require('./routes/administrateur'));
app.use('/api/school', require('./routes/school'));
app.use('/api/sch_ens', require('./routes/schoolEns'));
app.use('/api/note', require('./routes/note'));
app.use('/api/secteur', require('./routes/sector'));
app.use('/api/inspecteur', require('./routes/inspector'));
app.use('/api/msg',require('./routes/message')); 

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
