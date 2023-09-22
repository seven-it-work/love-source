'use strict'
// 全局声明插件代号
const pluginname = 'butterfly_corgi_card'
// 全局声明依赖
const pug = require('pug')
const path = require('path')
const urlFor = require('hexo-util').url_for.bind(hexo)
const util = require('hexo-util')

hexo.extend.filter.register('after_generate', function (locals) {
        // 首先获取整体的配置项名称
        const config = hexo.config.corgi_card ? hexo.config.corgi_card : hexo.theme.config.corgi_card
        // 集体声明配置项
        const data = {}
        // 渲染页面
        const temple_html_text = pug.renderFile(path.join(__dirname, '../layout/corgi_card.pug'), data)
        //cdn资源声明
        //样式资源
        const css_text = `<link rel="stylesheet" href="https://seven-it-work.github.io/love/css/corgi_card.css" />`
        //脚本资源
        const js_text = ``
        // 挂载的位置
        let get_layout = `document.getElementsByClassName('sticky_layout')[0]`
        //注入容器声明
        //挂载容器脚本
        var user_info_js = `<script data-pjax>
          function ${pluginname}_injector_config(){
            var parent_div_git = ${get_layout};
            var item_html = '${temple_html_text}';
            console.log('已挂载${pluginname}')
            parent_div_git.insertAdjacentHTML("afterbegin",item_html)
            }
            ${pluginname}_injector_config();
        </script>`
        // 注入用户脚本
        // 此处利用挂载容器实现了二级注入
        hexo.extend.injector.register('body_end', user_info_js, "default");
        // 注入样式资源
        hexo.extend.injector.register('body_end', js_text, "default");
        // 注入脚本资源
        hexo.extend.injector.register('head_end', css_text, "default");
    },
)
