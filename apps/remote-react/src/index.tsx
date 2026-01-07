import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import App from './App';

let root: Root | null = null;

/**
 * @description 產生一個可以掛載 React 應用程式的函式
 * @param {HTMLElement} element - 要掛載 React 應用程式的 HTML 元素
 * @return {void}
 */
export const mount = (element: HTMLElement) => {
  root = createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// 開發環境下，直接掛載到本地的 #root 元素
if (import.meta.env.DEV) {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot);
  }
}
