export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "active";
  }

  activeTabs(index) {
    this.tabContent.forEach(item => {
      item.classList.remove(this.activeClass);
    });

    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // adiciona os eventos às tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeTabs(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabNavEvent();
      this.activeTabs(0);
    }
  }
}
