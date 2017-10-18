var hdb = require('./../../db/hdbClient')
var Weight = require('./Weight.js')()
module.exports = {
    getWeights : (req, res) => {
        var query = 'SELECT ' + Weight.fields + ' FROM WEIGHTS'
        hdb.exec(query, [], (err, rows) => {
            if (err) {
                return res.send(err)
            } else {
                for (var i = 0; i < rows.length; i++) {
                    rows[i].MEASURE_WEIGHT = Number(rows[i].MEASURE_WEIGHT)
                }
                return res.send({ weights : rows })
            }
        })
    },
    getLastWeight : (req, res) => {
        var query = 'SELECT TOP 1 ' + Weight.fields + ' FROM WEIGHTS ORDER BY ' + Weight.keys + ' DESC'
        hdb.exec(query, [], (err, rows) => {
            if (err) {
                return res.send(err)
            } else {
                for (var i = 0; i < rows.length; i++) {
                    rows[i].MEASURE_WEIGHT = Number(rows[i].MEASURE_WEIGHT)
                }
                return res.send({ weight : rows[0] })
            }
        })
    }
}