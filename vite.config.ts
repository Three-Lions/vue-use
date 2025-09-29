/*
 * @Author: lxjie 2621201615@qq.com
 * @Date: 2025-09-29 10:34:28
 * @LastEditors: lxjie 2621201615@qq.com
 * @LastEditTime: 2025-09-29 13:58:29
 * @FilePath: /vue-use/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  // 加载当前环境下的 .env 文件
  const env = loadEnv(mode, process.cwd())

  return {
    // 插件
    plugins: [vue(), vueJsx(), vueDevTools()],

    // 项目基础路径
    base: './', // 部署到子路径可修改

    // 开发服务器配置
    server: {
      port: 8000, // 开发服务器端口
      open: true, // 自动打开浏览器
      strictPort: false, // 端口被占用直接报错
      proxy: {
        '/api': {
          target: env.VITE_API_URL, // 通过环境变量配置代理地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    // 别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // 构建配置
    build: {
      outDir: 'dist', // 构建输出目录
      assetsDir: 'assets', // 静态资源输出目录
      sourcemap: false, // 是否生成 source map
      target: 'es2015', // ECMAScript 目标版本
      minify: 'terser', // 压缩方式 esbuild 或 terser
      chunkSizeWarningLimit: 500, // 设置警告阈值（kB）
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router'], // 提取核心依赖
          },
        },
      },
    },

    // 全局变量定义
    define: {
      'process.env': env, // 将环境变量注入代码中
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      // 'process.env.VITE_APP_NAME': JSON.stringify(process.env.VITE_APP_NAME),
    },

    // CSS 配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variables.scss";', // 全局 SCSS 变量
        },
      },
      modules: {
        localsConvention: 'camelCaseOnly', // CSS Modules 命名规范
      },
      postcss: './postcss.config.js',
    },

    // 优化依赖
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },

    // 自定义环境变量访问
    envPrefix: 'VITE_', // 只会注入 VITE_ 开头的环境变量
  }
})
