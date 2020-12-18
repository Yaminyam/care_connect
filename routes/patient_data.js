var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
//template 파일을 이용해서 필요한 body값을 넣어주면 공통적인 html 코드를 자동 생성
var template = require('../lib/template.js');
var page = require('../lib/page.js');

//환자의 건강 상태 차트 및 데이터

router.get('/:patientId', function (request, response) {
    var title = 'index';
    var html = page.HTML(title,
        `
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
        `
        //화면에 출력할 html body
    );
    response.send(html);
});

router.get('/:patientId/:chartId', function (request, response) {
    //세부 차트 데이터 확인
    //외부 lib 사용예정
});

router.post('/update_process', function (request, response) {
    //차트 데이터 변경
});

module.exports = router;