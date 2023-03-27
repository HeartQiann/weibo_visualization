const webpack = require("webpack");

module.exports = {
    lintOnSave:false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                "window.$": "jquery",
                Popper: ["popper.js", "default"]
            })
        ]
    },
    //代理服务器解决跨域问题
    devServer: {
        proxy: {
        //当前端请求路径中出现/api时 代理服务器开始工作 找http://gmall-h5-api.atguigu.cn服务器要数据
        //服务器与服务器之间没有跨域问题
        '/api': {
            target: 'http://localhost:8000',
            // pathRewrite: { '^/api': '' },

        },
        },
    },
};
