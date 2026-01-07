# @monorepo-mf-timer/eslint-config

共享的 ESLint 配置包

## 使用方式

### Base 配置（所有專案）

```javascript
import baseConfig from '@monorepo-mf-timer/eslint-config/base';

export default [...baseConfig];
```

### React 專案

```javascript
import baseConfig from '@monorepo-mf-timer/eslint-config/base';
import reactConfig from '@monorepo-mf-timer/eslint-config/react';

export default [...baseConfig, ...reactConfig];
```

### Vue 專案

```javascript
import baseConfig from '@monorepo-mf-timer/eslint-config/base';
import vueConfig from '@monorepo-mf-timer/eslint-config/vue';

export default [...baseConfig, ...vueConfig];
```

## 配置說明

- **base.js**: 基礎配置，包含 JavaScript、TypeScript、Node.js 腳本支援
- **react.js**: React 專案配置，包含 React 和 Hooks 規則
- **vue.js**: Vue 3 專案配置

## 未來擴展

可以根據需求新增更多配置：

- `node.js` - Node.js 後端專案
- `test.js` - 測試檔案配置
- `strict.js` - 嚴格模式配置
