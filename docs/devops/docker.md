# Build Docker container for Vite React app

Docker container for Vite React App
https://javascript.plainenglish.io/step-by-step-guide-to-dockerize-react-app-created-using-vite-90772423f7fb

https://medium.com/@mattburrellnet/running-a-react-vite-app-in-docker-using-nginx-414ff9a302c5

Docker container for GCP
https://cloud.google.com/community/tutorials/deploy-react-nginx-cloud-run

## Development in Local Environment
For Vite

### Dockerfile

```sh
FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

### Docker Build and Run for Production
```sh
docker build \
-t ej838639/charis:0.1 \
--platform linux/amd64 \
.

docker run \
--name charis_0_1 \
-p 5173:5173 \
-d \
ej838639/charis:0.1
```

### Test for Production
http://localhost:5173

## Production HTTPS on Google Cloud

### Dockerfile
```sh
# Build environment
FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "build"]

# Server environment
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 443
CMD ["nginx","-g","daemon off;"]
```

### Docker Build for Production
Docker build not necessary when deploying to GCP since using `gcloud builds submit` that builds image and pushes it to gcr.io
```sh
docker build \
-t ej838639/charis:8.0 \
-t ej838639/charis:latest \
--platform linux/amd64 \
.

```

### Test for Production
http://localhost
