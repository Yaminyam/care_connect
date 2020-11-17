var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
//template 파일을 이용해서 필요한 body값을 넣어주면 공통적인 html 코드를 자동 생성
var template = require('../lib/template.js');

//간호사 인증용 로그인 페이지

router.get('/', function (request, response) {
    var title = 'index';
    var html = template.HTML(title,
        `
        <p><img src="./images/logo/케어커넥트 로고 기본.jpg" style="width:300px;"></p>
        아이디 : <input type="text" name="id" required pattern="^([A-Za-z0-9]){6,15}"><br><br>
        비밀번호 : <input type="password" name="password" required pattern="^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*"><br><br>
        <input type="submit" value="로그인" formaction="login_ex.php" formmethod="POST">
        <input type="submit" value="회원 가입" formaction="join_ex.php" formmethod="POST">
        `
        //화면에 출력할 html body
    );
    response.send(html);
});

router.post('/login', function(request, response){  //로그인
    
});

module.exports = router;