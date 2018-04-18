module.exports = template => {
    template.defaults.imports.dateFormat = (mills, format) => {
        let date = new Date(mills);
        if(format === 'local') {
            return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }
        return date.toString();
    };
    template.defaults.imports.timestamp = val => val * 1000;    
};