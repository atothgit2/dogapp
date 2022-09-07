"use strict";
// ToDo & Info
// https://dev.to/macmacky/get-better-with-typescript-using-express-3ik6
// Refactor by using ExpressJS: https://www.youtube.com/watch?v=-MTSQjw5DrM&t=38s
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var mongoose = require('mongoose');
var Dog = require('../models/dog'); // = model
exports.app = (0, express_1["default"])();
var port = 3000;
var dbURI = 'mongodb+srv://atoth:atoth@cluster0.zd53mvi.mongodb.net/dogs?retryWrites=true&w=majority';
// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//   // @ts-ignore
//   .then((result) => {
//     console.log("*** Connected to DB! ***"),
//     // @ts-ignore
//     app.listen(port, () : void => console.log(`*** Typescript API server http://localhost:${port}/ ***`)) //  We want to listen for request only after the connection is established.
//   })
//   // @ts-ignore
//   .catch((err) =>
//     console.log(err)
//   );
exports.app.use(express_1["default"].json()); // Handle the coming data
exports.app.use(express_1["default"].urlencoded({ extended: true }));
exports.app.use(body_parser_1["default"].urlencoded({ extended: false }));
exports.app.use(body_parser_1["default"].json());
// type DogType =  {
//   id: number;
//   name: string;
//   breed: "labrador" | "german shepherd" | "golden retriever";
//   adopted_at: Date | null;
//   birth_date: Date | null;
// }
// GET ALL RECORDS
exports.app.get('/dogs', function (req, res) {
    Dog.find() // model function, we are not using it on an instance
        // @ts-ignore
        .then(function (result) { res.send(result); })["catch"](function (err) { console.log(err); });
});
// GET SINGLE RECORD
// feature request: get record by any key
exports.app.get('/dog/:id', function (req, res) {
    var id = req.params.id;
    Dog.findById(id)
        // @ts-ignore
        .then(function (result) { res.send(result); })["catch"](function (err) { console.log(err); });
});
// CREATE NEW RECORD
// process multiple creation requests
exports.app.post('/dog', function (req, res) {
    var dog = new Dog({
        id: req.body[0].id,
        name: req.body[0].name,
        breed: req.body[0].breed,
        adopted_at: req.body[0].adopted_at,
        birth_date: req.body[0].birth_date
    });
    // @ts-ignore
    dog.save() // = instance function
        // @ts-ignore
        .then(function (result) { res.send(result); })["catch"](function (err) { console.log(err); });
});
// DELETE RECORD
// be able to delete by any (combination of) key(s)
exports.app["delete"]('/dog/:id', function (req, res) {
    var id = req.params.id;
    Dog.findById(id).deleteMany()
        // @ts-ignore
        .then(function (result) { res.send(result); })["catch"](function (err) { console.log(err); });
});
