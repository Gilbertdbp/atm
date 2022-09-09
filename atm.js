function entregarDinero() {
  let rd = document.getElementById("retirarDinero");
  dinero = parseInt(rd.value);
  for (let bi of caja) {
    if (dinero > 0) {
      divr = Math.floor(dinero / bi.valor);
      if (divr > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = divr;
      }
      entregado.push(new billete(bi.valor, papeles));
      dinero -= bi.valor * papeles;
    }
  }
  if (dinero > 0) {
    resultadoRetiro.innerHTML =
      "Este cajero no dispone de la cantidad solicitada"; // INNER ES EL ATRIBUTO DEL OBJETO RESULTADO
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        resultadoRetiro.innerHTML +=
          "Retiraste " + e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

function consultarSaldo() {
  for (let sd of caja) {
    if (saldo > 0) {
      divs = Math.floor(sd.cantidad * sd.valor);
      saldo -= sd.cantidad * sd.valor;
    }
  }
}

function refrescarPagina() {
  console.log(location);
  location.reload();
}

function salir() {
  location = "login.html";
}

let caja = []; // CREAMOS LA ARAY DONDE ESTARÁN LOS BILLETES, PARA LUEGO HACER LOS PUSH DE LOS OBJETOS
caja.push(new billete(100, 4));
caja.push(new billete(50, 3));
caja.push(new billete(20, 1));
caja.push(new billete(10, 8));
caja.push(new billete(5, 6));
caja.push(new billete(2, 2));
caja.push(new billete(1, 10));
let entregado = []; // CREAMOS UNA VARIABLE VACÍA
let saldoActual = []; // prueba
let divr = 0;
let divs = 0; // prueba
let papeles = 0;
let dinero; // SE CREA UNA VARIABLE PLANA
let saldoDisponible = 0;
let saldo; // prueba

let resultadoRetiro = document.getElementById("resultadoRetiro");
let r = document.getElementById("retirar"); // PARA OBTENER UN ELEMENTO POR SU ID
r.addEventListener("click", entregarDinero);

let reset = document.getElementById("out");
reset.addEventListener("click", salir);

let resultadoSaldo = document.getElementById("resultadoSaldo");
let s = document.getElementById("consultarDinero"); // PARA OBTENER UN ELEMENTO POR SU ID
s.addEventListener("click", consultarSaldo);

let imagenes = [];
imagenes[100] = "images/100.png";
imagenes[50] = "images/50.png";
imagenes[20] = "images/20.png";
imagenes[10] = "images/10.png";
imagenes[10] = "images/5.png";
imagenes[10] = "images/2.png";
imagenes[10] = "images/1.png";
