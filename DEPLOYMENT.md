# Maygo - Deployment Guide

## Overview
This guide covers deploying the Maygo Health Ecosystem application to production environments.

## Prerequisites
- Node.js 18+ installed
- npm/pnpm/yarn installed
- Git configured
- Vercel CLI (for Vercel deployment)

## Development Environment

### Local Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
```

### Build for Production
```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## Production Deployment

### Option 1: Vercel (Recommended)

#### Automatic Deployment from GitHub

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial Maygo deployment"
git push origin main
```

2. **Deploy to Vercel**
```bash
npm install -g vercel
vercel
```

3. **Follow the prompts**
   - Authorize with your Vercel account
   - Select project name
   - Select root directory (.)
   - Override build settings if needed

#### Manual Deploy
```bash
vercel --prod
```

### Option 2: Docker

#### Build Docker Image
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY next.config.js ./
COPY app ./app
COPY components ./components
COPY public ./public

# Install dependencies
RUN npm ci --only=production

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
```

#### Build and Run
```bash
# Build image
docker build -t maygo-health:latest .

# Run container
docker run -p 3000:3000 maygo-health:latest
```

### Option 3: Traditional Server (Node.js)

#### Using PM2
```bash
# Install PM2 globally
npm install -g pm2

# Build application
npm run build

# Start with PM2
pm2 start npm --name "maygo" -- start

# Monitor
pm2 monit

# Logs
pm2 logs maygo
```

#### Using systemd (Linux)
Create `/etc/systemd/system/maygo.service`:
```ini
[Unit]
Description=Maygo Health Ecosystem
After=network.target

[Service]
Type=simple
User=nodejs
WorkingDirectory=/opt/maygo
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl daemon-reload
sudo systemctl enable maygo
sudo systemctl start maygo
```

## Environment Variables

### Required Variables
```env
# Node environment
NODE_ENV=production

# Application
NEXT_PUBLIC_API_URL=https://api.maygo.health
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Optional Variables
```env
# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Feature Flags
NEXT_PUBLIC_ENABLE_BETA=false

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

## Performance Optimization

### Caching Headers
Configure your web server to set appropriate cache headers:

```nginx
# For static assets
location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# For fonts
location /fonts/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# For images
location /images/ {
    expires 30d;
    add_header Cache-Control "public";
}

# For HTML pages
location / {
    expires 0;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

### CDN Configuration
1. Use Cloudflare, Akamai, or similar CDN
2. Configure origin as your server
3. Enable automatic minification
4. Set cache TTL appropriately

## Monitoring & Logging

### Health Check
```bash
curl https://your-domain.com/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2026-05-08T16:24:00.000Z",
  "service": "Maygo Health Ecosystem API",
  "version": "1.0.0"
}
```

### Application Logging
Monitor logs for errors:
```bash
# Vercel
vercel logs

# PM2
pm2 logs maygo

# Docker
docker logs <container_id>
```

## Security Checklist

- [ ] HTTPS enabled (SSL/TLS certificate)
- [ ] Security headers configured
- [ ] CORS properly restricted
- [ ] Rate limiting enabled
- [ ] Input validation implemented
- [ ] Authentication secured
- [ ] Environment variables protected
- [ ] API endpoints protected
- [ ] Database connections encrypted
- [ ] Regular security audits scheduled

## Performance Metrics

Target metrics:
- **Core Web Vitals**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

- **Bundle Size**
  - JavaScript: < 200KB
  - CSS: < 50KB
  - Images: Optimized per page

## Rollback Procedure

### Vercel
```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote <deployment_id>
```

### Docker
```bash
# Run previous image
docker run -p 3000:3000 maygo-health:v1.0.0
```

### PM2
```bash
# Revert to previous version
pm2 restart maygo
# Or restore from backup
```

## Scaling Strategy

### Horizontal Scaling
- Deploy multiple instances behind load balancer
- Use session persistence or external session storage
- Implement database connection pooling

### Vertical Scaling
- Increase server resources (CPU, RAM)
- Optimize database indexes
- Enable caching strategies

## Backup & Recovery

### Database Backups
```bash
# Schedule daily backups
0 2 * * * pg_dump maygo_db > /backups/maygo_$(date +\%Y\%m\%d).sql
```

### Application Backups
```bash
# Backup production builds
tar -czf maygo-backup-$(date +%Y%m%d).tar.gz .next/
```

## Maintenance Windows

Schedule maintenance during low-traffic periods:
- Weekdays: 2-4 AM
- Weekends: 3-5 AM (optional)

### Maintenance Mode
```bash
# During deployment, serve maintenance page
# Configured in web server or middleware
```

## Support & Troubleshooting

### Common Issues

**Application won't start**
```bash
# Check logs
npm run build

# Verify environment variables
env | grep NEXT

# Check port availability
lsof -i :3000
```

**High memory usage**
```bash
# Monitor with PM2
pm2 monit

# Check for memory leaks
node --inspect build/index.js
```

**Slow performance**
```bash
# Check bundle size
npm run analyze

# Profile with Lighthouse
lighthouse https://your-domain.com
```

## Contact & Support

For deployment issues:
- Check application logs
- Review error tracking (Sentry)
- Contact DevOps team
- Review deployment documentation

---

**Last Updated**: May 2026
**Maintained By**: Engineering Team
