// 读取md中的html进行渲染
'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)
const yaml = require('js-yaml')

const aboutMe = (arg, context) => {
    return context
}
hexo.extend.tag.register('mdHtml', aboutMe, {ends: true})
