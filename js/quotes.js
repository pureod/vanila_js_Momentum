const quotes = [
{
    quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius"
},
{
    quote: "Age is no guarantee of maturity",
    author: "Lawana Blackwell",
},
{
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
},
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
},
{
    quote: "This too shall pass.",
    author: "Et hoc transibit",
},
{
    quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
},
{
    quote: "Nothing in more despicable than respect based on fear.",
    author: "Albert camus",
},
{
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
},
{
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
},
{
    quote: "The less their ability, the more their conceit.",
    author: "Ahad Ha-am",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function makeQuote(){
    let todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText = `${todaysQuote.quote} - `;
    author.innerText = todaysQuote.author;
}

makeQuote();
setInterval(makeQuote,10000);