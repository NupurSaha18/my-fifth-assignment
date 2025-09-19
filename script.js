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

function getElement(Id) {
  const element = document.getElementById(Id);
  return element;
}

const callButtons = document.getElementsByClassName("call-btn");
for (const callBtn of callButtons) {
  callBtn.addEventListener("click", function () {
    // reduce coin
    let totalCoinElement = getElement("total-coin");
    let totalCoin = Number(totalCoinElement.innerText);

    if (totalCoin < 20) {
      alert("Coin is insufficient.");
      return;
    }
    let currentCoin = totalCoin - 20;
    totalCoinElement.innerText = currentCoin;

    // show alert for clicking call btn
    const showTitle = callBtn.parentNode.parentNode.children[0].innerText;
    const showNumber = callBtn.parentNode.parentNode.children[2].innerText;
    alert(showTitle + "-" + showNumber);
    // history will be added for clicking call btn
    // for current time
    let now = new Date();
    let time = now.toLocaleTimeString();

    const callHistoryContainer = getElement("history-container");

    const newHistory = document.createElement("div");
    newHistory.innerHTML = `<div class="p-5 mt-5 bg-[#FAFAFA] rounded-md flex items-center justify-between">
              <div>
                <h2 class="card-title font-bold">${showTitle}</h2>
                <p class=" text-2xl">${showNumber}</p>
              </div>
              <div>
                <p id="clock">${time}</p>
              </div>
            </div>
            `;
    callHistoryContainer.appendChild(newHistory);
  });
}


