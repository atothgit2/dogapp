// ToDo & Info
// https://dev.to/macmacky/get-better-with-typescript-using-express-3ik6
// Refactor by using ExpressJS: https://www.youtube.com/watch?v=-MTSQjw5DrM&t=38s

const mongoose = require('mongoose')
const port: number = 3000;
const dbURI = 'mongodb+srv://atoth:atoth@cluster0.zd53mvi.mongodb.net/dogs?retryWrites=true&w=majority';
import { app } from "./app";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  // @ts-ignore
  .then((result) => {
    console.log("*** Connected to DB! ***"),
    // @ts-ignore
    app.listen(port, () : void => console.log(`*** Typescript API server http://localhost:${port}/ ***`)) //  We want to listen for request only after the connection is established.
  })
  // @ts-ignore
  .catch((err) =>
    console.log(err)
  );