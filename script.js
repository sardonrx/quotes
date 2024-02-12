const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('author');
const buttonContainer = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');

let apiQuotes = [];

function newQuotes(){

    const quote = apiQuotes[ Math.floor(math.random)* apiQuotes.length];
    // authorText.textContent = quote.author, quoteText.textContent = quoteText;

    if(!quote.author){
        authorText.textContent = "unknown";
    } else {
        authorText.textContent = quote.author;
    }
    if (quote.text.lenght > 50 ){
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-queue');
    }
    quoteText.textContent = quote.text;

}
async function getQuotes () {

    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

    try {
        const response = await fetch (apiUrl);

        apiQuotes = await response.json();

        newQuotes();
    
    } catch(error ){
        //pass your error 
    }
    
}

getQuotes();