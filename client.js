var soap = require('soap');

var url = 'http://localhost:8080/wsdl?wsdl';
var argsGood = {message: 'PING'};
var argsBad = {message: 'BING?'};

soap.createClient(url, function(err, client) {
    client.MyFunction(argsGood, function(err, result) {
        console.log('inside my function');
        console.log(JSON.stringify(result));
    }, {timeout: 5000});

    client.MyFunction(argsBad, function(err, result) {
        console.log('inside my function');
        console.log(JSON.stringify(result));
    }, {timeout: 5000});
});