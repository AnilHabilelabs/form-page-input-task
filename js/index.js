function getInfo(e) {
  e.preventDefault();
  for (i = 0; i < e.target.length; i++) {
    if (e.target[i].type == "radio" || e.target[i].type == "checkbox") {
      if (e.target[i].checked) {
        document.write(e.target[i].value + "</br>");
        console.log(e.target[i].value);
      }
    } else {
        document.write(e.target[i].value +"</br>")
      console.log(e.target[i].value);
    }
  }
}
