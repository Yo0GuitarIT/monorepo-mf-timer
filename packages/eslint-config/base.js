import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 全域忽略檔案
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.rsbuild/**',
      '**/pnpm-lock.yaml',
      '**/.DS_Store',
      '**/*.log',
      '**/.rspack-profile-*/**',
      '**/*.local',
      '**/.cache/**',
      '**/.temp/**'
    ]
  },

  // 基礎 JavaScript 配置
  js.configs.recommended,

  // Node.js 腳本配置
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'writable'
      },
      sourceType: 'module'
    }
  },

  // TypeScript 檔案配置
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx', '**/*.vue']
  })),

  // Prettier 整合（必須放最後）
  eslintConfigPrettier
];
