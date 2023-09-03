'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)
const yaml = require('js-yaml')

const aboutMe = (arg, context,xxx) => {
    return context
}
hexo.extend.tag.register('aboutMe', aboutMe, {ends: true})
