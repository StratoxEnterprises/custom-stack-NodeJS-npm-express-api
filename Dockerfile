FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy contents of repository
COPY . .

# Install app dependencies
RUN npm ci --only=production

EXPOSE 80
ENV PORT=80

CMD [ "node", "-r", "dotenv/config", ".", "dotenv_config_path=./codenow/config/.env", "dotenv_config_debug=true"]

