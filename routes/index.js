var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

//간호사 인증용 로그인 페이지

router.get('/', function (request, response) {
    var title = index;
    var html = template.HTML(title,
        `
        
        `
        //화면에 출력할 html body
    );
    response.send(html);
});

router.post('/login', function(request, response){  //로그인
    
});

module.exports = router;