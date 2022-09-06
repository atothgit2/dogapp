// https://dev.to/macmacky/get-better-with-typescript-using-express-3ik6

import express from "express";
import bodyParser from "body-parser";

const mongoose = require('mongoose')
const Dog = require('../models/dog') // = model
const app = express();
const port: number = 3000;
const dbURI = 'mongodb+srv://atoth:atoth@cluster0.zd53mvi.mongodb.net/dogs?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  // @ts-ignore
  .then((result) =>
    console.log("*** Connected to DB! ***"),
    // @ts-ignore
    app.listen(port, () : void => console.log(`*** Typescript API server http://localhost:${port}/ ***`)) //  We want to listen for request only after the connection is established.
  )
  // @ts-ignore
  .catch((err) =>
    console.log(err)
  );

app.use(express.json()); // Handle the coming data
app.use(express.urlencoded({extended: true})); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

type DogType =  {
  id: number;
  name: string;
  breed: "labrador" | "german shepherd" | "golden retriever";
  adopted_at: Date | null;
  birth_date: Date | null;
}

// GET ALL RECORDS
app.get('/dogs', (req, res): void => {
  Dog.find() // model function, we are not using it on an instance
    // @ts-ignore
    .then((result) => {res.send(result)})
    // @ts-ignore
    .catch((err) => {console.log(err);})
});

// GET SINGLE RECORD
// feature request: get record by any key
app.get('/dog/:id', (req, res): void => {
  let id: string = req.params.id;

  Dog.findById(id)
    // @ts-ignore
    .then((result) => {
      res.send(result)
    })
    // @ts-ignore
    .catch((err) => {
      console.log(err);
    })
});

// CREATE NEW RECORD
// process multiple creation requests
app.post('/dog', (req, res): void => {
  const dog = new Dog({
    id: req.body[0].id,
    name: req.body[0].name,
    breed: req.body[0].breed,
    adopted_at: req.body[0].adopted_at,
    birth_date: req.body[0].birth_date
  });
  // @ts-ignore
  dog.save() // = instance function
    // @ts-ignore
    .then((result) => { res.send(result)})
    // @ts-ignore
    .catch((err) => { console.log(err);});
});



// app.get<
//   {}, //   Params,
//   { data: Dog[]; message: string }, //   ResBody,
//   {}, //   ReqBody,
//   {}, //   ReqQuery,
//   {}  //   Locals
// >("/dogs/", (req, res) => {
// });

/* --------------------------------------------------------------------------

-------------------------------------------------------------------------- */

// GET /api/v1/dogs
app.get<
  {}, //  will be getting a list of dogs, so we will not pass a type in the Params
  { data: DogType[]; message: string }, // we will send an object that has two properties data whose type is an array of Dogs and message whose type is a string
  {}, // we won't be receiving any data in this endpoint
  {
    page: number;
    limit: number;
    breed: "labrador" | "german shepherd" | "golden retriever";
  }
>("/api/v1/dogs", (req, res) => {
  // your implementation
});

// GET /api/v1/dogs/:id
app.get<
  { id: number }, // property is an id which has the type of number because we will be getting a specific dog.
  { data: DogType | null; message: string },
  {}
>("/api/v1/dogs/:id", (req, res) => {
  // your implementation
});

// POST /api/v1/dogs -> creating new dog
app.post<{}, { data: DogType & { id: number }; message: string }, DogType, {}>(
  "/api/v1/dogs",
  (req, res) => {
    // your implementation
  }
);

// PUT /api/v1/dogs/:id
app.put<
  { id: number },
  { data: DogType & { id: number }; message: string },
  Partial<DogType>, // utility Type Partial that makes every property in the Dog interface optional
  {}
>("/api/v1/dogs", (req, res) => {
  // your implementation
});

// DELETE /api/v1/dogs/:id 
app.delete<
{ id: number },
{ data: DogType & { id: number }, message: string },
{},
{}>
('/api/v1/dogs', (req,res) => { 
  // your implementation
})
// Server the api endpoints.
// app.listen(port, (): void => {
//  console.log(`*** Typescript API server http://localhost:${port}/ ***`);
// });