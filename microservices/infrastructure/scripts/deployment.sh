#!/bin/bash

# Define variables
APP_DIR="/path/to/project-root"
DOCKER_COMPOSE_FILE="$APP_DIR/docker-compose.yml"

# Navigate to the project directory
cd "$APP_DIR"

# Pull the latest changes from your repository (if using version control)
git pull origin master

# Build Docker containers using docker-compose
docker-compose -f "$DOCKER_COMPOSE_FILE" build

# Stop and remove existing containers
docker-compose -f "$DOCKER_COMPOSE_FILE" down

# Start the application in detached mode
docker-compose -f "$DOCKER_COMPOSE_FILE" up -d

echo "Deployment completed."
