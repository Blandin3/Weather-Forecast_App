# Use nginx as base image
FROM nginx:alpine

# Copy application files
COPY src/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Default nginx startup command
CMD ["nginx", "-g", "daemon off;"]
