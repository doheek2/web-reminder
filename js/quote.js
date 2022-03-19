const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
    },
    {
        quote: 'Whoever is happy will make others happy too.',
        author: 'Anne Frank'
    },
    {
        quote: 'Life is either a daring adventure or nothing at all.',
        author: 'Helen Keller'
    }
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;