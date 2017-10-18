var hdb = require('./../../db/hdbClient')
var Bp = require('./Bp.js')()
module.exports = { 
    getBps : (req, res) => {
        var query = 'SELECT ' + Bp.fields + ' FROM BPS'
        hdb.exec(query, [], (err, rows) => {
            if (err) {
                return res.send(err)
            } else {
                for (var i = 0; i < rows.length; i++) {
                    rows[i].MEASURE_SISTOLIC = Number(rows[i].MEASURE_SISTOLIC)
                    rows[i].MEASURE_DIASTOLIC = Number(rows[i].MEASURE_DIASTOLIC)
                }
                return res.send({ bps : rows })
            }
        })
    },
    getLastBp : (req, res) => {
        var query = 'SELECT TOP 1 ' + Bp.fields + ' FROM BPS ORDER BY ' + Bp.keys + ' DESC'
        hdb.exec(query, [], (err, rows) => {
            if (err) {
                return res.send(err)
            } else {
                for (var i = 0; i < rows.length; i++) {
                    rows[i].MEASURE_SISTOLIC = Number(rows[i].MEASURE_SISTOLIC)
                    rows[i].MEASURE_DIASTOLIC = Number(rows[i].MEASURE_DIASTOLIC)
                }
                return res.send({ bp : rows[0] })
            }
        })
    }
}