const img = document.querySelectorAll("img");
console.log(img);

img.forEach((item, index) => console.log(item.classList.add("active"), index));

console.log(img);
