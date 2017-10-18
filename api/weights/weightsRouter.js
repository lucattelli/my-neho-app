module.exports = {
    getRouter : () => {
        // returns the router that will act under /api/weights/*
        var express = require('express')
        var router = express.Router()
        var controller = require('./weightsController')
        router.route('/').get(controller.getWeights)
        router.route('/last').get(controller.getLastWeight)
        return router
    }
}