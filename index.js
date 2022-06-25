const divcard = document.querySelector(".cardleft");
const divcardright = document.querySelector(".cardright");
const divcardleft = document.querySelector(".card");
const titre = document.querySelector("h1");
const textleft = document.querySelector(".pcard");

divcard.addEventListener("mouseenter", () => {
  divcard.style.background = "black";
});
divcard.addEventListener("mouseout", () => {
  divcard.style.background = "0";
});

divcardright.addEventListener("mouseenter", () => {
  divcardright.style.background = "black";
});
divcardright.addEventListener("mouseout", () => {
  divcardright.style.background = "0";
});

divcardleft.addEventListener("mouseenter", () => {
  divcardleft.style.background = "black";
});
divcardleft.addEventListener("mouseout", () => {
  divcardleft.style.background = "0";
});
