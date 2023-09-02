/**
 * timeline
 * by Jerry
 */

'use strict'

const timeLineFn = (args, content) => {
    const yaml = require('js-yaml');
    let contextJson = yaml.load(content) || {}
    let articleList = contextJson.timeLineData || []
    let result = ''
    let text = ''
    let color = ''
    if (args.length) {
        [text, color] = args.join(' ').split(',')
        const mdContent = hexo.render.renderSync({text, engine: 'markdown'})
        result += `<div class='timeline-item headline'><div class='timeline-item-title'><div class='item-circle'>${mdContent}</div></div></div>`
    }
    for (let articleListKey in articleList) {
        var articleListElement = articleList[articleListKey] || {};
        console.log(articleListElement)
        const tlChildTitle = hexo.render.renderSync({text: articleListElement.date, engine: 'markdown'})
        let tlChildContent = hexo.render.renderSync({text: articleListElement.title, engine: 'markdown'})
        let tlTitleHtml = `<div class='timeline-item-title'><div class='item-circle'>${tlChildTitle}</div></div>`
        if (articleListElement.img){
            tlChildContent=`<img style="flex: 1;max-width: 250px;height: auto;padding-right: 10px;margin: 0" src="${articleListElement.img}"/><p style="flex: 1">${tlChildContent}</p>`
        }
        const tlContentHtml = `<div class='timeline-item-content'>${tlChildContent}</div>`
        result += `<div class='timeline-item'>${tlTitleHtml + tlContentHtml}</div>`
    }
    return `<div class="timeline ">${result}</div>`
}

hexo.extend.tag.register('timeline', timeLineFn, {ends: true})
