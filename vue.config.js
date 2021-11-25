/* module.exports = {
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components',
        store: '@/store',
        router: '@/router',
        assets: '@/assets'
      }
    }
  }
} */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  lintOnSave: false,
};
