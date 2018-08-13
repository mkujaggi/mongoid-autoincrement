# mongoid-autoincrement
A node.js package which returns incremented mongodb id.


## Usage

Install the package using npm:

    npm install mongoid-autoincrement --save

Then, require the package and use it like so:

    var {fetchNextId} = require('./index');
    fetchNextId('mongodb://localhost:27017/', 'DBName', 'collectionName', 'ColumnName', incrementStep,InitialValue, (err, inc) => {
    if (err) {
        throw err;
    }
    console.log(inc);
    });

## License

MIT
