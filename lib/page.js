var template = require('./template.js');

module.exports = {
    HTML: function (title, id, list, body) {
        var html = 
        `
        <div class="row">
            <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <img src="../images/logo/케어커넥트 로고 기본.png" width="200" height="50" alt="">
                </a>
        `;
        if(title == 'list'){
            html +=
            `
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/list">환자 목록</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/data/1">환자 데이터</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/comment/1">코멘트</a>
                </li>
            </ul>
            `
        }
        else if(title == 'data'){
            html +=
            `
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/list">환자 목록</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/data/1">환자 데이터</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/comment/1">코멘트</a>
                </li>
            </ul>
            `
        }
        else if(title == 'comment'){
            html +=
            `
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/list">환자 목록</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/data/1">환자 데이터</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/comment/1">코멘트</a>
                </li>
            </ul>
            `
        }
        html +=
        `
            <span class="navbar-text">
                ${id}
            </span>
            </nav>
            </div>
        </div>
        <div class="row">
            ${list}
            ${body}
        </div>
        `
        return template.HTML(title,html);
    }
}