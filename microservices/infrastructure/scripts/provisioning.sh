#!/bin/bash

# Update system packages
sudo apt-get update
sudo apt-get upgrade -y

# Install required packages
sudo apt-get install -y docker docker-compose git

# Create a directory for your project
PROJECT_DIR="/path/to/project-root"
sudo mkdir -p "$PROJECT_DIR"
sudo chown -R $(whoami):$(whoami) "$PROJECT_DIR"

# Clone your project repository
git clone https://github.com/yourusername/yourproject.git "$PROJECT_DIR"

# Navigate to the project directory
cd "$PROJECT_DIR"

# Set up environment variables (if needed)
# export DATABASE_URL="mongodb://your-db-url"

# Start Docker services
sudo systemctl start docker
sudo systemctl enable docker

# Build and start Docker containers using docker-compose
docker-compose build
docker-compose up -d

echo "Provisioning completed."
