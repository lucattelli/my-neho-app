module.exports = {
    getRouter : () => {

        // returns the router that will act under /ui5/*
        var express = require('express')
        var path = require('path')

        var router = express.Router()
        router.use('/', express.static(path.join(__dirname, 'webapp')))

        return router

    }
}