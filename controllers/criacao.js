const Criacao = require("../models/Criacao");

/**
 * @description     Get all creations;
 * @route           /api/v1/criacao
 * @access          Public
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCriacoes = (req, res, next) => {
    res.status(200).json({status: true, data: 'Obter todas as informações'});
};


/**
 * @description     Get a creation;
 * @route           /api/v1/criacao
 * @access          Public
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCriacao = (req, res, next) => {
    res.status(200).json({status: true, data: `Obter ${req.params.id}`});
};


/**
 * @description     Post a creation;
 * @route           /api/v1/criacao
 * @access          Public
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postCriacao = async (req, res, next) => {
    const criacao = await Criacao.create(req.body);

    res.status(201).json({
        success: true,
        data: criacao,
    })
};

/**
 * @description     Edit a creation;
 * @route           /api/v1/criacao
 * @access          Public
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.updateCriacao = (req, res, next) => {
    res.status(200).json({status: true, data: `Editar ${req.params.id}`});
};

/**
 * @description     Delete a creation;
 * @route           /api/v1/criacao
 * @access          Public
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deleteCriacao = (req, res, next) => {
    res.status(200).json({status: true, data: `Deletar ${req.params.id}`});
};