// 样式调整
'use strict';
const { filter } = hexo.extend;
const cheerio = require('cheerio');

// 引入obs库
// 使用npm安装
var ObsClient = require('esdk-obs-nodejs');
// 使用源码安装

// 创建ObsClient实例
var obsClient = new ObsClient({
    access_key_id: 'OJNVW01EUD9IXF5FCKVX',
    secret_access_key: 'ZwR9GEVtSfJUwwjWmFBdvcegPpxKgJruvysku5M7',
    server : 'https://seven01.obs.cn-east-3.myhuaweicloud.com'
});
// 使用访问OBS
try {
    console.log(11111)
    obsClient.getObject({
        Bucket : 'seven01',
        Key : 't.json'
    }, (err, result) => {
        if(err){
            console.log('Error-->' + err);
        }else{
            console.log('Status-->' + result.CommonMsg.Status);
            if(result.CommonMsg.Status < 300 && result.InterfaceResult){
                console.log(result.InterfaceResult.Content.toString());
            }
        }
    });
}catch (e){
    console.log(e)
}
console.log(2222)

// 关闭obsClient
obsClient.close();

/**
 * 在页面插入新顶部图
 * @param {cheerio.Root} $ Root
 */
function insertTopImg($) {
    const header = $('#page-header');
    if (header.length === 0) return;
    const background = header.css('background-image');
    if (!background) return;
    $('#post, #page, #archive, #tag, #category').prepend(`<div class="top-img" style="background-image: ${background};"></div>`);
}

// 修改 HTML
filter.register('after_render:html', (str, data) => {
    const $ = cheerio.load(str, {
        decodeEntities: false
    });
    // 加入顶层图片
    // insertTopImg($);
    return $.html();
});
