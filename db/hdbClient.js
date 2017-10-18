module.exports = {
    exec : (query, params, done) => {

        var hdb = require('hdb')

        var client = hdb.createClient({
            host : 'HANA_HOST',
            port : 39915, // 99 = HANA instance
            database : 'SID', // SID = HANA DB SID 
            user : 'DBUSER',
            password : 'PASSWORD'
        })
        
        client.on('error', (err) => {
            return done(err, null)
        })

        client.connect((err) => {
            if (err) {
                return done(err, null)
            }
            client.prepare(query, (err, statement) => {
                if (err) {
                    return done(err, null)
                }
                statement.exec(params, (err, rows) => {
                    if (err) {
                        return done(err, null)
                    }
                    return done(null, rows)
                })
            })
        })
    }
}