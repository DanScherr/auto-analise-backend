//@ts-check
"use strict";

// Setting and Importing
const express = require("express");
const router = express.Router();
const {
    getCriacoes,
    postCriacao,
    getCriacao,
    updateCriacao,
    deleteCriacao
} = require('./../controllers/criacao');

// Routes without params
router.route('/')
    .get(getCriacoes)
    .post(postCriacao)
;

//Routes with params
router.route('/:id')
    .get(getCriacao)
    .put(updateCriacao)
    .delete(deleteCriacao)
;

// Exporting
module.exports = router;