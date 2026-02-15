# Step 1: Base image
FROM node:24-alpine3.23 AS base

# Step 2: Set environment variables
ENV APP_HOME=/usr/app

# Step 3: Set working directory
WORKDIR ${APP_HOME}

# Step 4: Copy package.json and package-lock.json
COPY package*.json .

# Step 5: Install dependencies
RUN npm ci

# Step 6: Copy application code
COPY . .

# Step 7: Build application
RUN npm run build

# Step 8: Final image
FROM nginx:alpine

# Step 9: Copy the built application
COPY --from=base /usr/app/dist /usr/share/nginx/html

# Step 10: Expose ports
EXPOSE 80