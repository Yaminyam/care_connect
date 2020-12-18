var template = require('./template.js');

module.exports = {
    HTML: function (title, body) {
        return template.HTML(title,
            `
            <div class="row">
                <div class="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                    <img src="../images/logo/케어커넥트 로고 기본.png" width="200" height="50" alt="">
                    </a>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">환자 목록</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">환자 데이터</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">코멘트</a>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-10">
                    ${body}
                </div>
            </div>
            `
        );
    }
}