'use strict'
let template = require('art-template');

// 注册 过滤器
require('./filter')(template);

console.log(__dirname);

const log = (tpl = '', len = 20) => {
    console.log('-----------');
    if (typeof tpl !== 'string') {
        tpl = tpl.toString();
    }
    len ? console.log(tpl.slice(0, len)) : console.log(tpl);
};

/**
    // 基于模板名渲染模板
    template(filename, data);

    // 将模板源代码编译成函数
    template.compile(source, options);

    // 将模板源代码编译成函数并立刻执行
    template.render(source, data, options);
 */
const $data = {
    name: '<p>tian</p>',
    bool: false,
    bool2: false,
    list: [{name: '001'}, {name: '002'}],
    timeMills: 10
};
log(
    template(`${__dirname}/view1-simple.art`, $data),
    false
);

// log(
//     template.compile(`hi, {{name}}`, {})({name: 'tian'})
// );

// log(
//     template.render(`hi, {{name}}`, {name: 'tian'}, {})
// );
