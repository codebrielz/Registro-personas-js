const contentTodo = document.querySelector(".content-todo");

const nombreInput = document.createElement("input");
nombreInput.name = "nombre";
const apellidoInput = document.createElement("input");
apellidoInput.name = "apellido";
const button = document.createElement("input");
const todoUl = document.createElement("ul");

const titleRegistro = document.createElement("h3");

const arrRegistros = [];

titleRegistro.innerHTML = "Personas Registradas";

nombreInput.placeholder = "nombre...";
apellidoInput.placeholder = "apellido...";

button.value = "Enviar";
button.type = "button";
button.name = "enviar";
contentTodo.appendChild(nombreInput);
contentTodo.appendChild(apellidoInput);
contentTodo.appendChild(button);
contentTodo.appendChild(titleRegistro);
contentTodo.appendChild(todoUl);

let nombre, apellido;

const reset = () => {
  nombre = "";
  apellido = "";
  nombreInput.value = "";
  apellidoInput.value = "";
};

const obtenerString = (e) => {
  if (e.target.attributes[0].value === "nombre") {
    nombre = nombreInput.value;
    console.log(nombre);
  }
  if (e.target.attributes[0].value === "apellido") {
    apellido = apellidoInput.value;
    console.log(apellido);
  }
  if (nombre == undefined) {
    nombre = "";
  }
  if (apellido == undefined) {
    apellido = "";
  }
};

const agregarALaLista = () => {
  if (nombre.length > 0) {
    console.log(nombre, apellido);
    guardarLocal(nombre, apellido);
    const todoLi = document.createElement("li");
    todoLi.innerHTML = `${nombre} ${apellido}`;
    todoUl.appendChild(todoLi);
    reset();
  }
};
if (localStorage.length > 0) {
  for (let index = 0; index < localStorage.length; index++) {
    const todoLi = document.createElement("li");
    let registro = localStorage.getItem(`registro${index + 1}`).replace(","," ");
    todoLi.innerHTML = registro;
    todoUl.appendChild(todoLi);
  }
}

const guardarLocal = (nombre, apellido) => {
  arrRegistros.push([nombre, apellido]);
  arrRegistros.forEach((element) => {
    localStorage.setItem(`registro${localStorage.length + 1}`, element);
  });
  console.log(arrRegistros);
};

const mostrarLocal = () => {};

contentTodo.addEventListener("keyup", (e) => {
  obtenerString(e);
  if (e.key == "Enter") {
    agregarALaLista(e);
  }
});
button.addEventListener("click", (e) => {
  obtenerString(e);
  agregarALaLista(e);
});
