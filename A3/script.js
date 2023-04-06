document.addEventListener('DOMContentLoaded', () => {
const link = document.getElementById('outlink');

    link.addEventListener('click', tab => {
        tab.preventDefault();
        window.alert('This link opens to a new tab.');
        window.open(link.href, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('submit');

    sendButton.addEventListener('click', input => {
        let input1 = document.getElementById('reason').value;
        let input2 = document.getElementById('contact').value;

        if (input1.length < 1 || input2.length < 1) {
            input.preventDefault();
            window.alert('Please enter something in the blank spots.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lighterColor = document.getElementById('color1');

    lighterColor.addEventListener('click', color => {
        let body = document.querySelector("body");
        let nav = document.querySelector("nav");
        let table = document.querySelector("table");

        body.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        table.style.backgroundColor = 'white';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lighterColor = document.getElementById('color1');

    lighterColor.addEventListener('click', color => {
        let page = document.querySelectorAll("*");
        let div = document.querySelectorAll("div");
        page.style.backgroundColor = 'white';
        div.style.backgroundColor = 'white';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const darkerColor = document.getElementById('color2');

    darkerColor.addEventListener('click', color => {
        let body = document.querySelector("body");
        let nav = document.querySelector("nav");
        let table = document.querySelector("table");

        let words = document.querySelector("p");
        let words2 = document.querySelector("h1");
        let words3 = document.querySelector("h2");


        body.style.backgroundColor = '#2272dd';
        nav.style.backgroundColor = '#2272dd';
        table.style.backgroundColor = '#2272dd';

        words.style.color = 'white';
        words2.style.color = 'white';
        words3.style.color = 'white';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const normalColor = document.getElementById('normal');

    normalColor.addEventListener('click', color => {
        let body = document.querySelector("body");
        let nav = document.querySelector("nav");
        let table = document.querySelector("table");

        let words = document.querySelectorAll("p");
        let words2 = document.querySelectorAll("h1");
        let words3 = document.querySelectorAll("h2");

        body.style.backgroundColor = 'rgb(182, 249, 249)';
        nav.style.backgroundColor = '#a8e4ed';
        table.style.backgroundColor = 'rgb(182, 249, 249)';

        words.style.color = 'black';
        words2.style.color = 'blueviolet';
        words3.style.color = 'rgb(183, 116, 246)';

    });
});
