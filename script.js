let quotesArray;

function getQuotes() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      let max = data.length;
      let min = 0;
      let randomInt = Math.floor(Math.random() * (max - min) + min);
      updateHTML(data[randomInt].text, data[randomInt].author);
      quotesArray = data;
    });
}

function newQuoteFromArray() {
  let max = quotesArray.length;
  let min = 0;
  let randomInt = Math.floor(Math.random() * (max - min) + min);
  updateHTML(quotesArray[randomInt].text, quotesArray[randomInt].author);
}

function updateHTML(text, author) {
  document.getElementById("text").innerHTML = text;
  document.getElementById("author").innerHTML = author || "Anonymous";
  document
    .getElementById("tweet-quote")
    .setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${text} - ${author || "Anonymous"}`
    );
}

getQuotes();
document
  .getElementById("new-quote")
  .addEventListener("click", newQuoteFromArray);
