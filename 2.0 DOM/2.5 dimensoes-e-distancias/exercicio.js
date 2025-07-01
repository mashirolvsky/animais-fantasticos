// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelectorAll("img");
console.log(img[0].offsetTop);
console.log(img);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  let result = 0;
  img.forEach(item => {
    result += item.offsetWidth;
    console.log(result);
  });
}

window.onload = () => {
  somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const minLink = document.querySelectorAll("a");
console.log(minLink);
minLink.forEach(item => {
  let itemDimension = {
    itemW: item.offsetWidth,
    itemH: item.offsetHeight,
  };
  if (itemDimension.itemH < 48 && itemDimension.itemW < 48)
    return console.log(
      `Este item não corresponde aos parâmetros exigidos de acessibilidade: ${item.getAttribute(
        "href"
      )}`
    );
  return console.log({
    width: itemDimension.itemW,
    height: itemDimension.itemH,
  });
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
let mobile = window.matchMedia("(max-width: 720px)").matches;
if (mobile) {
  menu.classList.add("mobile");
  console.log(menu);
}
