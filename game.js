function selectDiceImage(classVal) {
    const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    const basePath = "D:/Programming/Projects/Dice Game Project/dicegame/assets/";
  
    const randomIndex = Math.floor(Math.random() * 6);
    const selectedImage = diceImages[randomIndex];
    const imageElement = document.querySelector(classVal);
  
    if (imageElement) {
      imageElement.setAttribute("src", basePath + selectedImage);
    } else {
      console.error("Image element with class", classVal, "not found");
    }
    return randomIndex;
  }
  
  document.addEventListener('DOMContentLoaded', () => { 
    const refreshButton = document.querySelector(".btn");
    refreshButton.addEventListener("click", () => {
      var x = selectDiceImage(".img1");
      var y = selectDiceImage(".img2");
      if(x>y) document.querySelector(".h").innerHTML = "Player 1 wins!!🏆";
      else if(x===y)document.querySelector(".h").innerHTML = "It's a draw!!🤝"
      else document.querySelector(".h").innerHTML = "Player 2 wins!!🏆";
    });
});

  