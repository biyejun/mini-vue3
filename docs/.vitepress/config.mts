import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'mini-vue3',
  description: '学习vue3',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/min-vue3.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Examples',
        activeMatch: '/test/',
        link: '/test/markdown-examples',
      },
      { text: '笔记', activeMatch: '/study/', link: '/study/test' },
    ],
    sidebar: {
      '/test/': {
        base: '/test/',
        items: [
          {
            text: 'hhhh',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: 'markdown-examples' },
              { text: 'Runtime API Examples', link: 'api-examples' },
            ],
          },
        ],
      },
      '/study/': {
        base: '/study/',
        items: [{ text: '测试', link: 'test' }],
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/biyejun/mini-vue3' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present biyejun',
    },

    search: {
      provider: 'local',
    },
  },
});
