const adviceId = document.querySelector(".id-text");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector(".btn");
const getAdviceData = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((adviceData) => {
      const data = adviceData.slip;
      renderAdvice(data);
    });
};
const renderAdvice = function (data) {
  adviceId.textContent = `ADVICE  #${data.id}`;
  adviceText.textContent = `"${data.advice}"`;
  // console.log(data);
};

getAdviceData();
btn.addEventListener("click", function () {
  getAdviceData();
});
