function validateForm() {
    let x = document.forms["formulario"]["nombre"].value;
    let y = document.forms["formulario"]["apellido"].value;
    let z = document.forms["formulario"]["telefono"].value;

    if (x == "" && y == "" && z == "") {
        alert("Completar Nombre, Apellido y Telefono");
        return false;
      }

      if (x == "" && y == "") {
        alert("Completar Nombre y Aoellido.");
        return false;
      }

      if (x == "" && z == "") {
        alert("Completar Nombre y Telefono.");
        return false;
      }

      if (y == "" && z == "") {
        alert("Completar Apellido y Telefono.");
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

    if (z == "") {
      alert("Campo Telefono incompleto");
      return false;
    }
  }
