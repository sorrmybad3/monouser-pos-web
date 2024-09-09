# Step 1: Use an official Node.js runtime as the base image
FROM node:20 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Build the React Vite app for production
RUN npm run build

# Step 7: Use an Nginx image to serve the app
FROM nginx:alpine

# Step 8: Copy the build output to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
