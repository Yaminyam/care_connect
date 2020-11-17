var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

//환자 목록 페이지

router.get('/list', function (request, response) {
    var title = index;
    var html = template.HTML(title,
        `
        
        `
        //화면에 출력할 html body
    );
    response.send(html);
});

module.exports = router;