1) Create a nodejs app that runs in a docker container
2) The nodjs app should receive an arbitrary SOAP call (you decide, mine will be a PING)
3) Nodejs app should respond to the SOAP call (mine will be PONG)
4) Create a nodejs app that doesn't need to run in a docker container
5) That app is run from the command line
6) When it's run it sends a PING request to the dockerized SOAP server
7) It waits for the PONG response, prints something and then exits

docker build -t <your username>/node-web-app .
docker image ls

docker run -p 8080:8080 -d <your username>/node-web-app

If you need to disconnect from a remote swarm to manage your local docker:
eval $(docker-machine env -u)

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:pm="http://www.getpostman.com/">
	<soapenv:Header></soapenv:Header>
	<soapenv:Body>
		<pm:MyFunction>
			<pm:name>
				Hello Message	
			</pm:name>
		</pm:MyFunction>
	</soapenv:Body>
</soapenv:Envelope>
```

```
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://www.examples.com/wsdl/MyService.wsdl">
    <soap:Body>
        <tns:MyFunctionResponse>
            <tns:name>Hello Message</tns:name>
            <tns:testParam></tns:testParam>
        </tns:MyFunctionResponse>
    </soap:Body>
</soap:Envelope>
```