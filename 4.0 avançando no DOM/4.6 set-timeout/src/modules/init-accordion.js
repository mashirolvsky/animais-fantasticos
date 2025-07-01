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
    console.log(event.currentTarget);
  }

  accordionList.forEach(item => {
    item.addEventListener("click", activeAccordion);
  });
}
