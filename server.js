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
                return {
                    name: args.name,
                    testParam: args.testParam
                }
            },
            MyAsyncFunction: function(args, callback) {
                callback({
                    name: args.name
                })
            },
            HeadersAwareFunction: function(args, cb, headers) {
                return {
                    name: headers.Token
                }
            },
            reallyDetailedFunction: function(args, cb, headers, req) {
                console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                return {
                    name: headers.Token
                }
            }
        }
    }
}
var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

var server = http.createServer(function(request, response) {
    response.end('404: Not found ' + request.url);
});

server.listen(PORT);
soap.listen(server, '/wsdl', myService, xml);

var app = express();

app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));

app.listen(PORT+1, function() {
    soap.listen(app, '/wsdl', myService, xml);
});