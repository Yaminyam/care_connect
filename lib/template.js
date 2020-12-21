module.exports = {
  HTML: function (title, body) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>${title}</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/css/bootstrap.css">
        <link rel="stylesheet" href="/chart/Chart.min.css">
        <link rel="stylesheet" href="../stylesheet/calendar.css">
      </head>
      <body>
        ${body}
      </body>
      </html>
      `;
  },list: function (filelist, patientId) {
    var list = `
    <div class="col-md-2">
        <br>
            <ul class="list-group">
    `;
    var i = 0;
    while(i < filelist.length){
      if(patientId == filelist[i].name){
        list = list + `<li class="list-group-item active"><a href="/data/${filelist[i].name}" style="color:black;text-decoration:none;">${filelist[i].name}</a></li>`;
      } else {
        list = list + `<li class="list-group-item"><a href="/data/${filelist[i].name}"  style="color:black;text-decoration:none;">${filelist[i].name}</a></li>`;
      }
      i = i + 1;
    }
    list = list+'</ul></div>';
    return list;
  },data_list: function (patients) {
    var list = "";
    var i = 0;
    while(i < patients.length){
      list = list + `
      <tr>
        <th scope="row">${i+1}</th>
        <td>${patients[i].name}</td>
        <td>${patients[i].age}</td>
        <td>${patients[i].sickness}</td>
        <td>${patients[i].day}</td>
        <td>${patients[i].fast_sugar}mg/dL</td>
        <td>${patients[i].post_sugar}mg/dL</td>
      </tr>`;
      i = i + 1;
    }
    return list;
  }           

}