let url = "https://type.fit/api/quotes";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let random = Math.floor(Math.random() * data.length);
    let randomQuote = data[random];
    let quote = randomQuote.text;
    let author = randomQuote.author;
    if (!author) {
      author = "Anonymous";
    }
    let quoteText = document.getElementsByName("randomQuote");
    for (let i = 0; i < quoteText.length; i++) {
      quoteText[i].innerHTML = quote + " - " + author;
    }
  });
