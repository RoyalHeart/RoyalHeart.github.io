let url = "https://type.fit/api/quotes";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let random = Math.floor(Math.random() * data.length);
    let randomQuote = data[random];
    let quote = randomQuote.text;
    let author = randomQuote.author;
    let quoteText = document.getElementsByName("randomQuote");
    for (let i = 0; i < quoteText.length; i++) {
      quoteText[i].innerHTML = quote + " - " + author;
    }
  });
