/*
================
localStorage.setItem('edad',18);
localStorage.setItem('nombre',"Luis");
localStorage.setItem('Apellido',"De La Rosa");
localStorage.setItem('Cedula',1044210988);
================


================
let persona ={edad:18,nombre:"luis",apellido:"de la rosa",cedula:1044210988}

localStorage.setItem('datos',JSON.stringify(persona));
================
*/

/*
let v_edad = parseInt(prompt("Digite Su Edad"));
let v_nombre = prompt("Digite Su Nombre");
let v_apellido = prompt("Digite Su Apellido");
let v_cedula = parseInt(prompt("Digite Su Cedula"));

let persona = {
  edad: v_edad,
  nombre: v_nombre,
  apellido: v_apellido,
  cedula: v_cedula,
};

localStorage.setItem("datos", JSON.stringify(persona));

let resultado = JSON.parse(localStorage.getItem("datos"));

document.getElementById("edad").innerHTML = "La Edad es " + resultado.edad;
document.getElementById("nombre").innerHTML =
  "El Nombre es " + resultado.nombre;
document.getElementById("apellido").innerHTML =
  "El Apellido es " + resultado.apellido;
document.getElementById("cedula").innerHTML =
  "La Cedula es " + resultado.cedula;
*/

//=========================================================================
/*
function registrar() {
  const v_usuario = document.getElementById("usuarioRegistro").value;
  const v_email = document.getElementById("emailRegistro").value;
  const v_password = document.getElementById("passwordRegistro").value;

  if (v_usuario == "" || v_email == "" || v_password == "") {
    alert("Debe ingresar la informacion en todos los campos");
  } else {
    /*
    const persona = {
      usuario: v_usuario,
      email: v_email,
      password: v_password,
    };
    */

/*
    const correo_electronico = {
      correo: v_email,
    };

    const contraseña_login = {
      contraseña: v_password,
    };

    localStorage.setItem("correo", JSON.stringify(correo_electronico));
    localStorage.setItem("contraseña", JSON.stringify(contraseña_login));

    const correo = JSON.parse(localStorage.getItem("correo"));
    const contraseña = JSON.parse(localStorage.getItem("contraseña"));
*/

/*
  document.getElementById("edad").innerHTML = "La Edad es " + resultado.edad;
  document.getElementById("nombre").innerHTML =
    "El Nombre es " + resultado.nombre;
  document.getElementById("apellido").innerHTML =
    "El Apellido es " + resultado.apellido;
  document.getElementById("cedula").innerHTML =
    "La Cedula es " + resultado.cedula;
    */
/*
    localStorage.setItem("user", JSON.stringify(v_usuario));
    localStorage.setItem("email", JSON.stringify(v_email));
    localStorage.setItem("password", JSON.stringify(v_password));

    alert("SU REGISTRO A SIDO EXITOSO.");
    alert(v)
    window.location = "../index.html";
  }
}

*/

//===================================================================

const registrar = (e) => {
  let usuarioRegistro = document.getElementById("usuarioRegistro").value,
    emailRegistro = document.getElementById("emailRegistro").value,
    passwordRegistro = document.getElementById("passwordRegistro").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.usuarioRegistro.toLowerCase() == usuarioRegistro.toLowerCase() &&
        data.emailRegistro.toLowerCase() == emailRegistro.toLowerCase() &&
        data.passwordRegistro.toLowerCase() == passwordRegistro.toLowerCase()
    );

  if (!exist) {
    formData.push({ usuarioRegistro, emailRegistro, passwordRegistro });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("usuarioRegistro").focus();
    alert("Cuenta creada.\n\nInicie sesión utilizando el enlace.");
  } else {
    alert(
      "Ooopppssss... Se ha encontrado un duplicado!!!\nYa te has registrado"
    );
  }
  e.preventDefault();
};

function logear(e) {
  let correoLogin = document.getElementById("emailRegistro").value,
    contraseñaLogin = document.getElementById("passwordRegistro").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.correoLogin.toLowerCase() == correoLogin &&
        data.contraseñaLogin.toLowerCase() == contraseñaLogin
    );
  if (!exist) {
    alert("Error! Credenciales Incorrectas o No Registradas.");
  } else {
    location.href = "/html/pagina2.html";
    document.getElementById("nombre-usuario").innerHTML = "Usuario : " + data;
  }
  e.preventDefault();
}
