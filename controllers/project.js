'use strict'
var Project = require('../models/project');
var fs = require('fs');

var controller = {
    home: function(req, res)
    {
        return res.status(200).send({
            message: 'Soy la home'
        })
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador de project'
        })
    }
};
module.exports = controller;