#!/bin/bash

# Update and clean
git pull origin main
docker-compose down
docker-compose build
docker-compose up -d

# Clean up old images
docker image prune -f
