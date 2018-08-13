var {fetchNextId} = require('./index');
fetchNextId('mongodb://localhost:27017/Orders', 'Orders', 'orders', 'orderId', 2,1000, (err, inc) => {
    if (err) {
        throw err;
    }
    console.log(inc);
});