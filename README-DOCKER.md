# 🐳 Go Mission - Docker Deployment Guide

This guide will help you deploy the Go Mission application using Docker on your server.

## 📋 Prerequisites

- Docker installed on your server
- Docker Compose (optional but recommended)
- Git (to clone the repository)

## 🚀 Quick Deployment

### Option 1: Using the Deployment Script (Recommended)
```bash
# Make the script executable (if not already)
chmod +x deploy.sh

# Deploy with default port (3000)
./deploy.sh

# Deploy on custom port
PORT=8080 ./deploy.sh
```

### Option 2: Using Docker Compose
```bash
# For development
docker-compose up -d

# For production (includes Traefik reverse proxy)
docker-compose -f docker-compose.prod.yml up -d
```

### Option 3: Manual Docker Commands
```bash
# Build the image
docker build -t go-mission-app:latest .

# Run the container
docker run -d \
  --name go-mission-container \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  go-mission-app:latest
```

## 🏗️ Docker Configuration

### Dockerfile
- **Multi-stage build** for optimized production image
- **Node.js 20 Alpine** for smaller image size
- **Non-root user** for security
- **Production optimizations** included

### Environment Variables
- `NODE_ENV=production` - Sets production mode
- `NITRO_HOST=0.0.0.0` - Allows external connections
- `NITRO_PORT=3000` - Internal port (mapped to external)

## 🌐 Production Deployment

### Basic Production Setup
1. Update `docker-compose.prod.yml`:
   ```yaml
   # Change this line to your domain
   - "traefik.http.routers.go-mission.rule=Host(`your-domain.com`)"
   
   # Change this to your email for SSL certificates
   - "--certificatesresolvers.letsencrypt.acme.email=your-email@example.com"
   ```

2. Deploy:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Server Setup Commands
```bash
# Clone the repository
git clone <your-repo-url> go-mission-modern
cd go-mission-modern

# Build and deploy
./deploy.sh

# Check status
docker ps
docker logs go-mission-container
```

## 🔧 Management Commands

### View Logs
```bash
docker logs go-mission-container -f
```

### Update Application
```bash
# Pull latest changes
git pull

# Rebuild and redeploy
./deploy.sh
```

### Stop Application
```bash
docker stop go-mission-container
```

### Remove Application
```bash
docker stop go-mission-container
docker rm go-mission-container
docker rmi go-mission-app:latest
```

## 🔒 Security Considerations

1. **Firewall**: Ensure only necessary ports (80, 443) are open
2. **SSL**: Use the production compose file with Traefik for HTTPS
3. **Updates**: Regularly update the base image and dependencies
4. **Monitoring**: Set up log monitoring and alerting

## 📊 Monitoring & Health Checks

The Docker setup includes:
- **Health checks** to monitor application status
- **Restart policies** for automatic recovery
- **Resource limits** to prevent memory issues

### Check Health
```bash
docker inspect go-mission-container | grep -A 10 Health
```

## 🎯 Performance Optimization

### Production Recommendations
1. **Reverse Proxy**: Use Nginx or Traefik (included in prod compose)
2. **SSL Termination**: Let's Encrypt with automatic renewal
3. **Gzip Compression**: Handled by Nuxt/Nitro
4. **Image Optimization**: Already configured in Nuxt config

### Resource Limits
The production setup includes memory limits:
- **Limit**: 512MB
- **Reservation**: 256MB

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Check what's using the port
   lsof -i :3000
   
   # Use different port
   PORT=8080 ./deploy.sh
   ```

2. **Build fails**:
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild
   docker build --no-cache -t go-mission-app:latest .
   ```

3. **Application not accessible**:
   ```bash
   # Check container status
   docker ps
   
   # Check logs
   docker logs go-mission-container
   
   # Check if port is exposed
   docker port go-mission-container
   ```

### Logs Location
- **Container logs**: `docker logs go-mission-container`
- **Build logs**: Output during `docker build`

## 📁 File Structure

```
go-mission-modern/
├── Dockerfile              # Main Docker configuration
├── .dockerignore           # Files to exclude from build
├── docker-compose.yml      # Development compose
├── docker-compose.prod.yml # Production compose with SSL
├── deploy.sh              # Automated deployment script
└── README-DOCKER.md       # This guide
```

## 🤝 Support

If you encounter issues:
1. Check the logs: `docker logs go-mission-container`
2. Verify Docker is running: `docker info`
3. Ensure ports are available: `netstat -tulpn | grep :3000`

Happy deploying! 🚀 