import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginVue from 'eslint-plugin-vue';
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

  // React 專案配置 (host-react, remote-react)
  {
    files: ['apps/host-react/**/*.{ts,tsx}', 'apps/remote-react/**/*.{ts,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },

  // Vue 專案配置 (remote-vue)
  ...pluginVue.configs['flat/recommended'].map((config) => ({
    ...config,
    files: ['apps/remote-vue/**/*.vue']
  })),
  {
    files: ['apps/remote-vue/**/*.{js,ts}'],
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
  },

  // Prettier 整合（必須放最後）
  eslintConfigPrettier
];
