 function mySave(nombreIdHtml,nombreVariable) {
    var myContent = document.getElementById(nombreIdHtml).value;
    localStorage.setItem(nombreVariable, myContent);
  }
  function mySave2(nombreVariable,valorVariable) {
    localStorage.setItem(nombreVariable, valorVariable);
  }