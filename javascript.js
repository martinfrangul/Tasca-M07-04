const items = document.querySelectorAll(".rating a");
// const itemWrapper = document.querySelector(".rating");


const body = document.getElementsByTagName('body')[0];

body.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.classList.value === 'active') return;
    items.forEach((otherItem) => {
        otherItem.classList.remove('active')
    });
});


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