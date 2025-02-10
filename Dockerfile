# Используем Node.js для сборки
FROM node:18 AS builder

WORKDIR /app

# Копируем и билдим remote
COPY remote ./remote
WORKDIR /app/remote
RUN npm install && npm run build

# Копируем и билдим host
COPY ../host ./host
WORKDIR /app/host
RUN npm install && npm run build

# Используем Nginx для раздачи
FROM nginx:latest

# Копируем статические файлы в Nginx
COPY --from=builder /app/host/dist /usr/share/nginx/html
COPY --from=builder /app/remote/dist /usr/share/nginx/html/remote

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
