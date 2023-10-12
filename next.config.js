/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    return {
      ...config,
      devServer: {
        hot:true, // 它是热更新：只更新改变的组件或者模块，不会整体刷新页面
        proxy: { // 配置代理（只在本地开发有效，上线无效）
          '/api': {
            target: 'http://192.168.3.64:8092', // 这是本地用node写的一个服务，用webpack-dev-server起的服务默认端口是8080
            pathRewrite: {"/api" : ""}, // 后台在转接的时候url中是没有 /api 的
            changeOrigin: true, // 加了这个属性，那后端收到的请求头中的host是目标地址 target
          },
        } 
      }
    }
  }
}

module.exports = nextConfig
