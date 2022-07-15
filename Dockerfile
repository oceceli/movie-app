FROM alpine:3.16 as builder
WORKDIR /app
COPY . .
RUN apk add npm && npm install
RUN npm run build


FROM alpine:3.16
WORKDIR /app
RUN apk add npm
COPY --from=builder /app/.output .

CMD [ "node", "server/index.mjs" ]