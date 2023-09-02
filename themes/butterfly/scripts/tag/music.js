'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)
const yaml = require('js-yaml')

const musicGroup = (arg, context) => {
    const yamlData = yaml.load(context) || {};
    const musicGroupList = yamlData.musicGroup || [];
    let result = '';
    if (!musicGroupList || musicGroupList.length <= 0) {
        return result;
    }
    for (let i = 0; i < musicGroupList.length; i++) {
        const musicGroupListElement = musicGroupList[i];
        let template = `<div class="card">
    <a href="${musicGroupListElement.hrefUrl || '#'}">
        <div class="card-image">
            <img src="${musicGroupListElement.img || ''}"
            alt="Orange" />
        </div>
        <div class="card-body">
            <div class="card-date">
                <time>
                    ${musicGroupListElement.author || ''}
                </time>
            </div>
            <div class="card-title">
                <h3>
                    ${musicGroupListElement.subTitle || ''}
                </h3>
            </div>
            <div class="card-exceprt">
                <p>
                    ${musicGroupListElement.description || ''}
                </p>
            </div>
        </div>
    </a>
</div>`
        result += template;
    }
    return `
<div style="display: flex">
${result}
</div>
`
}
hexo.extend.tag.register('musicGroup', musicGroup, {ends: true})
