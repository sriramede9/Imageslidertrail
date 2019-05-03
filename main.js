var img = document.getElementById("im");

var pic = [
  "crab_on_sea-wallpaper-2560x1600.jpg",
  "colorful_powder_fight-wallpaper-2560x1440.jpg",
  "9932-4.jpg",
  "20575.jpg",
  "154566.jpg",
  "atv_racing_2-wallpaper-1920x1080.jpg",
  "burning_poker_joker-wallpaper-1280x720.jpg",
  "colorful_powder_fight-wallpaper-2560x1440.jpg"
];

//img.setAttribute()

var position = 0;

var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
//console.log(prev);

next.addEventListener("click", nextfun);
prev.addEventListener("click", prevfun);

function nextfun(e) {
  e.preventDefault();
  console.log(position);
  if (position < pic.length && position >= 0) {
    document.getElementById("im").src = "./Collection/" + pic[position];
    //console.log(document.getElementById("im").src);
    position++;
  }
}

function prevfun(e) {
  e.preventDefault();
  console.log(position);
  if (position <= pic.length && position > 0) {
    position--;
    document.getElementById("im").src = "./Collection/" + pic[position];
  }
}
