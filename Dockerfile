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
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]