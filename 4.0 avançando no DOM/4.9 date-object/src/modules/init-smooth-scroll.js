export default function initSmoothScroll() {
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
