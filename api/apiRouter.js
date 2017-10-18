module.exports = {
    getRouter : () => {

        // returns the router that will act under /api/*
        var express = require('express')
        var router = express.Router()

        router.route('/').get((req, res) => {
            res.send({
                entities : [
                    "bps",
                    "exercises",
                    "weights"
                ]
            })
        })

        var weightsRouter = require('./weights/weightsRouter')
        router.use('/weights/', weightsRouter.getRouter())

        var bpsRouter = require('./bps/bpsRouter')
        router.use('/bps/', bpsRouter.getRouter())

        var exercisesRouter = require('./exercises/exercisesRouter')
        router.use('/exercises/', exercisesRouter.getRouter())

        return router
    }
}