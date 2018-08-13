var {fetchNextId} = require('./index');
fetchNextId('mongodb://localhost:27017/', 'DBName', 'collectionName', 'columnName', 2,1000, (err, inc) => {
    if (err) {
        throw err;
    }
    console.log(inc);
});