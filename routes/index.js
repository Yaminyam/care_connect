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
        <div class="container" style="text-align: center;">
            <form action="/login" method="post">
                <p><img src="./images/logo/케어커넥트 로고 기본.jpg" style="width:300px;"></p>
                <input type="email" class="form-control" name="user_id" placeholder="Email">
                <br><input type="password" class="form-control" name="user_pwd" placeholder="Password">
                <br><button class="btn btn-primary">로그인</button>
            </form>
        </div>
        `
        //화면에 출력할 html body
    );
    sess = request.session;
    response.send(html);
});

router.post('/login', function(request, response){  //로그인
    console.log(request.body);
    var id = request.body.user_id;
    var password = request.body.user_pwd;
    request.session.logined = true;
    request.session.user_id = id;
    response.redirect("/list");
});

module.exports = router;