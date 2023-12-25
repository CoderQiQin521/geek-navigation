FROM node:16.20.2
# 设置工作目录
WORKDIR /app

# 拷贝 所有文件 到app, 排除 node_modules
COPY . .

# 安装依赖 & 打包
RUN yarn


# 暴漏端口
EXPOSE 3000

#  启动
CMD npm run start
