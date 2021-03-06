// baffle
const b = baffle('.baffle');

b.start()
    .set({
      characters: '#01234567',
      speed: 50
    })
    .text(text => 'Elbert Kim')
    .once()
    .reveal(500, 500)

// typed
var typed = new Typed('#typed', {
  strings: ["^1000 Hi, I work as an ERP Analyst for LG. <br><br>I manage financial and accounting systems like SAP Concur, Sage Intacct, and Oracle ERP. I provide functional support for business units, perform technical administrative tasks, and architect solutions.<br><br> Thanks for visiting my site."],
  smartBackspace: true,
  backDelay: 100,
  showCursor: false,
  typeSpeed: 30,
  startDelay: 100,
  backSpeed: 10
});

// quotes

var quotes = [];
quotes.push("<em>I check my pulse and if I can find it, I know I've got a chance</em>. <br>-- <em>Paul Newman</em>");
quotes.push("<em>The only way to be the best is to keep working like you got nothing</em>. <br>-- <em>Mark Wahlberg</em>");
quotes.push("<em>Every strike brings me closer to the next home run</em>. <br>-- <em>Babe Ruth</em>");
quotes.push("<em>Expose your practice, don't practice for exposure</em>. <br>-- <em>Ido Portal</em>");
quotes.push("<em>Anger always backfires, it hurts people, you have to apologize all the time. It's better to skip it</em>. <br>-- <em>Jamie Dimon</em>");
quotes.push("<em>If you listen carefully, people explain to you what it is that they need</em>. <br>-- <em>Rick Rubin</em>");
quotes.push("<em>I never lose. I either win or I learn.</em>. <br>-- <em>Nelson Mandela</em>")

var quote = document.getElementById("quote");
quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]





var anniesWebsite = document.getElementById('annies');
anniesWebsite.style.cursor = 'pointer';
anniesWebsite.onclick = function(){
  window.location.href = "https://www.anniekwons.com/";
}
