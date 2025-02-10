const mainBtn = document.getElementById("main-btn");

// Ajout d'un événement "click" sur le bouton
mainBtn.addEventListener("click", function (event) {
  alert("Bouton cliked ! welcome to the  mode shopping.");
  console.log("button clicked");
  console.log(event.target);
  event.target.innerText = "i'm clicking";
});
