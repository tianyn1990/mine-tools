'use strict'
let template = require('art-template');
// 注册 过滤器
require('./filter')(template);

const log = (tpl = '', len = 20) => {
    console.log('-----------');
    if (typeof tpl !== 'string') {
        tpl = tpl.toString();
    }
    len ? console.log(tpl.slice(0, len)) : console.log(tpl);
};

/**
    继承模板
 */
const $data = {
    simpleData: {
        name: '<p>tian</p>',
        bool: false,
        bool2: false,
        list: [{name: '001'}, {name: '002'}],
        timeMills: 10
    }
};
log(
    template(`${__dirname}/view2-extend.art`, $data),
    false
);
