import pluginVue from 'eslint-plugin-vue';

export default [
  // Vue 檔案配置
  ...pluginVue.configs['flat/recommended'],

  // Vue 專案的 TS/JS 檔案配置（composables, utils 等）
  {
    files: ['**/*.ts', '**/*.js'],
    ignores: ['**/*.d.ts'], // 排除型別聲明檔案
    rules: {
      // Vue 專案通用 TS / JS 規則（必要時再加）
    }
  }
];
