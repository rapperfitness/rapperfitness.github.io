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
  strings: ["^1000 I am experienced in web development using HTML, CSS, and Javascript. "
  ],
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
var quote = document.getElementById("quote");
quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]





var anniesWebsite = document.getElementById('annies');
anniesWebsite.style.cursor = 'pointer';
anniesWebsite.onclick = function(){
  window.location.href = "https://www.anniekwons.com/";
}
