# syntax=docker/dockerfile:experimental

# build in node
FROM node:14.15.1 AS builder

ARG NODE_ENV
ARG BUILD_ENV
ARG BAIDU_CLOUD_AK
ARG BAIDU_CLOUD_SK
ARG PUBLIC_URL

ENV NODE_ENV=${NODE_ENV}
ENV BUILD_ENV=${BUILD_ENV}
ENV BAIDU_CLOUD_AK=${BAIDU_CLOUD_AK}
ENV BAIDU_CLOUD_SK=${BAIDU_CLOUD_SK}
ENV PUBLIC_URL=${PUBLIC_URL}

WORKDIR /app

COPY package.json yarn.lock .yarnrc .
RUN --mount=type=cache,id=yarn-cache-v6,target=/usr/local/share/.cache/yarn/v6 \
    --mount=type=cache,id=panthera-cheetah-node-modules-2,sharing=locked,target=node_modules \
    # 检查 yarn 缓存目录是否匹配
    [ "$(yarn cache dir)" != '/usr/local/share/.cache/yarn/v6' ] && \
    echo "yarn cache dir not matched: $(yarn cache dir)" && exit 1 || \
    # 调试用。
    echo 'ls /usr/local/share/.cache/yarn/v6'; \
    ls /usr/local/share/.cache/yarn/v6 | wc -l | awk '{print "  "$1" items"}'; \
    echo 'node_modules cache id: panthera-cheetah-node-modules'; \
    echo 'ls node_modules'; ls node_modules | wc -l | awk '{print "  "$1" items"}'; \
    # 由于 .yarnrc 的设置，这里相当于 `yarn install --frozen-lockfile`。
    yarn install --production=true

COPY . .
RUN --mount=type=cache,id=panthera-cheetah-node-modules-2,sharing=locked,target=node_modules \
    yarn run build:h5 && \
    yarn run deploy


# host in nginx
FROM nginx:mainline-alpine

COPY --from=builder /app/dist/index.html /usr/share/nginx/html/index.html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
