# Build stage
FROM uselagoon/node-18-builder:latest as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install

# Final stage
FROM uselagoon/node-18:latest
WORKDIR /app
# Copy node_modules from builder stage
COPY --from=builder /app/node_modules /app/node_modules
COPY . /app/


EXPOSE 3000

CMD ["npm", "run", "build"]
CMD ["npm", "start"]
