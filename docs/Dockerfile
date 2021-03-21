FROM node:lts-slim as builder
MAINTAINER Qinmei

WORKDIR /app
RUN ls
COPY . .
RUN yarn && yarn build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
