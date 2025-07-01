const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("active");
  const activeTabs = (index, value) => {
    tabContent.forEach(item => item.classList.remove(value));
    tabContent[index].classList.add(value);
  };

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => activeTabs(index, "active"));
  });
}
//Console
console.log({
  menu: tabMenu,
  content: {
    active: activeTabs(0, "active"),
    blue: activeTabs(1, "blue"),
  },
});
