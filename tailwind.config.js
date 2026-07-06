/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      // 乐龄智家适老化配色方案
      colors: {
        // 主色系 - 温暖橙色
        primary: {
          DEFAULT: "#FF9F43",
          50: "#FFF9ED",
          100: "#FFECDB",
          200: "#FFD7B7",
          300: "#FFBC93",
          400: "#FFA16F",
          500: "#FF9F43", // 主色
          600: "#E58A2E",
          700: "#CC7519",
          800: "#B36004",
          900: "#9A4B00",
        },
        // 辅色系 - 深蓝稳重
        secondary: {
          DEFAULT: "#2C3E50",
          50: "#5A7A9E",
          100: "#4F6F93",
          200: "#446488",
          300: "#39597D",
          400: "#2E4E72",
          500: "#2C3E50", // 辅色
          600: "#223340",
          700: "#182830",
          800: "#0E1D20",
          900: "#041210",
        },
        // 成功色 - 健康/完成状态
        success: {
          DEFAULT: "#27AE60",
          light: "#2ECC71",
        },
        // 警告色 - 异常预警/紧急状态
        danger: {
          DEFAULT: "#E74C3C",
          light: "#E67E22",
        },
        // 背景色系
        background: {
          DEFAULT: "#FFFFFF",
          card: "#F8F9FA",
          hover: "#F1F3F5",
        },
      },
      // 适老化字体方案
      fontFamily: {
        // 思源黑体 CDN 加载
        sans: [
          "Source Han Sans CN",
          "Noto Sans CJK SC",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      // 适老化字体尺寸（比常规APP大50%）
      fontSize: {
        // 辅助文字（20-24px）
        "helper-xs": ["20px", "28px"],
        "helper-sm": ["22px", "30px"],
        // 正文（24-28px）
        "text-xs": ["24px", "36px"],
        "text-sm": ["26px", "38px"],
        "text-base": ["28px", "40px"],
        "text-lg": ["32px", "44px"],
        // 标题（36-48px）
        "title-sm": ["36px", "48px"],
        "title-base": ["40px", "52px"],
        "title-lg": ["44px", "56px"],
        "title-xl": ["48px", "60px"],
      },
      // 大圆角设计
      borderRadius: {
        "button": "24px",
        "card": "16px",
        "large": "32px",
      },
      // 大间距设计
      spacing: {
        "card-gap": "32px",
        "section-gap": "48px",
        "page-padding": "64px",
      },
      // 按钮尺寸
      minHeight: {
        "button": "48px",
        "button-lg": "64px",
      },
      minWidth: {
        "button": "120px",
        "button-lg": "180px",
      },
      // 图标尺寸
      width: {
        "icon-sm": "48px",
        "icon": "64px",
        "icon-lg": "80px",
        "icon-xl": "120px",
      },
      height: {
        "icon-sm": "48px",
        "icon": "64px",
        "icon-lg": "80px",
        "icon-xl": "120px",
      },
    },
  },
  plugins: [],
};
