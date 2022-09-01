const express = require('express')
const person_model = require('../models/person.model')
const person_routes = express.Router()

/* Solicitudes HTTP:

    POST: crear nuevo registro
    GET: listar
    ---------------------------------------------------------------------
    GET{id} : ver info en detalle, recibe como parametro el id
    PUT{id}: actualizar registro existente, recibe como parametro el id
    DELETE{id}: eliminar registro existente, recibe como parametro el id
*/

person_routes.post('/person', (req, res) => {
    const new_person = person_model(req.body)
    new_person
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

person_routes.get('/', (req, res) => {
    person_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

person_routes.get('/:personId', (req, res) => {
    const { personId } = req.params;
    person_model
        .findById(personId)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

person_routes.put('/:personId', (req, res) => {
    const { personId } = req.params;
    const {username, lastname, age, email} = req.body //Todos los campos que conforma el modelo, deben tener el mismo nombre
    person_model
        .updateOne({ _id: personId}, { $set: { username, lastname, age, email } })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

person_routes.delete('/:personId', (req, res) => {
    const { personId } = req.params;
    person_model
        .deleteOne({ _id: personId})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = person_routes