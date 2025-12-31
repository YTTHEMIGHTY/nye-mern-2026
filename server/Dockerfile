# Stage 1: Build
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# (Assumes your tsconfig outputs to /dist)

# Stage 2: Production Runner
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
# Expose the port your Express app runs on (e.g., 5000)
EXPOSE 5001
CMD ["node", "dist/index.js"]