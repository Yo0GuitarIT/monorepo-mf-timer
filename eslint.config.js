import baseConfig from './packages/eslint-config/base.js';
import reactConfig from './packages/eslint-config/react.js';
import vueConfig from './packages/eslint-config/vue.js';

/**
 * 為配置陣列套用特定的檔案路徑
 * @param {Array} configs - ESLint 配置陣列
 * @param {Array<string>} patterns - 檔案匹配模式
 */
const scope = (configs, patterns) =>
  configs.map((config) => ({
    ...config,
    files: patterns
  }));

export default [
  // 全局忽略型別聲明檔案
  {
    ignores: ['**/*.d.ts']
  },

  ...baseConfig,

  // React apps
  ...scope(reactConfig, ['apps/host-react/**/*.{ts,tsx}', 'apps/remote-react/**/*.{ts,tsx}']),

  // Vue app
  ...scope(vueConfig, ['apps/remote-vue/**/*.vue', 'apps/remote-vue/**/*.{ts,js}'])
];
