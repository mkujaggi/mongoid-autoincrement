var MongoClient = require('mongodb').MongoClient;

var fetchNextId = (url, dbName, collec, colum, inc, start, callback) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;
        var db = client.db(dbName);
        var dbo = db.collection(collec);
        dbo.find({}).sort({ $natural: -1 }).limit(1).next((err, doc) => {
            if (err) throw err;
            if (doc === null) {
                callback(err, start);
            } else {
                callback(err, doc[colum] + inc);
            }
            client.close();
        });

    });
}
module.exports = { fetchNextId };