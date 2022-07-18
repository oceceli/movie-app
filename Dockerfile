FROM alpine:3.16 as builder
WORKDIR /app
COPY . .

# API TOKEN
ENV API_TOKEN=ENTER_YOUR_API_TOKEN_HERE

# install & build
RUN apk add npm && npm install && npm run build


FROM alpine:3.16
WORKDIR /app
RUN apk add npm
COPY --from=builder /app/.output .

CMD [ "node", "server/index.mjs" ]