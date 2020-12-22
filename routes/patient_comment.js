var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
router.use(express.static('public'));
var sanitizeHtml = require('sanitize-html');
//template 파일을 이용해서 필요한 body값을 넣어주면 공통적인 html 코드를 자동 생성
var template = require('../lib/template.js');
var page = require('../lib/page.js')
var mysql = require('mysql');
var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0312",
    database:"care_connect",
    port:3306
});
//주간 환자 상태 체크 코멘트

router.get('/', function(request, response) {
    var title = 'data';
    var id = request.session.user_id;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    db.query(`SELECT * FROM patient`, function(error, patients) {
        response.redirect(`/comment/${patients[0].name}/${year}-${month}-${day}`);
    })
});
router.get('/:patientId', function (request, response) {
    var title = 'data';
    var id = request.session.user_id;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    response.redirect(`/comment/${request.params.patientId}/${year}-${month}-${day}`);
})
router.get('/:patientId/:date', function (request, response) {
    var title = 'comment';
    var id = request.session.user_id;
    var comment_box;
    var year = request.params.date.split('-')[0];
    var month = request.params.date.split('-')[1];
    var day = request.params.date.split('-')[2];
    console.log(`SELECT comment FROM comment_${year}_${month} WHERE name='${request.params.patientId}' AND day='${day}'`);
    db.query(`SELECT comment FROM comment_${year}_${month} WHERE name='${request.params.patientId}' AND day='${day}'`, function(error, comment) {
        if(comment.length == 0){
            comment_box = `
            <div class="card">
                <div class="card-body">
                    코멘트가 없습니다
                </div>
            </div>
            `;
        }else{
            comment_box = template.comment(comment);
        }
    });
    db.query(`SELECT * FROM patient`, function(error, patients) {
        var list = template.list(patients, request.params.patientId, title);
        var html = page.HTML(title, id, list,
            `
            <div class="col-md-10">
                <br>
                <div class="calendar"></div>
                <script src="../js/calendar.js"></script>
                ${comment_box}
            </div>
            `
            //화면에 출력할 html body
        );
        response.send(html);
    });
});

router.post('/update_process', function (request, response) {  
    //날짜별 코멘트 수정
});

module.exports = router;