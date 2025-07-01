// Liste 5 objetos nactives
// Objetos, String, Boolean, Function, Array, Number
// Liste 5 objetos do browser
// Location, Console, Navigator, History, Screen
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
console.log(document);
if (typeof window.onanimationiteration !== "undefined")
  console.log("onanimationiteration existe");
if (typeof window.crypto !== "undefined") console.log("crypto existe");
if (typeof document.mozFullScreen !== "undefined")
  console.log("mozFullScreen existe"); // Apenas no Firefox
if (typeof document.fragmentDirective !== "undefined")
  console.log("fragmentDirective existe");
if (typeof document.applets !== "undefined") console.log("applets existe");
if (typeof document.currentScript !== "undefined")
  console.log("currentScript existe");
if (typeof document.webkitIsFullScreen !== "undefined")
  console.log("webkitIsFullScreen existe"); //Apenas no Chrome
if (typeof document.vlinkColor !== "undefined")
  console.log("vlinkColor existe");
