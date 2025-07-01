// Funções
initTabNav();
initAccordion();
initSmoothScroll();
initAnimateScroll();

function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  const tabClassToInit = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(tabClassToInit);

    const activeTabs = (index, value) => {
      tabContent.forEach(item => item.classList.remove(value));

      const direction = tabContent[index].dataset.anime;
      console.log(direction);
      tabContent[index].classList.add(value, direction);
    };

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => activeTabs(index, tabClassToInit));
    });
  }
}

function initAccordion() {
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

function initSmoothScroll() {
  const linkInterno = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  const scrollToSection = event => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  };

  linkInterno.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });
}

function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;
    const animateScroll = () => {
      sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) section.classList.add("active");
      });
    };
    animateScroll();
    window.addEventListener("scroll", animateScroll);
  }
}
