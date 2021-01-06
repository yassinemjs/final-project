const express = require("express");
const connectDB = require("./config/connectDB");

//connect on DataBase
connectDB();

const app = express();

app.use(express.json());

app.use("/api/level", require("./routes/level"));
app.use("/api/enseignant/grade", require("./routes/grade"));
app.use("/api/speciality", require("./routes/speciality"));
app.use("/api/situation", require("./routes/situation"));
app.use("/api/city", require("./routes/city"));
app.use("/api/admin", require("./routes/administrateur"));
app.use("/api/prof", require("./routes/enseignant"));
app.use("/api/prof", require("./routes/loginEnseignant"));
app.use("/api/post", require("./routes/posts"));
app.use("/api/secteur", require("./routes/arrondissement"));
app.use("/api/inspecteur", require("./routes/inspector"));
app.use("/api/note", require("./routes/note"));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));
