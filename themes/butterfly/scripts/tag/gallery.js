/**
 * Butterfly
 * galleryGroup and gallery
 * {% galleryGroup [name] [descr] [url] [img] %}
 *
 * {% gallery [button],%}
 * {% gallery url,[url],[button]%}
 */

'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)
const yaml = require('js-yaml')

const gallery = (args, content) => {
    args = args.join(' ').split(',')
    let button = false
    let type = 'data'
    let dataStr = ''

    if (args[0] === 'url') {
        [type, dataStr, button] = args // url,[link],[lazyload]
    } else {
        [button] = args // [lazyload]
        const regex = /!\[(.*?)\]\(([^\s]*)\s*(?:["'](.*?)["']?)?\s*\)/g
        let m
        const arr = []
        while ((m = regex.exec(content)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++
            }
            arr.push({
                url: m[2],
                alt: m[1],
                title: m[3]
            })
        }

        dataStr = JSON.stringify(arr)
    }

    return `<div class="gallery-container" data-type="${type}" data-button="${button}">
      <div class="gallery-data">${dataStr}</div>
      <div class="gallery-items">
      </div>
    </div>`
}

const galleryGroup = (rgs, content) => {
    let result='';
    var yamlData = yaml.load(content) || {};
    var galleryList = yamlData.galleryList || [];
    for (let i = 0; i < galleryList.length; i++) {
        const galleryListElement = galleryList[i] || {};
        const galleryGroupList = galleryListElement.galleryGroup || [];
        let galleryGroupListElementHtml = ''
        for (let j = 0; j < galleryGroupList.length; j++) {
            const galleryGroupListElement = galleryGroupList[j];
            const imgUrl = urlFor(galleryGroupListElement.img)
            const urlLink = urlFor(galleryGroupListElement.url)
            galleryGroupListElementHtml += `<figure class="gallery-group">
                  <img class="gallery-group-img no-lightbox" src='${imgUrl}' alt="Group Image Gallery">
                  <figcaption>
                  <div class="gallery-group-name">${galleryGroupListElement.name}</div>
                  <p>${galleryGroupListElement.descr}</p>
                  <a href='${urlLink}'></a>
                  </figcaption>
                  </figure>
                  `
        }
        result +=`<div><span>${galleryListElement.date}：</span><span>${galleryListElement.title}</><div>${galleryGroupListElementHtml}</div></div>`
    }
    return result
}

hexo.extend.tag.register('gallery', gallery, {ends: true})
hexo.extend.tag.register('galleryGroup', galleryGroup, {ends: true})
