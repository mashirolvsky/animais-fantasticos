export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  const tabClassToInit = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(tabClassToInit);

    const activeTabs = (index, value) => {
      tabContent.forEach(item => {
        item.classList.remove(value);
      });

      const direction = tabContent[index].dataset.anime;
      console.log(direction);
      tabContent[index].classList.add(value, direction);
    };

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTabs(index, tabClassToInit);
      });
    });
  }
}
