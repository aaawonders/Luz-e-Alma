var list = document.getElementsByClassName("Page");
var Ativo = document.getElementsByClassName("Active");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("onclick", list[i].className += " Active")/* function() {
  
      // If there's no active class
      if (Ativo.length > 0) {
        Ativo[0].className = Ativo[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });*/
  }

