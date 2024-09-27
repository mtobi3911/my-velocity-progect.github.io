const tabsBtn = document.querySelectorAll(".tabs__nav button");
console.log(tabsBtn)
const tabsItems = document.querySelectorAll(".tabs__item");
console.log(tabsItems)

// Функция скрывает табы и убирает active у кнопок

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtn.forEach(item => item.classList.remove("active"));
}


// Функция показывает переданный номер таба
// и делает соответствующую ему кнопку активной.

function showTab(index) {
    tabsItems[index].classList.remove("hide")
    tabsBtn[index].classList.add("active")
}

hideTabs();
showTab(0);


tabsBtn.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));


const anchors = document.querySelectorAll(".header__nav a");
console.log(anchors);

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        window.scroll({
           top: elem.offsetTop - 80,
           behavior: 'smooth'
        });
    });
});




const anchors__about = document.querySelectorAll(".link");
console.log(anchors__about);

anchors__about.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        window.scroll({
           top: elem.offsetTop - 80,
           behavior: 'smooth'
        });
    });
});