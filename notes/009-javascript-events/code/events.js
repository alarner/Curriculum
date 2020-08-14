console.log("test");

const sayHello = () => {
  alert("hello");
};

const game = document.querySelector("#gameMessage");
const rollButton = document.querySelector("#roll");
const openButton = document.querySelector("#open");
const userResponse = document.querySelectorAll("#userResponse");
const kitten = document.querySelector("#kitten");
kitten.style.top = "10px";
kitten.style.marginLeft = "10px";

rollButton.addEventListener("click", () => {
  game.innerHTML = `You rolled a ${Math.floor(Math.random() * 6 + 1)}`;
  game.classList.remove("inverted");
});

openButton.addEventListener("click", () => {
  game.innerHTML = `You opened the door and said "${userResponse[0].value}"`;
  game.classList.add("inverted");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    const top = parseInt(kitten.style.top);
    kitten.style.top = `${top - 5}px`;
  }
  if (event.key === "ArrowDown") {
    const top = parseInt(kitten.style.top);
    kitten.style.top = `${top + 5}px`;
  }
  if (event.key === "ArrowLeft") {
    const marginLeft = parseInt(kitten.style.marginLeft);
    kitten.style.marginLeft = `${marginLeft - 5}px`;
  }
  if (event.key === "ArrowRight") {
    const marginLeft = parseInt(kitten.style.marginLeft);
    kitten.style.marginLeft = `${marginLeft + 5}px`;
  }
});

// const button = document.querySelector("#button");
// button.addEventListener("click", sayHello);
