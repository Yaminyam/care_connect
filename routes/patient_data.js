var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

//환자의 건강 상태 차트 및 데이터

router.get('/data/:patientId', function (request, response) {
    var title = index;
    var html = template.HTML(title,
        `
        
        `
        //화면에 출력할 html body
    );
    response.send(html);
});

router.get('/data/:patientId/:chartId', function(request, response){  
    //세부 차트 데이터 확인
    //외부 lib 사용예정
});

router.post('/data/update_process', function (request, response) {   
    //차트 데이터 변경
});

module.exports = router;