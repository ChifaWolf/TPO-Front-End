function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["fsurname"].value;

    if (x == "" && y == "") {
        alert("Completar Nombre y Apellido");
        return false;
      }
    
    
    if (x == "") {
      alert("Campo Nombre Incompleto");
      return false;
    }

    
    if (y == "") {
      alert("Campo Apellido incompleto");
      return false;
    }
  }
