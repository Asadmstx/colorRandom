let item = document.querySelectorAll('.item')

console.log(item);

for (let i = 0; i < item.length; i++) {
    const items = item[i];

    items.style.background = items.getAttribute('data-bg');

    items.addEventListener('click', function () {
        items.style.background = items.getAttribute('data-bg');
        body.style.background = items.getAttribute('data-bg');
        body.style.transition = '.5s';
    })
}

/*************************** \/ \/ \/ Hometask \/ \/ \/ ***************************/

function colorRandom(x) {
    return Math.floor(Math.random() * Math.floor(x));
}
console.log(`rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`);

let rgbItem = document.querySelectorAll('.rgb__item');

for (let i = 0; i < rgbItem.length; i++) {
    const rgbItems = rgbItem[i];

    rgbItems.style.background = `rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`;

    rgbItems.addEventListener('click', function () {
        rgbItems.style.background = `rgb(${colorRandom(255)}, ${colorRandom(255)}, ${colorRandom(255)})`;
        body.style.background = rgbItems.style.background;
        body.style.transition = '.5s';
    })
}