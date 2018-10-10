docker build -t <your username>/node-web-app .
docker image ls

docker run -p 8080:8080 -d <your username>/node-web-app

If you need to disconnect from a remote swarm to manage your local docker:
eval $(docker-machine env -u)