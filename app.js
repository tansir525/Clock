function realtimeClock() {
  var rtClock = new Date();
  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  //Add AM and PM Syystem
  var amPm = hours < 12 ? "AM" : "PM";
  //convart hours component to 12 hours formate
  hours = hours > 12 ? hours - 12 : hours;

  //padd the hours, minutes and seconds with leadings zeros
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);
  //display the clock
  document.getElementById("clock").innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
  var t = setTimeout(realtimeClock, 500);
}

const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = quote.quote;
};
