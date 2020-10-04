module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 共享全局样式变量
        prependData: '@import "~@/assets/css/variables.scss";'
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/boss': {
        target: 'http://eduboss.lagou.com',
        changeOrigin: true
      },
      '/front': {
        target: 'http://edufront.lagou.com',
        changeOrigin: true
      }
    }
  }
}
