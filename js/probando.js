const signUp = (e) => {
  let fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.lname.toLowerCase() == lname.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, lname, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Cuenta Creada.\n\nYa puede inicar sesion :D.");
  } else {
    alert("Ooopppssss... Datos duplicados!!!\nIntente con otros datos.");
  }
  e.preventDefault();
};

function signIn(e) {
  let email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );
  if (!exist) {
    alert("Usuario y/o Contraseña Incorrectos o no Existentes.");
  } else {
    alert(
      "BIENVENIDO AL SISTEMA AUN NO SE COLOCAR EL NOMBRE DEL QUE INICIO SESION AQUI"
    );
    location.href = "html/pagina2.html";
    window.location = "html/pagina2.html";
  }
  e.preventDefault();
}

function contactanos() {
  alert(
    "Su peticion de contacto fue enviada, la antenderemos lo mas pontro posible mediante el correo antes ingresado " +
      document.getElementById("correo_contactanos").value +
      " \n\n GRACIAS!!!"
  );
  contacto.reset();
}
