FROM swr.cn-east-3.myhuaweicloud.com/release/nginx:stable
ADD ./shuopan-app/ /usr/share/nginx/html/
ENTRYPOINT ["nginx","-g","daemon off;"]
