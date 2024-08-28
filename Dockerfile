FROM node:lts AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:lts AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80