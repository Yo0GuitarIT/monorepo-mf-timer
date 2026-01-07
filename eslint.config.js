import baseConfig from './packages/eslint-config/base.js';
import reactConfig from './packages/eslint-config/react.js';
import vueConfig from './packages/eslint-config/vue.js';

export default [
  ...baseConfig,

  // React 專案 (host-react, remote-react)
  {
    files: ['apps/host-react/**/*.{ts,tsx}', 'apps/remote-react/**/*.{ts,tsx}'],
    ...reactConfig[0]
  },

  // Vue 專案 (remote-vue)
  ...vueConfig.map((config) => ({
    ...config,
    files: config.files?.map((pattern) => pattern.replace('**/', 'apps/remote-vue/**/')) || [
      'apps/remote-vue/**/*.vue',
      'apps/remote-vue/**/*.{js,ts}'
    ]
  }))
];
