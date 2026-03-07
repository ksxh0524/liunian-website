#!/bin/bash
# 流年官网一键部署到 Cloudflare Pages

set -e

echo "🚀 流年官网部署脚本"
echo "===================="

# 检查 wrangler
if ! command -v wrangler &> /dev/null; then
    echo "📦 安装 wrangler..."
    npm install -g wrangler
fi

# 检查是否已登录
if ! wrangler whoami &> /dev/null; then
    echo ""
    echo "⚠️  需要登录 Cloudflare"
    echo "浏览器会自动打开，请完成授权"
    echo ""
    wrangler login
fi

# 部署
echo ""
echo "📤 上传网站文件到 Cloudflare Pages..."
cd "$(dirname "$0")"
wrangler pages deploy . --project-name=liunian --branch=main

echo ""
echo "✅ 部署完成！"
echo "🌐 访问地址：https://liunian.pages.dev"
