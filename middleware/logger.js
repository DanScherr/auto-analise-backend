/**
 * @description     Logs requests to console;
 * @route           /api/v1/criacao
 * @access          Public
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logger = (req, res, next) => {
    console.log(
        `
            ${req.method} 
            ${req.protocol}://${req.get('host')}${req.originalURL}
        `
    );
    next();
};

module.exports = logger;