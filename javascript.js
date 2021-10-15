const items = document.querySelectorAll(".rating a");

//// CLICK PER ESBORRAR TOT////

const body = document.getElementsByTagName('body')[0];

body.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.classList.value === 'active') return;
    items.forEach((otherItem) => {
        otherItem.classList.remove('active')
    });
});

//// ACTIVE OR NOT ACTIVE DELS ITEMS////

items.forEach((item, clickedIdx) => {
    item.addEventListener('click', () => {
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