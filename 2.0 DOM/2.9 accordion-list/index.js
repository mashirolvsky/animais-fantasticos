// Funções
initTabNav();
initAccordion();

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const tabClassToInit = "active";
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(tabClassToInit);

    const activeTabs = (index, value) => {
      tabContent.forEach(item => item.classList.remove(value));
      tabContent[index].classList.add(value);
    };

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => activeTabs(index, tabClassToInit));
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
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
