FROM swr.cn-east-3.myhuaweicloud.com/release/nginx:stable
ADD ./out/ /usr/share/nginx/html/
ENTRYPOINT ["nginx","-g","daemon off;"]
