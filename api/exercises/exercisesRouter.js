module.exports = {
    getRouter : () => {
        // returns the router that will act under /api/exercises/*
        var express = require('express')
        var router = express.Router()
        var controller = require('./exercisesController')
        router.route('/').get(controller.getExercises)
        router.route('/last').get(controller.getLastExercise)
        return router
    }
}