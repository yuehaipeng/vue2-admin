module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 192,
                        propList: ['*']
                    })
                ]
            }
        }
    }
}