const express = require('express')
const person_model = require('../models/person.model')
const person_routes = express.Router()

/* Solicitudes HTTP: 
    GET: listar
    POST: crear nuevo registro
    ---------------------------------------------------------------------
    GET{id} : ver info en detalle, recibe como parametro el id
    PUT{id}: actualizar registro existente, recibe como parametro el id
    DELETE{id}: eliminar registro existente, recibe como parametro el id
*/

person_routes.post('/', (req, res) => {
    const new_person = person_model(req.body)
    new_person
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

person_routes.get('/', (req, res) => {
    person_model
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

person_routes.get('/:personId', (req, res) => {})
person_routes.put('/:personId', (req, res) => {})
person_routes.delete('/:personId', (req, res) => {})

module.exports = person_routes