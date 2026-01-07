#!/usr/bin/env node

/**
 * 自動更新 pnpm-workspace.yaml 中 catalog 的版本號
 * 使用 npm-check-updates 獲取最新版本並更新 YAML 文件
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ncu from 'npm-check-updates';
import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WORKSPACE_FILE = join(__dirname, '../pnpm-workspace.yaml');

async function updateCatalog() {
  try {
    console.log('📦 正在讀取 pnpm-workspace.yaml...\n');

    // 讀取 YAML 文件
    const fileContent = readFileSync(WORKSPACE_FILE, 'utf8');
    const workspaceConfig = yaml.parse(fileContent);

    if (!workspaceConfig.catalog) {
      console.log('❌ 未找到 catalog 配置');
      return;
    }

    console.log('🔍 正在檢查以下套件的最新版本：');
    Object.keys(workspaceConfig.catalog).forEach((pkg) => {
      console.log(`  - ${pkg}: ${workspaceConfig.catalog[pkg]}`);
    });
    console.log('');

    // 創建一個臨時的 package.json 格式來使用 ncu
    const tempDeps = { ...workspaceConfig.catalog };

    // 使用 ncu 檢查更新
    console.log('🚀 正在查詢最新版本...\n');
    const upgraded = await ncu.run({
      packageData: JSON.stringify({
        dependencies: tempDeps
      }),
      upgrade: true,
      jsonUpgraded: true,
      silent: true
    });

    if (!upgraded || Object.keys(upgraded).length === 0) {
      console.log('✅ 所有套件都已是最新版本！');
      return;
    }

    // 顯示更新內容
    console.log('📝 發現可更新的套件：');
    Object.entries(upgraded).forEach(([pkg, newVersion]) => {
      const oldVersion = workspaceConfig.catalog[pkg];
      console.log(`  ${pkg}: ${oldVersion} → ${newVersion}`);
      workspaceConfig.catalog[pkg] = newVersion;
    });
    console.log('');

    // 寫回 YAML 文件
    const updatedContent = yaml.stringify(workspaceConfig);
    writeFileSync(WORKSPACE_FILE, updatedContent, 'utf8');

    console.log('✅ 已成功更新 pnpm-workspace.yaml');
    console.log('\n💡 請執行以下命令來安裝更新的依賴：');
    console.log('   pnpm install');
  } catch (error) {
    console.error('❌ 更新失敗：', error.message);
    process.exit(1);
  }
}

updateCatalog();
