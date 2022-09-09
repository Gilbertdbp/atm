let u = document.getElementById("usuario");
let p = document.getElementById("password");

function login(form) {
  if (form.u.value == "elbicho") {
    if (form.p.value == "cr7siu") {
      location = "atm.html";
    } else {
      alert("Alguno de los datos introducidos, es incorrecto.");
    }
  } else {
    alert("Alguno de los datos introducidos, es incorrecto.");
  }
}