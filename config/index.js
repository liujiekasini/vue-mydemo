module.exports = {
    //项目出口,webpack-dev-server 生成的包并没有写入硬盘,而是放在内存中！
    dev: {
        env: 'development',
        publicPath: '/',//引用资源路径
        host: 'localhost',
        port: '8080',
        assetsSubDirectory: 'static',//资源路径
        devtoolType: 'cheap-module-eval-source-map',//开发调试
        proxyTable: {}//代理
    },
    build: {
        env: 'production',
        publicPath: './',//引用资源路径
        assetsPath: 'static',//复制的静态资源路径
        assetsSubDirectory: 'static',//资源路径
        devtoolType: 'source-map',
        productionGzip: true,//是否压缩
        productionGzipExtensions: ['js', 'css']//压缩类型
    }
}