(function () {
    requirejs.config({
        baseUrl: 'js',// 基本路径
        // 配置路径, 注意当前的键名 要和下面 require 里面的依赖名保持一致
        paths: {
            dataService: './modules/dataService',
            alerter: './modules/alerter'
        }
    })

    require(['alerter'], function (alerter) {
        console.log(alerter);
        alerter.showMsg();
    })
})()