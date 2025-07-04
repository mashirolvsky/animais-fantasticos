// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll("ul li");

for (const li of lis) li.classList.add("add");
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const prop in window) console.log(`${prop}: ${window[prop]}`);
