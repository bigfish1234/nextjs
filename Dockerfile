# FROM swr.cn-east-3.myhuaweicloud.com/release/nginx:stable
# ADD ./out/ /usr/share/nginx/html/
# ENTRYPOINT ["nginx","-g","daemon off;"]

FROM node:16.20.2

WORKDIR /shuopan
COPY . .
RUN ls -a
CMD ["yarn", "start"]