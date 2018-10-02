module.exports = {
  title: 'Radiance',
  description: 'Vue code demo repository',
  dest: './dist',
  markdown: {
    config: md => {
      require('./markdown/vueCodeDemoBuilder')(md)
    }
  },
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Bulma', link: '/bulma/layout/level' },
    ],
    sidebar: [
      {
        title: 'Layout',
        collapsable: false,
        children: [
          '/bulma/layout/container',
          '/bulma/layout/level',
          '/bulma/layout/media-object',
          '/bulma/layout/hero',
          '/bulma/layout/section',
          '/bulma/layout/footer',
          '/bulma/layout/tiles',
        ]
      },
      {
        title: 'Form',
        collapsable: false,
        children: [
          '/bulma/form/general',
          '/bulma/form/input',
          '/bulma/form/textarea',
          '/bulma/form/select',
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
