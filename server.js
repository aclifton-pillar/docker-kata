'use strict';

const express = require('express');
const http = require('http');
const soap = require('soap');
const bodyParser = require('body-parser');

const PORT = 8080;
const HOST = '0.0.0.0';

var myService = {
    MyService: {
        MyPort: {
            MyFunction: function(args) {
                console.log('hitting myfunction');
                return {
                    name: args.name,
                    testParam: args.testParam
                }
            }
        }
    }
}
var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

var app = express();

app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));

app.listen(PORT, function() {
    soap.listen(app, '/wsdl', myService, xml);
});