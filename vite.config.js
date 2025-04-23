import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080, // ローカルサーバーのポート指定
    open: true, // 開発サーバー起動時にブラウザを自動で開く
  },
  resolve: {
    alias: {
      '@': '/src', // `@` を `src` のエイリアスとして使用
    },
  },
});