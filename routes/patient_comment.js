var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
//template 파일을 이용해서 필요한 body값을 넣어주면 공통적인 html 코드를 자동 생성
var template = require('../lib/template.js');
var page = require('../lib/page.js')

//주간 환자 상태 체크 코멘트

router.get('/:patientId', function (request, response) {
    var title = 'comment';
    var id = request.session.user_id;
    db.query(`SELECT * FROM patient`, function(error, patients) {
        var list = template.list(patients);
        var html = page.HTML(title, id, list,
            `
            <div class="col-md-10">
                <br>
                <div class="calendar"></div>
                <form class="calendar-form">
                    <div class="control-group">
                        <label class="control-label" for="class-input">Class: </label>
                        <input class="control-input" type="text" id="class-input" placeholder="Type class name here..."/>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="date-input">Selected date: </label>
                        <input class="control-input" type="date" id="date-input" placeholder="Type date in format M/D/YYYY..."/>
                    </div>
                    <div class="control-group">
                        <button type="submit">Change</button>
                    </div>
                </form>
                <script src="../js/calendar.js"></script>
            </div>
            `
            //화면에 출력할 html body
        );
        response.send(html);
    });
});

router.get('/:patientId/:date', function(request, response){
    //환자별 날짜별 코멘트 확인
    //날짜별은 페이지 전환없이 구현 희망
});

router.post('/update_process', function (request, response) {  
    //날짜별 코멘트 수정
});

module.exports = router;