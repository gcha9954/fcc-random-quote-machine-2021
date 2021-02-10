let quotesArray;

const getQuotes = () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      let max = data.length;
      let min = 0;
      let randomInt = Math.floor(Math.random() * (max - min) + min)
      document.getElementById("text").innerHTML = data[randomInt].text;
      document.getElementById("author").innerHTML = data[randomInt].author || "Anonymous";
      document.getElementById('tweet-quote').setAttribute('href', `https://twitter.com/intent/tweet?text=${data[randomInt].text} - ${data[randomInt].author || "Anonymous"}`);
      quotesArray = data;
    })
}

const newQuoteFromArray = () => {
  let max = quotesArray.length;
  let min = 0;
  let randomInt = Math.floor(Math.random() * (max - min) + min)
  document.getElementById("text").innerHTML = quotesArray[randomInt].text;
  document.getElementById("author").innerHTML = quotesArray[randomInt].author || "Anonymous";
  document.getElementById('tweet-quote').setAttribute('href', `https://twitter.com/intent/tweet?text=${quotesArray[randomInt].text} - ${quotesArray[randomInt].author || "Anonymous"}`)
}

getQuotes();
document.getElementById('new-quote').addEventListener('click', newQuoteFromArray);