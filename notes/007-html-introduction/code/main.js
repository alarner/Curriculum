function clickMe() {
  console.log("hello world, thanks for clicking");
  //   window.location = "https://google.com";
  const clickMeButton = document.querySelector(".customButton");
  clickMeButton.innerHTML = "Good job, you clicked me";
  console.log(clickMeButton);
  const name = window.prompt("what is your name?");
  document.write(`Hi ${name}`);
}
