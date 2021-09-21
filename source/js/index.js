const text = document.querySelector('.numbers__text');
const colorElement = document.querySelector('.numbers');
const focusElement = document.querySelector('.numbers__wrapper');
const ITEMS = ["GO!", "1", "2", "3", "GO!"];

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const showItems = async () => {
  for (let item of ITEMS) {
    text.innerText = item;
    await sleep(1000);
  }
};

showItems();
setInterval(() => { showItems() }, 7000);

focusElement.addEventListener('mouseenter', () => {
  colorElement.style.backgroundColor = "#3D6CC7";
});

focusElement.addEventListener('mouseleave', () => {
  colorElement.style.backgroundColor = "";
});
