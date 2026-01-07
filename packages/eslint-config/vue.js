import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
  // Vue 檔案配置
  ...pluginVue.configs['flat/recommended'],

  // Vue 專案的 JS/TS 檔案配置
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      vue: pluginVue
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  }
];
