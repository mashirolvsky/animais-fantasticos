export default function initNumberAnimation() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animateNumbers() {
    numeros.forEach(numero => {
      const total = Number(numero.innerText);
      let incremento = Math.floor(total / 80);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start >= total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 45 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, { attributes: true });
}
