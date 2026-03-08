// 多语言配置
const i18n = {
    zh: {
        // 页面标题
        'page.title': '流年 - 记住每一次对话，珍藏每一段关系',
        
        // 品牌
        'brand': '流年',
        
        // 导航
        'nav.features': '功能',
        'nav.why': '为什么',
        'nav.download': '下载',
        'nav.about': '关于',
        
        // Hero
        'hero.slogan': '记住每一次对话，珍藏每一段关系',
        'hero.desc': '流年是一个长期聊天记忆系统，自动记录你的所有对话，<br>智能提取关键信息，让珍贵的记忆永不丢失。',
        'hero.download': '前往下载',
        
        // 功能特点
        'features.title': '核心功能',
        'features.autoRecord.title': '自动记录',
        'features.autoRecord.desc': '无需手动操作，所有聊天对话自动保存到本地数据库',
        'features.smartExtract.title': '智能提取',
        'features.smartExtract.desc': 'AI 自动识别人名、日期、事件等关键信息',
        'features.localStore.title': '本地存储',
        'features.localStore.desc': 'SQLite 本地数据库，数据完全由你掌控',
        'features.export.title': '一键导出',
        'features.export.desc': '支持 JSON / SQLite / Markdown 多种格式导出',
        'features.privacy.title': '隐私保护',
        'features.privacy.desc': '本地优先，不上传云端，保护你的隐私安全',
        
        // 为什么选择流年
        'why.title': '为什么选择流年？',
        'why.liunian': '✅ 流年',
        'why.liunian.local': '本地优先，数据在你手中',
        'why.liunian.privacy': '隐私保护，不上传云端',
        'why.liunian.simple': '极简设计，专注核心功能',
        'why.liunian.ready': '开箱即用，无需配置',
        'why.others': '❌ 其他工具',
        'why.others.cloud': '云端存储，数据不在你手中',
        'why.others.risk': '需要上传，隐私风险',
        'why.others.complex': '功能复杂，学习成本高',
        'why.others.subscription': '订阅付费，持续成本',
        
        // 下载
        'download.title': '立即下载',
        'download.desc': '选择适合你系统的版本，开始记录珍贵的对话',
        'download.goto': '前往 GitHub 下载',
        'download.version': '当前版本：v0.1',
        
        // 关于
        'about.title': '关于流年',
        'about.why.title': '为什么做流年？',
        'about.why.desc1': '在数字化时代，我们每天都在产生大量的对话数据。但大多数聊天工具只保留短期记忆，重要的对话和珍贵的时刻很容易丢失。',
        'about.why.desc2': '流年希望解决这个问题——它像一个永不遗忘的朋友，帮你记住每一次对话，珍藏每一段关系。所有数据都在你本地，隐私得到完全保护。',
        'about.contact': '联系方式',
        
        // 页脚
        'footer.copyright': '© 2026 流年（Liunian）. 用 ❤️ 制作',
        'footer.madeWith': '用 ❤️ 制作'
    },
    
    en: {
        // Page Title
        'page.title': 'Liunian - Remember Every Conversation, Cherish Every Relationship',
        
        // Brand
        'brand': 'Liunian',
        
        // Navigation
        'nav.features': 'Features',
        'nav.why': 'Why',
        'nav.download': 'Download',
        'nav.about': 'About',
        
        // Hero
        'hero.slogan': 'Remember Every Conversation, Cherish Every Relationship',
        'hero.desc': 'Liunian is a long-term chat memory system that automatically records all your conversations,<br>intelligently extracts key information, and keeps precious memories forever.',
        'hero.download': 'Go to Download',
        
        // Features
        'features.title': 'Core Features',
        'features.autoRecord.title': 'Auto Record',
        'features.autoRecord.desc': 'All chat conversations are automatically saved to local database without manual operation',
        'features.smartExtract.title': 'Smart Extraction',
        'features.smartExtract.desc': 'AI automatically identifies key information like names, dates, and events',
        'features.localStore.title': 'Local Storage',
        'features.localStore.desc': 'SQLite local database, your data is completely under your control',
        'features.export.title': 'One-Click Export',
        'features.export.desc': 'Support multiple export formats: JSON / SQLite / Markdown',
        'features.privacy.title': 'Privacy Protection',
        'features.privacy.desc': 'Local first, no cloud upload, protect your privacy',
        
        // Why
        'why.title': 'Why Choose Liunian?',
        'why.liunian': '✅ Liunian',
        'why.liunian.local': 'Local first, data in your hands',
        'why.liunian.privacy': 'Privacy protection, no cloud upload',
        'why.liunian.simple': 'Minimalist design, focus on core features',
        'why.liunian.ready': 'Ready to use, no configuration needed',
        'why.others': '❌ Other Tools',
        'why.others.cloud': 'Cloud storage, data not in your hands',
        'why.others.risk': 'Need upload, privacy risk',
        'why.others.complex': 'Complex features, high learning cost',
        'why.others.subscription': 'Subscription required, ongoing cost',
        
        // Download
        'download.title': 'Download Now',
        'download.desc': 'Choose the version for your system and start recording precious conversations',
        'download.goto': 'Go to GitHub to Download',
        'download.version': 'Current Version: v0.1',
        
        // About
        'about.title': 'About Liunian',
        'about.why.title': 'Why Make Liunian?',
        'about.why.desc1': 'In the digital age, we generate massive amounts of conversation data every day. But most chat tools only keep short-term memory, and important conversations and precious moments are easily lost.',
        'about.why.desc2': 'Liunian hopes to solve this problem - it\'s like a friend who never forgets, helping you remember every conversation and cherish every relationship. All data is stored locally, and your privacy is completely protected.',
        'about.contact': 'Contact',
        
        // Footer
        'footer.copyright': '© 2026 Liunian. Made with ❤️',
        'footer.madeWith': 'Made with ❤️'
    }
};

// 当前语言
let currentLang = 'zh';

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
    
    // 更新按钮文本
    const langSwitch = document.getElementById('langSwitch');
    langSwitch.textContent = currentLang === 'zh' ? 'EN' : '中文';
    
    // 保存到 localStorage
    localStorage.setItem('liunian-lang', currentLang);
}

// 更新页面语言
function updateLanguage() {
    // 更新所有带 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.innerHTML = i18n[currentLang][key];
        }
    });
    
    // 更新页面标题
    document.title = i18n[currentLang]['page.title'];
    
    // 更新 HTML lang 属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 从 localStorage 读取语言设置
    const savedLang = localStorage.getItem('liunian-lang');
    if (savedLang) {
        currentLang = savedLang;
        const langSwitch = document.getElementById('langSwitch');
        langSwitch.textContent = currentLang === 'zh' ? 'EN' : '中文';
        updateLanguage();
    }
    
    // 绑定切换按钮
    document.getElementById('langSwitch').addEventListener('click', toggleLanguage);
});
