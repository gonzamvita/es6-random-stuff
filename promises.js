'use strict'
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Started (<small>Código asíncrono empezado</small>)<br />');

  // nueva promesa: el valor de 'thisPromiseCount' después de 3s
  var p1 = new Promise(function(resolve, reject) {

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promesa empezada (<small>Código asíncrono empezado</small>)<br />');

    // creando asincronía
    window.setTimeout(function () {
      // se cumple la promesa
      resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);

  });

  // definición de la acción cumplida la promesa.
  p1.then(function(val) {
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promesa cumplida (<small>Código asíncrono empezado</small>)<br />');
  });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Promise done (<small>Código asíncrono empezado</small>)<br />');
}
