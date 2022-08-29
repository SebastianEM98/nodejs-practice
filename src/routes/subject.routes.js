const express = require('express')
const subject_model = require('../models/subject.model')
const subject_routes = express.Router()

/* Solicitudes HTTP: 
    GET: listar
    POST: crear nuevo registro
    ---------------------------------------------------------------------
    GET{id} : ver info en detalle, recibe como parametro el id
    PUT{id}: actualizar registro existente, recibe como parametro el id
    DELETE{id}: eliminar registro existente, recibe como parametro el id
*/

person_routes.post('/subject', (req, res) => {
    const new_subject = subject_model(req.body)
    new_subject
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})
person_routes.get('/', (req, res) => {
    person_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})
person_routes.get('/:subjectId', (req, res) => {})
person_routes.put('/:subjectId', (req, res) => {})
person_routes.delete('/:subjectId', (req, res) => {})

module.exports = subject_routes