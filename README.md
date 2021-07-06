## grafana-7.3.2-cn
grafana7.3.2汉化版

###准备工作
####后端
注意：通过 go.mod 文件来判断的当前 grafana用的是哪个版本的go，7.3.2使用的go为1.15.
需要mingw-w64-install，安装GCC
参考文档：https://www.cnblogs.com/ggg-327931457/p/9694516.html

go run build.go setup
go run build.go build

编译成功之后会在当前的目录下 $GOPATH\src\github.com\grafana\grafana 会生成 bin 文件夹,下面有 window_amd64 文件夹,下面有以下几个文件


####前端

下载nvm
https://github.com/coreybutler/nvm-windows/releases
安装nvm，安装好后管理及安装node版本
1、查看本地安装的所有版本；有可选参数available，显示所有可下载的版本。
nvm list [available]

2、安装，命令中的版本号可自定义
nvm install 11.13.0

3、使用特定版本
nvm use 11.13.0

4、安装node-gyp 前端编译工具   
npm install -g node-gyp

5、安装yarn
npm install -g yarn

6、安装依赖
yarn install --pure-lockfile


####打包
go run build.go package   会根据你当前的系统环境打包成相应的二进制包，windows上不能打包linux的，因为无法安装打包工具fpm。


#####linux打包需要安装fpm和rpm-build
yum install centos-release-scl-rh　
CentOS-SCLo-scl-rh.repo源
yum install rh-ruby23  -y　　　　//直接yum安装即可　　
scl  enable  rh-ruby23 bash　　　　//必要一步
ruby -v　　　　//查看安装版本
gem  install fpm
yum install rpm-build -y