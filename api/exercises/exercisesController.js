var hdb = require('./../../db/hdbClient')
var Exercise = require('./Exercise.js')()
module.exports = {
    getExercises : (req, res) => {
        var query = 'SELECT ' + Exercise.fields + ' FROM EXERCISES'
        hdb.exec(query, [], (err, rows) => {
            if (err) {
                return res.send(err)
            } else {
                return res.send({ exercises : rows })
            }
        })
    },
    getLastExercise : (req, res) => {
        var query = 'SELECT TOP 1 ' + Exercise.fields + ' FROM EXERCISES ORDER BY ' + Exercise.keys + ' DESC'
        hdb.exec(query, [], (err, rows) => {
            if (err) {
                return res.send(err)
            } else {
                return res.send({ exercise : rows[0] })
            }
        })
    }
}