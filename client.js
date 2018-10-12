var soap = require('soap');

var url = 'http://localhost:8080/wsdl?wsdl';
var args = {name: 'value', testParam: 'something'};

soap.createClient(url, function(err, client) {
    console.log('inside create');
    client.MyFunction(args, function(err, result) {
        console.log('inside my function');
        console.log(result);
    }, {timeout: 5000});
});