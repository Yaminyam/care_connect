var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
//template 파일을 이용해서 필요한 body값을 넣어주면 공통적인 html 코드를 자동 생성
var template = require('../lib/template.js');
var page = require('../lib/page.js');
var mysql = require('mysql');
var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"0312",
    database:"care_connect",
    port:3306
});
//환자의 건강 상태 차트 및 데이터

router.get('/:patientId', function (request, response) {
    var title = 'data';
    var id = request.session.user_id;
    db.query(`SELECT * FROM patient`, function(error, patients) {
        var list = template.list(patients, request.params.patientId);
        var html = page.HTML(title, id, list,
            `
            <div class="col-md-10">
                <br>
                <div class="col-md-12">
                    <div id="container" style="width: 75%;">
                        <canvas id="canvas"></canvas>
                    </div>
                    <button class="btn btn-primary" id="randomizeData">Randomize Data</button>
                    <button class="btn btn-primary" id="addDataset">Add Dataset</button>
                    <button class="btn btn-primary" id="removeDataset">Remove Dataset</button>
                    <button class="btn btn-primary" id="addData">Add Data</button>
                    <button class="btn btn-primary" id="removeData">Remove Data</button>
                    <script src="/chart/Chart.js"></script>
                    <script src="../js/utils.js"></script>
                    <script src="../js/chart.js"></script>
                </div>
                <br>
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">이름</th>
                                <th scope="col">나이</th>
                                <th scope="col">병명</th>
                                <th scope="col">정기검사요일</th>
                                <th scope="col">평균 공복 혈당</th>
                                <th scope="col">평균 식후 혈당</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>40</td>
                                <td>1형 당뇨</td>
                                <td>WED</td>
                                <td>126mg/dL</td>
                                <td>200mg/dL</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>23</td>
                                <td>2형 당뇨</td>
                                <td>MON</td>
                                <td>140mg/dL</td>
                                <td>210mg/dL</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>41</td>
                                <td>1형 당뇨</td>
                                <td>SAT</td>
                                <td>135mg/dL</td>
                                <td>220mg/dL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            `
            //화면에 출력할 html body
        );
        response.send(html);
    });
});

router.get('/:patientId/:chartId', function (request, response) {
    //세부 차트 데이터 확인
    //외부 lib 사용예정
});

router.post('/update_process', function (request, response) {
    //차트 데이터 변경
});

module.exports = router;