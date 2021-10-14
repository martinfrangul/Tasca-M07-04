const items = document.querySelectorAll(".rating a");
// const itemWrapper = document.querySelector(".rating");



items.forEach((item, clickedIdx) => {
    item.addEventListener('click', () => {
        // itemWrapper.classList.add("disabled");
        items.forEach((otherItem, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherItem.classList.add('active')
            }
            else {
                otherItem.classList.remove('active')
            }
        });
        console.log(`item of index ${clickedIdx + 1} was clicked`);
    })
});