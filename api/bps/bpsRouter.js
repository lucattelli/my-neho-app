module.exports = {
    getRouter : () => {
        // returns the router that will act under /api/bps/*
        var express = require('express')
        var router = express.Router()
        var controller = require('./bpsController')
        router.route('/').get(controller.getBps)
        router.route('/last').get(controller.getLastBp)
        return router
    }
}