function a() {
  return {
    ok: false
  };
  // {ok: false}
}

function b() {
  return
  {
    ok: true };
  //silent syntax error, returns {undefined}. Because one of the bad parts of JS
  //is that in puts semicolons automatically.
}


0 == ''           // true
0 == '0'          // true
'' == 0           // false
false == 'false'  // false
false == '0'      // true
" \t\r\n " == 0   // true

0 === ''           // true
0 === '0'          // true
'' === 0           // false
false === 'false'  // false
false === '0'      // true
" \t\r\n " === 0   // true

var GLOBAL_VARIABLE = "evil";

function ConstructorFunction() {
  var always = "goes_with_initial_caps";
}
