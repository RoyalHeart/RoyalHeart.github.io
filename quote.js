const url = "https://type.fit/api/quotes";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const random = Math.floor(Math.random() * data.length);
    const randomQuote = data[random];
    const quote = randomQuote.text;
    const author = randomQuote.author;
    if (!author) {
      author = "Anonymous";
    }
    const quoteText = document.getElementsByName("randomQuote");
    for (let i = 0; i < quoteText.length; i++) {
      quoteText[i].innerHTML = quote + " - " + author;
    }
  });
