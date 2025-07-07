export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const accordionClassToInit = "active";
  function activeAccordion(event) {
    event.currentTarget.classList.toggle(accordionClassToInit);
    event.currentTarget.nextElementSibling.classList.toggle(
      accordionClassToInit
    );
  }
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
  }
  accordionList.forEach(item => {
    item.addEventListener("click", activeAccordion);
  });
}
