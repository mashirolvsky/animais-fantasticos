export default function initAnimateScroll() {
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
