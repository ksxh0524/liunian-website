# 流年官网部署文档

## 🎯 部署到 GitHub Pages

### 前置要求
- GitHub 账户
- Git 已安装
- SSH 密钥已配置（推荐）或 Personal Access Token

---

## 步骤 1: 配置 GitHub 认证

### 方法 A: 使用 SSH（推荐）

1. **检查 SSH 密钥**
   ```bash
   ls -la ~/.ssh/id_*.pub
   ```

2. **如果没有密钥，创建新的**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. **复制公钥**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

4. **添加到 GitHub**
   - 访问 https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴公钥内容
   - 保存

5. **测试连接**
   ```bash
   ssh -T git@github.com
   ```

### 方法 B: 使用 Personal Access Token

1. **创建 Token**
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并保存 token

2. **配置 Git**
   ```bash
   git config --global credential.helper store
   ```

---

## 步骤 2: 创建 GitHub 仓库

### 选项 A: 使用 gh CLI（推荐）

```bash
# 登录 GitHub
gh auth login

# 创建仓库
cd ~/codes/liunian-website
gh repo create liunian-website --public --source=. --push
```

### 选项 B: 手动创建

1. **在 GitHub 上创建仓库**
   - 访问 https://github.com/new
   - 仓库名: `liunian-website`
   - 设为 Public
   - 不要初始化 README
   - 点击 "Create repository"

2. **推送代码**
   ```bash
   cd ~/codes/liunian-website
   
   # 初始化 Git（如果还没有）
   git init
   
   # 添加远程仓库
   git remote add origin git@github.com:YOUR_USERNAME/liunian-website.git
   # 或使用 HTTPS
   git remote add origin https://github.com/YOUR_USERNAME/liunian-website.git
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit: 流年官网"
   
   # 推送到 GitHub
   git branch -M main
   git push -u origin main
   ```

---

## 步骤 3: 启用 GitHub Pages

1. **访问仓库设置**
   - 打开 https://github.com/YOUR_USERNAME/liunian-website/settings/pages

2. **配置 Pages**
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
   - 点击 "Save"

3. **等待部署**
   - 通常需要 1-3 分钟
   - 可以在 Actions 标签页查看部署进度

4. **访问网站**
   - 地址: https://YOUR_USERNAME.github.io/liunian-website/

---

## 步骤 4: 配置自定义域名（可选）

### 添加 CNAME 文件

```bash
echo "your-domain.com" > ~/codes/liunian-website/CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 配置 DNS

在域名服务商处添加 CNAME 记录：
- 类型: CNAME
- 名称: www（或 @）
- 值: YOUR_USERNAME.github.io

### 在 GitHub 设置

1. 访问 Settings > Pages
2. 在 "Custom domain" 输入你的域名
3. 勾选 "Enforce HTTPS"

---

## 自动化部署脚本

项目已包含 `deploy.sh` 脚本，使用方法：

```bash
cd ~/codes/liunian-website
./deploy.sh
```

---

## 更新网站

以后修改网站后，只需：

```bash
cd ~/codes/liunian-website
git add .
git commit -m "Update: 描述你的修改"
git push
```

GitHub Pages 会自动重新部署。

---

## 故障排查

### 问题: 页面显示 404
- 检查仓库名称是否正确
- 确认 GitHub Pages 已启用
- 等待几分钟让部署完成

### 问题: 样式或脚本不加载
- 检查文件路径是否使用相对路径
- 查看浏览器控制台错误

### 问题: 自定义域名不工作
- 检查 DNS 配置是否生效（可能需要等待 DNS 传播）
- 确认 CNAME 文件内容正确

---

## 联系信息

如有问题，请检查：
- GitHub Pages 文档: https://docs.github.com/en/pages
- GitHub Status: https://www.githubstatus.com/

---

**部署完成后，网站地址**: https://YOUR_USERNAME.github.io/liunian-website/

**记得替换 `YOUR_USERNAME` 为你的 GitHub 用户名！**
