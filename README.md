# FPV 穿越机分享 - Presentation

一个基于 HTML/TypeScript 的演示文稿项目，用于团队分享关于 FPV 穿越机的内容。

## 🚁 项目特色

- **现代化设计**：使用渐变背景和毛玻璃效果
- **流畅动画**：幻灯片切换带有平滑过渡动画
- **键盘导航**：支持方向键、空格键、Home/End 键导航
- **响应式设计**：适配不同屏幕尺寸
- **TypeScript 支持**：类型安全的脚本开发
- **进度指示**：顶部进度条和底部页码显示

## 🛠️ 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 编译 TypeScript
```bash
npm run build
```

### 3. 启动开发服务器
```bash
npm start
```

或者分别运行：
```bash
npm run dev    # 监听 TypeScript 文件变化
npm run serve  # 启动 HTTP 服务器
```

## 📁 项目结构

```
team-share/
├── src/                # TypeScript 源文件
│   └── main.ts         # 主要的演示控制逻辑
├── styles/             # 样式文件
│   └── main.css        # 主样式表
├── dist/               # 编译后的 JS 文件（自动生成）
├── index.html          # 主页面
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
└── README.md          # 项目说明
```

## ⌨️ 操作说明

- **前进**：右箭头 →、下箭头 ↓、空格键
- **后退**：左箭头 ←、上箭头 ↑
- **首页**：Home 键
- **末页**：End 键
- **点击导航按钮**：屏幕底部的前进/后退按钮

## 🎨 自定义内容

### 添加新幻灯片

在 `index.html` 中的 `.presentation-container` 内添加新的 `.slide` 元素：

```html
<div class="slide" id="slide-4">
    <div class="slide-content">
        <h1>你的标题</h1>
        <p>你的内容</p>
    </div>
</div>
```

### 修改样式

编辑 `styles/main.css` 来自定义：
- 背景渐变色
- 字体大小和颜色
- 动画效果
- 响应式断点

### 扩展功能

在 `src/main.ts` 中可以添加：
- 更多交互功能
- 自定义动画
- 数据可视化
- 音频/视频支持

## 📝 待办事项

- [ ] 添加更多 FPV 相关内容
- [ ] 集成图片和视频
- [ ] 添加音频支持
- [ ] 实现幻灯片动画特效
- [ ] 添加主题切换功能

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

祝你的 FPV 穿越机分享演讲成功！🎉