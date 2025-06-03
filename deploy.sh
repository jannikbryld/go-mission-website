#!/bin/bash

# Go Mission - Docker Deployment Script
echo "🚀 Starting Go Mission deployment..."

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Set variables
IMAGE_NAME="go-mission-app"
CONTAINER_NAME="go-mission-container"
PORT=${PORT:-3000}

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t $IMAGE_NAME:latest .

if [ $? -ne 0 ]; then
    echo "❌ Docker build failed!"
    exit 1
fi

# Stop and remove existing container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "🛑 Stopping existing container..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Run the new container
echo "🚀 Starting new container..."
docker run -d \
    --name $CONTAINER_NAME \
    -p $PORT:3000 \
    --restart unless-stopped \
    -e NODE_ENV=production \
    -e NITRO_HOST=0.0.0.0 \
    -e NITRO_PORT=3000 \
    $IMAGE_NAME:latest

if [ $? -eq 0 ]; then
    echo "✅ Go Mission deployed successfully!"
    echo "🌐 Application is running at http://localhost:$PORT"
    echo ""
    echo "📊 Container status:"
    docker ps --filter name=$CONTAINER_NAME --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    echo ""
    echo "📋 To view logs: docker logs $CONTAINER_NAME"
    echo "🛑 To stop: docker stop $CONTAINER_NAME"
else
    echo "❌ Deployment failed!"
    exit 1
fi 