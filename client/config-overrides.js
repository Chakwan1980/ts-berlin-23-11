const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({
        test: /\.hbs$/,
        loader: 'handlebars-loader'
    })
);
