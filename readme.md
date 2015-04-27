# 在线演示

## 开发环境
- 计算圆面积：<http://coolie-example-dev.ydr.me/views/area.html>
- 计算圆周长：<http://coolie-example-dev.ydr.me/views/length.html>


## 生产环境
- 计算圆面积：<http://coolie-example-pro.ydr.me/views/area.html>
- 计算圆周长：<http://coolie-example-pro.ydr.me/views/length.html>


# 启动方法
安装`sts`（基于 nodejs 的静态服务器）
```
npm install -g sts

# tab1（开发环境）
cd webroot-dev
sts 19091

# tab2（生产环境）
cd webroot-pro
sts 19092
```



# 使用方法
```
npm install -g coolie
coolie build webroot-dev
```

详细阅读文章：<http://frontenddev.org/article/introductory-coolie-6-coolie-example-demonstration.html>

