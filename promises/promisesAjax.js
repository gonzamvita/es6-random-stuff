'use strict'

// implementamos $http para seguir el modelo de Adapter estándar

function $http(url) {

// Un pequeño ejemplo de objeto
    var core = {
        ajax : function (method, url, args) {
            // nueva promesa
            var promise = new Promise(function(resolve, reject) {
                // instancia XMLHttpRequest
                var client = new XMLHttpRequest();
                var uri = url;

                if (args && (method === 'POST' || method === 'PUT')) {
                    uri += '?';
                    var argcount = 0;
                    for (var key in args) {
                        if (args.hasOwnProperty(key)) {
                            if (argcount++) {
                                uri += '&';
                            }
                            uri += encodeURIComponent(key) + '=' +
                                    encodeURIComponent(args[key]);
                        }
                    }
                }

                client.open(method, uri);
                client.setRequestHeader('Access-Control-Allow-Headers', '*');
                client.send();

                client.onload = function () {
                    if (this.status == 200) {
                        // resolver la promesa
                        resolve(this.response)
                    } else {
                        // rechazar la promesa
                        reject(this.statusText);
                    }
                };

                client.onerror = function () {
                    reject(this.statusText);
                };
            });

            // devuelve la promesa
            return promise;
        }
    };

    // patrón Adapter
    return {
        'get' : function(args) {
            return core.ajax('GET', url, args);
        },
        'post' : function(args) {
            return core.ajax('POST', url, args);
        },
        'put' : function(args) {
            return core.ajax('PUT', url, args);
        },
        'delete' : function(args) {
            return core.ajax('DELETE', url, args);
        }
    };
    // fin del patrón
};
// $http

// funcs y payloads
var mdnAPI = 'https://developer.mozilla.org/en-US/search.json';
var payload = {
    'topic' : 'js',
    'q'     : 'Promise'
};

var callback = {
    success : function(data) {
        console.log(1, 'success', JSON.parse(data));
    },
    error : function(data) {
        console.log(1, 'error', JSON.parse(data));
    }
};
// fin funcs y payloads

$http(mdnAPI)
    .get(payload)
    .then(callback.success)
    .catch(callback.error);
