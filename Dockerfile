# Build environment
FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "build"]

# Server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]