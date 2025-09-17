// clicking on the heart icon
let count = 0;
const clickHeart = document.getElementsByClassName("click-heart");
const countHeart = document.getElementById("count-heart");
for (let i = 0; i < clickHeart.length; i++) {
  clickHeart[i].addEventListener("click", function () {
    count++;
    countHeart.innerText = count;
  });
}
