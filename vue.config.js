module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views'
			}
		}
	},
	  devServer: {
	    host:'0.0.0.0',
    // 项目运行时候的端口号
      port: 8887,
      disableHostCheck: true
  }
}