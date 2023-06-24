function display() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>NAME: </b>" + document.form1.cname.value;
    message += "<li><b>ADDRESS: </b>" + document.form1.name.value;
    message += "<li><b>PHONE: </b>" + document.form1.title.value + "</ul>";
    message = "<ul><li><b>NAME: </b>" + document.form1.cname.value;
    message += "<li><b>ADDRESS: </b>" + document.form1.name.value;
    message += "<li><b>PHONE: </b>" + document.form1.title.value + "</ul>";
    DispWin.document.write(message);
  }