# =============================================================================
# ELANSWER APPLICATION DOCKERFILE
# =============================================================================
# Multi-stage Docker build for the Elanswer React application
# Optimized for production deployment on AWS ECS Fargate
# =============================================================================

# =============================================================================
# BUILD STAGE
# =============================================================================
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies for native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# =============================================================================
# PRODUCTION STAGE
# =============================================================================
FROM nginx:1.25-alpine AS production

# Install security updates
RUN apk update && apk upgrade && apk add --no-cache \
    curl \
    ca-certificates \
    && rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S elanswer -u 1001

# Copy built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY infrastructure/docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY infrastructure/docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Create nginx cache directories
RUN mkdir -p /var/cache/nginx/client_temp \
    /var/cache/nginx/proxy_temp \
    /var/cache/nginx/fastcgi_temp \
    /var/cache/nginx/uwsgi_temp \
    /var/cache/nginx/scgi_temp && \
    chown -R elanswer:nodejs /var/cache/nginx && \
    chown -R elanswer:nodejs /usr/share/nginx/html && \
    chown -R elanswer:nodejs /var/log/nginx

# Create health check endpoint
RUN echo '{"status":"healthy","timestamp":"'$(date -Iseconds)'","service":"elanswer-web"}' > /usr/share/nginx/html/health

# Switch to non-root user
USER elanswer

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# =============================================================================
# METADATA
# =============================================================================
LABEL maintainer="Elanswer DevOps Team <devops@elanswer.com>"
LABEL version="1.0.0"
LABEL description="Elanswer AI Automation Platform - Web Application"
LABEL org.opencontainers.image.title="Elanswer Web"
LABEL org.opencontainers.image.description="Professional AI automation website built with React and TypeScript"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.vendor="Elanswer"
LABEL org.opencontainers.image.licenses="Proprietary"
LABEL org.opencontainers.image.source="https://github.com/Shreyash146/elanswer-web"
