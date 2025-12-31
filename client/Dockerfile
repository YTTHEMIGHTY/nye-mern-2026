# Stage 1: Build the React App
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# This builds the app to the 'dist' folder
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the built files from Stage 1 to Nginx's serve folder
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80 (Standard Web Port)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]