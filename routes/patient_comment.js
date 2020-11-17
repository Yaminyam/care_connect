var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

//주간 환자 상태 체크 코멘트

router.get('/comment/:patientId', function (request, response) {
    var title = index;
    var html = template.HTML(title,
        `
        
        `
        //화면에 출력할 html body
    );
    response.send(html);
});

router.get('/comment/:patientId/:date', function(request, response){
    //환자별 날짜별 코멘트 확인
    //날짜별은 페이지 전환없이 구현 희망
});

router.post('/comment/update_process', function (request, response) {  
    //날짜별 코멘트 수정
});

module.exports = router;