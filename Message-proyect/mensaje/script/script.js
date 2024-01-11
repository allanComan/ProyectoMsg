const wrapper = document.querySelector(".content-wraper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const pd = document.querySelector(".pd-container");

yesBtn.addEventListener("click", () => {
  question.textContent = "Perfecto, nos vemos el jueves 4:00pm ó 4:30pm  c:";

  gif.src =
    "https://i.pinimg.com/originals/ca/42/1d/ca421d4887aad40d311289ca53bce19e.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  pd.style.visibility = "visible";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
