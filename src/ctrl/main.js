'use strict'
var React = require("react");
var User = React.createFactory(require("../../public/index/index.jsx"));

let index = function(req, res) {
    var markup = React.renderToString(User());
    res.render("index", {
        //base:'view/index.html',
        //isNonStatic:false,
        //tags: 'content',
        content: markup
    });
};


module.exports = {
    index
};
