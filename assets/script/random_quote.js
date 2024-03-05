// vai ser uma API algum dia, eu juro!

function randomQuote() {

    let quotes = document.querySelectorAll('.quotes');

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selected = quotes[randomIndex];
 
    // .enable-quote { display: block;}
    selected.classList.add('enable-quote');
}

document.addEventListener("DOMContentLoaded", randomQuote);
