// clicking on the heart icon
let count = 0;
const clickHearts = document.getElementsByClassName("click-heart");
const countHeart = document.getElementById("count-heart");
for (const clickHeart of clickHearts) {
  clickHeart.addEventListener("click", function () {
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
    alert("Dialed " + showTitle + "-" + showNumber);
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

// click call history's clear btn
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = "";
});

// clicking on the copy btn
let copyCount = 0;
const clickCopyBtn = document.getElementsByClassName("copy-btn");
const countCopy = document.getElementById("count-copy");
for (const clickCopy of clickCopyBtn) {
  clickCopy.addEventListener("click", function () {
    copyCount++;
    countCopy.innerText = copyCount;

    // copy in clipboard
    const showNumber = clickCopy.parentNode.parentNode.children[2].innerText;
    navigator.clipboard.writeText(showNumber).then(function () {
      alert(`Copied to clipboard ${showNumber}`);
    });

    // console.log(showNumber)
  });
}
